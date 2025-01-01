import React from 'react'

function Restaurant(props) {
    let img=props.image;
  return (
    <div className=' border bg-gray-100 p-4 shadow-md '>
         <div className='max-w-48 h-48 bg-center bg-cover rounded-lg rounded-b-none' style={{backgroundImage:`url(${img})`}}>
         
         </div>

         <div className='border max-w-48 p-2 shadow-md '>
             <h1 className='text-2xl font-md py-1'>{props.name}</h1>
             <p className=' py-1'>{props.opening}-{props.closing}</p>
              <p className=' py-1'>{props.address}</p>
              <button className='px-4 py-2 bg-blue-400 hover:bg-blue-500 rounded-lg'>View</button>
         </div>
    </div>
  )
}

export default Restaurant