import React, { createContext, useContext, useEffect, useState } from 'react'

export const Ownercontext=createContext();


export const Ownerprovider=({children})=>{
    const [ownerid,setownerid]=useState(()=>{
      const owner=localStorage.getItem('ownerid');
      return owner? JSON.parse(owner):null
    });
    const [ownername,setownername]=useState(()=>{
      const ownernam=localStorage.getItem('ownernam');
      return ownernam?JSON.parse(ownernam):null
    });
    useEffect(()=>{
      if(ownerid)
      {
         localStorage.setItem('ownerid',JSON.stringify(ownerid))
      }
      else{
        localStorage.removeItem('ownerid');
      }
    },[ownerid])
    useEffect(()=>{
      if(ownername)
        {
           localStorage.setItem('ownernam',JSON.stringify(ownername))
        }
        else{
          localStorage.removeItem('ownernam');
        }
    },[ownername])
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