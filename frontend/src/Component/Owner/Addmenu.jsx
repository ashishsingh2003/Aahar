import React, { useRef } from 'react'
import bgImage from '../../Images/background.jpg'
import axios from 'axios';
import { Ownerrole } from '../../context/Ownerid';
function Addmenu() {
    let imageref=useRef();
    let nameref=useRef();
    let ingredref=useRef();
    let priceref=useRef();
    let {ownerid}= Ownerrole();
    const addmenu=async (e)=>{
          e.preventDefault();
          const name=nameref.current.value;
          const image=imageref.current.value;
          const ingredients=ingredref.current.value;
          const price=priceref.current.value;
          try {
            let res=await axios.post('http://localhost:8080/addmenu',{image,name,ingredients,price,ownerid});
             console.log(res);
          } catch (error) {
            console.log(error.message);
          }
          

    }
  return (
    <div className='flex items-center justify-center bg-gray-200 min-h-screen bg-cover bg-center' style={{backgroundImage:`url(${bgImage})`}}>
        <div className='w-full max-w-md border shadow-md bg-white space-y-4 p-8 rounded-lg'>
            <h1 className='text-2xl text-center font-bold mt-2'>Add Menu</h1>
            <div className='space-y-6 '>
            <div>
            <label className='block text-sm' htmlFor="image">Image</label>
            <input ref={imageref}className='w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400' type="text" id="image"/>
            </div>
            <div>
                <label className='block text-sm'htmlFor="name">Name</label>
                <input ref={nameref} id="name" className='w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400' type="text" />
            </div>
            <div>
                <label className='block text-sm' htmlFor="address">Ingredients</label>
                <input ref={ingredref}id="address" className='w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400' type="text" />
            </div>
            <div>
                <label className='block text-sm' htmlFor="speciality">Price</label>
                <input ref={priceref}id="speciality" className='w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400' type="text" />

            </div>
             <button onClick={addmenu}className='px-4 py-2 mt-2 bg-green-500 hover:bg-green-700 rounded-lg w-full'>Add</button>
            </div>
        </div>
    </div>
  )
}

export default Addmenu