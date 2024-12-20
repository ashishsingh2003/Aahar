import React from 'react'

function SignUp() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-400 bg-cover bg-center' style={{backgroundImage:`url(${bgImage})`}}>
    <div className='w-full max-w-md space-y-4 bg-white shadow-md p-8 rounded-lg'>
     
     
        <h2 className='text-2xl text-center font-bold'>Sign Up</h2>

        <div className='space-y-6'>
        <div>
        <label className='block  py-2' htmlFor="">Username</label>
        <input className=' w-full border px-4 py-2 bg-gray-50 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300' type="text" placeholder="username" />
        </div>
        <div>
        <label className='block  py-2' htmlFor="">Email</label>
        <input className=' w-full border px-4 py-2 bg-gray-50 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300' type="text" placeholder="email" />
        </div>
        <div>
        <label className='block  py-2' htmlFor="">Password</label>
        <input className='w-full border px-4 py-2 bg-gray-50  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300'type="text" placeholder="password" />
        </div>
        </div>
        <button className='w-full bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600'>SignUP</button>
    </div>
</div>
  )
}

export default SignUp