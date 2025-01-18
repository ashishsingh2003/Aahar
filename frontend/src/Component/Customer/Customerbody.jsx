import React, { useEffect, useState } from 'react'
import bgImage from '../../Images/Customerback.jpg'
import Restaurant from './Restaurant';
import axios from 'axios';
function Customerbody() {
    const [restaurant,setrestaurant]=useState([]);
    const fun=()=>{
    useEffect(()=>{
        const fetchrestaurant=async ()=>{
            try {
                let res=await axios.get('http://localhost:8080/getrestaurant');
                setrestaurant(res.data);
            } catch (error) {
                console.log(error.message);
            }
            

        }
        fetchrestaurant();
    },[])}
    fun();
  return (
    <div>
        <div className='w-full h-96 bg-cover bg-center flex items-center justify-center'  style={{backgroundImage: `url(${bgImage})`}}>
             <div className='flex'>
                <input className='w-full w-96 px-4 py-2 rounded-lg rounded-r-none' type="text" placeholder='Search restaurant' />
                <button className='px-4 py-2 rounded-lg bg-blue-400 rounded-l-none hover:bg-blue-500'>Search</button>
             </div>
            
        </div>
        
        <div>
        <h1 className='text-5xl m-2  mt-5 text-center' style={{fontFamily:"sans-serif"}}>List of the Famous restaurant</h1>
                 <ul>
                    {
                        restaurant.map((item,id)=>{
                            return <li key={item._id}><Restaurant  id={item.ownerid}name={item.name} image={item.image} address={item.address} opening={item.opening} closing={item.closing}/></li>
                        })
                    }
                 </ul>
             </div>
    </div>
  )
}

export default Customerbody