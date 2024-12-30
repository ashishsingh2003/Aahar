import React from 'react'

function Menuitem(props) {
  // 1rem=16px 1rem=4 unit of tailwind
  return (
    <div className=' ml-0 w-192 h-32 m-4 shadow-md  rounded-lg border px-4 py-2 flex justify-between items-center justify-center'>
       <div>
        <img className="max-h-200 h-36  w-40 p-4 rounded-lg "src={props.image} alt="" />
       </div>
       <div>
        <h1 className='text-2xl font-bold-md '>{props.name}</h1>
        <p className='mt-3'>{props.price} Rs.</p>
        <button className='px-4 py-2 rounded-lg bg-green-800 mt-2'>In-stock</button>
        <button className='px-4 py-2 rounded-lg bg-red-600 mx-2 mt-2'>Out-stock</button>
       </div>
      
       
     
    </div>
  )
}

export default Menuitem