import React from 'react'
import bgImage from '..Images/background.jpg';
function Login() {
   
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 h-screen bg-cover bg-center  '   style={{ backgroundImage: `url(${bgImage})` }}>
        <div className='w-full max-w-md space-y-4 p-8 bg-gray-200 rounded-lg shadow-md'>
        <h2 className='text-2xl text-center font-bold' >Login </h2>
        <div className='space-y-6'>
            <div>
        <label className="block text-sm font-medium" htmlFor="email">Email address</label>
        <input className="w-full border px-4 py-2 mt-2 text-gray-700 bg-gray-50 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"type="email" name="email" id="email"placeholder="abc@gmail.com" />
        </div>
        <div>
        <label className='block text-sm font-medium' htmlFor="password">Password</label>
        <input className="w-full border px-4 py-2 mt-2 text-gray-700 bg-gray-50 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" id="password" name="password"type="password" placeholder='password' />
        </div>
        <button className='px-4 mt-4 py-2 w-full hover:bg-blue-600 bg-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'>Login</button>
        </div>
        <p className='w-full text-center'>
            Don't have an account, <a href="" className='text-blue-400'>SignUp</a>
        </p>
        </div>
    </div>
  )
}

export default Login