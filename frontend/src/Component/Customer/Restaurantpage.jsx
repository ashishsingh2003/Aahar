import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import Menu from './Menu';
import { Currentrest } from '../../context/Currentrestaurant';
function Restaurantpage() {
    const location=useLocation();
    
  
    const {restaurantid,image}=Currentrest();
    const ownerids=restaurantid;
    console.log(ownerids);
   //why infinite rendering?-> solved with contextapi causing rerendering because i was passing object as props by navigate function 
   //and when an object or function is passed as props the refrences are recreated every time when the page renders causing infinite rendering
//rerender->1.state changes 2.parent rerenders 3.props->function or object
    const [menu,setmenu]=useState([]);
     useEffect(()=>{
      const fetchrestaurantmenu=async ()=>{
        try {
          let res=await axios.post('http://localhost:8080/getrestaurantmenu',{ownerids});
          console.log(res)
          if(res.data.length>0){
          setmenu(res.data);
          }

        } catch (error) {
          console.log(error.message);
        }
      }
      fetchrestaurantmenu();},[])
  
  
  return (
    <div className='min-h-screen bg-center bg-cover' style={{backgroundImage:`url(${image})`}}>
        <h1 className='text-center text-4xl font-bold text-white'>Menu of Old Monk</h1>
        <div>
          <ul>
            {
              menu.map((item,id)=>{
                return <li key={item._id}><Menu id={item._id} stock={item.stock} image={item.image} price={item.price} name={item.name}/></li>
              })
            }
          </ul>
        </div>
    </div>
  )
}

export default Restaurantpage