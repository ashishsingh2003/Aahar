import React from 'react';
import bgImage from '../Images/Landing.jpg';
import {useNavigate} from 'react-router-dom';
function Landing() {
  const navigate=useNavigate();
  const login=(e)=>{
       e.preventDefault();
       navigate('/login');

  }
  const signup=(e)=>{
    e.preventDefault();
    navigate('/signup');

}
  return (
    <div className='scrollbar-hide  flex items-center justify-center min-h-screen h-screen bg-cover bg-center' style={{ backgroundImage: `url(${bgImage})` }}>
        <div className='space-y-5'>
            <p className='italic block text-6xl font-bold text-green-900'>Discover the best food in your city</p>
            <div className='flex justify-center'>
             <button onClick={login} className='px-5 py-2 bg-blue-400 mx-3 rounded-lg hover:bg-blue-500'>Login</button>
              <button onClick={signup} className='px-4 py-2 bg-blue-400 mx-3 rounded-lg hover:bg-blue-500'>SignUp</button>
              </div>

        </div>
    </div>
  )
}

export default Landing