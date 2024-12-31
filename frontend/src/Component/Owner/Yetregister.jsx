import React, { useRef } from 'react'
import bgImage from '../../Images/background.jpg'
import { Ownerrole } from '../../context/Ownerid';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Yetregister() {
    let nameref=useRef();
    let imageref=useRef();
    let addressref=useRef();
    let openingref=useRef();
    let closingref=useRef();
    const {ownerid}=Ownerrole();
    const register=async (e)=>{
        e.preventDefault();
        const name=nameref.current.value;
        const image=imageref.current.value;
        const address=addressref.current.value;
        const opening=openingref.current.value;
        const closing=closingref.current.value;
          if(name==="")
          {
              toast.error("Name is required",{
                position:"top-right"
              })
          }
          else if(image==="")
          {
            toast.error("image url is required",{
              position:"top-right"
            })
          }
          else if(address==="")
            {
              toast.error("address is required",{
                position:"top-right"
              })
            }
          else if(opening==="")
              {
                toast.error("Opening time is required",{
                  position:"top-right"
                })
          }
          else if(closing==="")
            {
              toast.error("Closing time is required",{
                position:"top-right"
              })
        }
        try {
            let res=await axios.post('http://localhost:8080/registerrestaurant',{image,name,address,opening,closing,ownerid});
            console.log(res);
            toast.success("Restaurant added successfully",{
                          position:"top-right"
                         })
        } catch (error) {
            toast.warn("already registered",{
                position:"top-right"
            })
        }
       

    }
  return (
       <div className='flex items-center justify-center bg-gray-200 min-h-screen bg-cover bg-center' style={{backgroundImage:`url(${bgImage})`}}>
               <div className='w-full max-w-md border shadow-md bg-white space-y-4 px-8 py-4 rounded-lg'>
                   <h1 className='text-2xl text-center font-bold mt-2'>Register</h1>
                   <div className='space-y-6 '>
                   <div>
                   <label className='block text-sm' htmlFor="image">Image</label>
                   <input ref={imageref} className='w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400' type="text" id="image"/>
                   </div>
                   <div>
                       <label className='block text-sm'htmlFor="name">Restaurant Name</label>
                       <input ref={ nameref} id="name" className='w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400' type="text" />
                   </div>
                   <div>
                       <label className='block text-sm' htmlFor="address">Address</label>
                       <input ref={addressref} id="address" className='w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400' type="text" />
                   </div>
                   <div>
                       <label className='block text-sm' htmlFor="opening">Opening Time</label>
                       <input ref={openingref} id="opening" className='w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400' type="time" />
       
                   </div>
                   <div>
                       <label className='block text-sm' htmlFor="closing">Closing Time</label>
                       <input ref={closingref} id="closing" className='w-full border rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400' type="time" />
       
                   </div>
                    <button onClick={register}className='px-4 py-2 mt-2 bg-green-500 hover:bg-green-700 rounded-lg w-full'>Register</button>
                   </div>
               </div>
               <ToastContainer/>
           </div>
  )
}

export default Yetregister