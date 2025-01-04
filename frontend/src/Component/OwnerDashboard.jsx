import React, { useContext } from 'react'
import Navbar from './Owner/Navbar'
import Ownerbody from './Owner/Ownerbody'
import { Ownerrole } from '../context/Ownerid'
import Customerbody from './Customer/Customerbody';

function OwnerDashboard() {
  const {ownerid}=Ownerrole();
  console.log(ownerid);
  return (
    <div>
      <Navbar/>
      <Ownerbody/>
    </div>
  )
}

export default OwnerDashboard