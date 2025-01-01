import { createContext, useContext, useEffect, useState } from "react";

export const Customercontext=createContext();

export const Customerprovider=({children})=>{
    const [customerid,setcustomerid]=useState(()=>{
        const customer=localStorage.getItem('customerid');
      return customer? JSON.parse(customer):null
    });
    const [customername,setcustomername]=useState(()=>{
        const customer=localStorage.getItem('customername');
      return customer? JSON.parse(customer):null
    });
     useEffect(()=>{
          if(customerid)
          {
             localStorage.setItem('customerid',JSON.stringify(customerid))
          }
          else{
            localStorage.removeItem('customerid');
          }
        },[customerid])
        useEffect(()=>{
          if(customername)
            {
               localStorage.setItem('customername',JSON.stringify(customername))
            }
            else{
              localStorage.removeItem('customername');
            }
        },[customername])
    return (<Customercontext.Provider value={{customerid,setcustomerid,customername,setcustomername}}>
       {children}
    </Customercontext.Provider>)
}

export const Customerrole=()=>{
    const context=useContext(Customercontext);
    if (!context) {
        throw new Error('useRole must be used within a RoleProvider');
      }
      return context;
}