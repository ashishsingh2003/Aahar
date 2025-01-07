import { useState } from 'react'

import './App.css'
import Login from './Component/Login'
import Dashboard from './Component/Dashboard'
import SignUp from './Component/SignUp'
import {Routes,Route} from 'react-router-dom'
import OwnerDashboard from './Component/OwnerDashboard'
import CustomerDashboard from './Component/CustomerDashboard'
import Addmenu from './Component/Owner/Addmenu'
import Register from './Component/Owner/Yetregister'
import { Ownerprovider } from './context/Ownerid'
import Menu from './Component/Owner/Menu'
import Restaurantpage from './Component/Customer/Restaurantpage'
import Payment from './Component/Customer/Payment'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     
      {/* <Login/>
    <SignUp/> */}
    
    <Routes>
         <Route path="/" element={<Dashboard/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
         <Route path="/signup" element={<SignUp/>}></Route>
         <Route path="/ownerdashboard" element={<OwnerDashboard/>}></Route>
         <Route path="/customerdashboard" element={<CustomerDashboard/>}></Route>
         <Route path="/addmenu" element={<Addmenu/>}></Route>
         <Route path="/register" element={<Register/>}></Route>
         <Route path="/menu" element={<Menu/>}></Route>
         <Route path="/restaurantpage" element={<Restaurantpage/>}></Route>
         <Route path="/successfull/:productid/:quantity" element={<Payment/>}></Route>
    </Routes>
    </div>
  )
}

export default App
