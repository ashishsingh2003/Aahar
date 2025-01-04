import React from 'react'

function Menu(props) {
  return (
    <div className='bg-opaque bg-green-300 bg-opacity-50 ml-0 w-192 h-32 m-4 shadow-md mb-2 rounded-lg border p-5 py-2 flex justify-between items-center justify-center'>
    <div>
     <img className="max-h-200 h-36 w-40 p-4 rounded-lg " src={props.image} alt="" />
    </div>
    <div className='w-48'>
     <h1 className='text-2xl font-bold-md '>{props.name} {props.stock=="true"? <button className='text-sm px-2 py-1 rounded-lg bg-green-500'>In-stock</button> : <button className='text-sm px-2 py-1 rounded-lg bg-red-500'>Out-stock</button>}</h1>
     <p className='mt-3'>{props.price} Rs.</p>
     <button className='px-4 py-2 rounded-lg bg-green-800 mt-2'>Pay</button>
    
    </div>
   
    
  
 </div>
  )
}

export default Menu