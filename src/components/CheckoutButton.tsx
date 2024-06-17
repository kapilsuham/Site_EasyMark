"use client";
import axios from "axios";
import Loader from "./Loader";
import { useState } from "react";
import { signOut } from "next-auth/react";

export default function CheckoutButton(data:any) {
  
  const [isSubmitting,setisSubmitting]=useState(false)
  const buyProduct = async (data:any) => {
    setisSubmitting(true)
    const {mode}=data
    const {productId}=data
    // console.log(data);
    
    try {
      const response = await axios.post("/api/purchaseProduct", {
        productId,mode
      });
      window.open(response.data.checkoutUrl, "_blank");
      // console.log(response.data);
    
      signOut()
    } catch (error) {
      console.error(error);
      alert("Failed to buy product");
    }
    finally{
      setisSubmitting(false)
    }
  };

  return (
    <>

      <button className="btn btn-wide" disabled={isSubmitting} onClick={() => buyProduct(data)} >{isSubmitting ? (<div className='btn btn-wide bg-yellow-500'><Loader /></div>) : (<div className='btn hover:bg-yellow-300 btn-wide bg-yellow-500 text-success-content'> <img className='w-8' src="logopng.png" alt="" />Get ShipForever</div>)}</button>

    </>

  )
}