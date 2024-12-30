import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Landing from './Landing'
import Footer from './Footer';

function Dashboard() {
  // useEffect(() => {
  //   // Add Tailwind class to body on component mount
  //   document.body.classList.add("overflow-hidden");

  //   // Cleanup on component unmount
  //   return () => {
  //     document.body.classList.remove("overflow-hidden");
  //   };
  // }, []);
  return (
    <div className='overflow-hidden scrollbar-hide'>
        <Navbar/>
     
        <Landing/>
        <Footer/>
      
    </div>
  )
}

export default Dashboard