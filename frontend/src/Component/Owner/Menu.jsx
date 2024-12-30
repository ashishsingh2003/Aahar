import React, { useEffect, useState } from 'react'
import { Ownerrole } from '../../context/Ownerid';
import axios from 'axios';
import Menuitem from './Menuitem';
function Menu() {
  const [menu,setmenu]=useState([]);
  let {ownerid}=Ownerrole();
  useEffect(()=>{
    const fetchmenu=async()=>{
      try {
        let res=await axios.post('http://localhost:8080/getmenu',{ownerid});
        console.log(res);
         setmenu(res.data);
        
      } catch (error) {
        console.log(error.message);
      }
    }
    
   fetchmenu();
  },menu)
  return (
    <div className=''>
      <div>
        <h1 className='text-3xl text-center font-bold'> Menu of Our Restaurant</h1>
        </div>
        <div>
        <ul>
        {
        menu.map((item,id)=>{
            return <li><Menuitem key={id} image={item.image} name={item.name} price={item.price}/></li>
        })
        }
        </ul></div>
      
    </div>
  )
}

export default Menu