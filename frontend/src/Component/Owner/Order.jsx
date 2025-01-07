import React from 'react'

function Order(props) {

  return (
    <div className=' bg-green-300 bg-opacity-50 ml-0 w-192  h-32 m-4 shadow-md mb-2 rounded-lg border px-4 py-2 '>
    
    <div className='w-192'>
     <h1 className='text-2xl font-bold-md '>{props.name} </h1>
     <p className='mt-3'>{props.quantity}</p>
     <p className='mt-3'>{props.address}</p>
     <p className='mt-3'>{props.pincode}</p>
     <p className='mt-3'>{props.mobile}</p>
     </div>
    
  
 </div>
  )
}

export default Order