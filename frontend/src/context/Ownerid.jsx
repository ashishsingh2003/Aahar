import React, { createContext, useContext, useState } from 'react'

export const Ownercontext=createContext();


export const Ownerprovider=({children})=>{
    const [ownerid,setownerid]=useState(1);
    const [ownername,setownername]=useState('John deo');
    return (<Ownercontext.Provider value={{ownerid,setownerid,ownername,setownername}}>
      {children}
    </Ownercontext.Provider>)
}
export const Ownerrole = () => {
    const context = useContext(Ownercontext);
    if (!context) {
      throw new Error('useRole must be used within a RoleProvider');
    }
    return context;
  };