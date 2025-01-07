import { createContext, useContext, useEffect, useState } from 'react'

export const Currentcontext=createContext();


export const Currentprovider=({children})=>{
    const [restaurantid,setrestaurantid]=useState(()=>{
        const restaurantid=localStorage.getItem('restaurantid');
        return restaurantid?JSON.parse(restaurantid):null;
    })
    const [image,setimage]=useState(()=>{
        const image=localStorage.getItem('image');
        return image?JSON.parse(image):'';
    })
    useEffect(()=>{
        if(image){
            localStorage.setItem('image',JSON.stringify(image))
        }
        else{
            localStorage.removeItem('image');
        }
    },[image])
    useEffect(()=>{
        if(restaurantid){
            localStorage.setItem('restaurantid',JSON.stringify(restaurantid))
        }
        else{
            localStorage.removeItem('restaurantid');
        }
    },[restaurantid])
    return (<Currentcontext.Provider value={{restaurantid,setrestaurantid,image,setimage}}>
        {children}
    </Currentcontext.Provider>

    )
}

export const Currentrest=()=>{
    const context=useContext(Currentcontext);
    if(!context)
    {
        throw new Error("context undefined")
    }
    return context;
}