import React, { useContext, useRef } from 'react'
import loginback from '../Images/loginback.jpg'
import { Link, useActionData, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Ownercontext, Ownerrole } from '../context/Ownerid';
import { Customerrole } from '../context/Customerid';
function Login() {
  const navigate=useNavigate();
   let emailref=useRef();
   let passwordref=useRef();
   let roleref=useRef();
   const {setownername,setownerid}=Ownerrole();
   const {setcustomername,setcustomerid}=Customerrole();
   const login =async (e)=>{
    e.preventDefault();
    const email=emailref.current.value;
    const password=passwordref.current.value;
       
      const role=roleref.current.value;
    try {
       
       console.log(role);
       //always use post get ke sath data ja nhi rha tha.
      const user=await axios.post('http://localhost:8080/login',{email,password,role});
      //whatever data we got how to check it is the desired data or not.
      //how to handle the incomng data.
      console.log(user.data.role);
      if(user.data!=false)
      {  console.log(user.data.role=="Restaurant Owner");
         if(user.data.role=="Restaurant Owner")
         {
            console.log(user);
            setownerid(user.data._id);
            setownername(user.data.username);
           navigate('/ownerdashboard');
         }
         else{
          setcustomerid(user.data._id);
          setcustomername(user.data.username);
          navigate('/customerdashboard');
         }
      }
      else{
        alert("user does not exist");
      }
    } catch (error) {
         console.log("yha");
        console.log(error.message);
    }
      

   }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 h-screen bg-cover bg-center  '   style={{ backgroundImage: `url(${loginback})` }}>
        <div className='w-full max-w-md space-y-4 p-8 bg-white rounded-lg shadow-md'>
        <h2 className='text-2xl text-center font-bold' >Login </h2>
        <div className='space-y-6'>
            <div>
        <label className="block text-sm font-medium" htmlFor="email">Email address</label>
        <input ref={emailref}className="w-full border px-4 py-2 mt-2 text-gray-700 bg-gray-50 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"type="email" name="email" id="email"placeholder="abc@gmail.com" />
        </div>
        <div>
        <label className='block text-sm font-medium' htmlFor="password">Password</label>
        <input ref={passwordref} className="w-full border px-4 py-2 mt-2 text-gray-700 bg-gray-50 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" id="password" name="password"type="password" placeholder='password' />
        </div>
        <div>
        <label className='block  font-medium' htmlFor="">Role</label>
         <select ref={roleref} className="w-full px-4 py-2 bg-gray-50 border text-gray-400 border-gray-300 rounded-lg focus:outline-none focus:ring-2"name="" id="">
            <option className='text-gray-50' value="customer">Customer</option>
            <option value="Restaurant Owner">Restaurant Owner</option>
         </select>
        </div>
        <button onClick={login} className='px-4 mt-4 py-2 w-full hover:bg-blue-600 bg-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'>Login</button>
        </div>

        <p className='w-full text-center'>
            Don't have an account, <Link to="/signup" className='text-blue-400'>SignUp</Link>
        </p>
        </div>
    </div>
  )
}

export default Login