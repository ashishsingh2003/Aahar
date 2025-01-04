import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import Menu from './Menu';
function Restaurantpage() {
    let location=useLocation();
    let {state}=location;
  
    let ownerid=state?.ownerid;
   
    const [menu,setmenu]=useState([]);
   const fun= ()=>{useEffect(()=>{  //why useeffect is always running
      const fetchrestaurantmenu=async ()=>{
        try {
          let res=await axios.post('http://localhost:8080/getrestaurantmenu',{ownerid});
          console.log(res)
          setmenu(res.data);

        } catch (error) {
          console.log(error.message);
        }
      }
      fetchrestaurantmenu();
    },[menu])}
    fun();
  return (
    <div className='min-h-screen bg-center bg-cover' style={{backgroundImage:`url(${state?.image})`}}>
        <h1 className='text-center text-4xl font-bold text-white'>Menu of Old Monk</h1>
        <div>
          <ul>
            {
              menu.map((item,id)=>{
                return <li><Menu id={item._id} stock={item.stock} image={item.image} price={item.price} name={item.name}/></li>
              })
            }
          </ul>
        </div>
    </div>
  )
}

export default Restaurantpage