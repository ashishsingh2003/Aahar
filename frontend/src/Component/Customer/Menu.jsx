import React, { useRef } from 'react'
import axios from 'axios'
function Menu(props) {
  let quantityref=useRef();
  
  const checkout=async (e)=>{
    e.preventDefault();
    const quantity=quantityref.current.value;
    const id=props.id;
    const price=props.price;
    const name=props.name;
    
    try {
      const res=await fetch("http://localhost:8080/checkout",{
          method:"POST",
          headers:{
              "Content-Type":"application/json",
          },
          mode:"cors",
          body:JSON.stringify({
              items:[
                  {   id:id,
                      quantity:quantity,
                      price:price,
                      name:name
                  },
              ]
          })
      });
    
      
      const data=await res.json();
      console.log(data);
      window.location=data.url;}
    catch(error){
         console.log(error.message);
       }
  
}
  return (
    <div className='bg-opaque bg-green-300 bg-opacity-50 ml-0 w-192 h-auto m-4 shadow-md mb-2 rounded-lg border p-5 py-2 flex justify-between items-center justify-center'>
    <div>
     <img className="max-h-200 h-36 w-40 p-4 rounded-lg " src={props.image} alt="" />
    </div>
    <div className='w-48'>
     <h1 className='text-2xl font-bold-md '>{props.name} {props.stock=="true"? <button className='text-sm px-2 py-1 rounded-lg bg-green-500'>In-stock</button> : <button className='text-sm px-2 py-1 rounded-lg bg-red-500'>Out-stock</button>}</h1>
     <p className='mt-3'>{props.price} Rs.</p>
     <label className="flex"htmlFor="quantity">Enter Quantity</label>
     <input  ref={quantityref} type="text" id="quantity" />
     <button onClick={checkout} className='px-4 py-2 rounded-lg bg-green-800 mt-2'>Pay</button>
    
    </div>
   
    
  
 </div>
  )
}

export default Menu