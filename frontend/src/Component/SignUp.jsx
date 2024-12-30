import React, { useRef } from 'react'
import bgImage from '../Images/background.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function SignUp() {
  let emailref=useRef();
     let passwordref=useRef();
     let roleref=useRef();
     let usernameref=useRef();
     let navigate=useNavigate();
     const signup=async (e)=>{
      e.preventDefault();
      let username=usernameref.current.value;
      let password=passwordref.current.value;
      let role=roleref.current.value;
      let email=emailref.current.value;
      try {
        let res= await axios.post('http://localhost:8080/signup',{username,email,password,role})
        console.log(res.data);
        if(res.data==true)
        {
          navigate('/login');
        }
        else{
          console.log(res);
          
        }
      } catch (error) {
        alert(error.message);
      }
      

     }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-400 bg-cover bg-center' style={{backgroundImage:`url(${bgImage})`}}>
    <div className='w-full max-w-md space-y-4 bg-white shadow-md p-8 rounded-lg'>
     
     
        <h2 className='text-2xl text-center font-bold'>Sign Up</h2>

        <div className='space-y-6'>
        <div>
        <label className='block  py-2' htmlFor="">Username</label>
        <input  ref={usernameref

        }className=' w-full border px-4 py-2 bg-gray-50 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300' type="text" placeholder="username" />
        </div>
        <div>
        <label className='block  py-2' htmlFor="">Email</label>
        <input ref={emailref} className=' w-full border px-4 py-2 bg-gray-50 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300' type="text" placeholder="email" />
        </div>
        <div>
        <label className='block  py-2' htmlFor="">Password</label>
        <input ref={passwordref} className='w-full border px-4 py-2 bg-gray-50  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300'type="text" placeholder="password" />
        </div>
        <div>
        <label className='block py-2' htmlFor="">Role</label>
         <select ref={roleref} className="w-full px-4 py-2 bg-gray-50 border text-gray-400 border-gray-300 rounded-lg focus:outline-none focus:ring-2"name="" id="">
            <option className='text-gray-50' value="customer">customer</option>
            <option value="Restaurant Owner">Restaurant Owner</option>
         </select>
        </div>
        </div>
        <button onClick={signup}className='w-full bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600'>SignUp</button>
    </div>
</div>
  )
}

export default SignUp