"use client";

import axios from "axios";
import Loader from "./Loader";
import { useState } from "react";

export default function CheckoutButton(data: any) {

  const [isSubmitting, setisSubmitting] = useState(false)
  const buyProduct = async (data: any) => {
    setisSubmitting(true)
    const { mode } = data
    const { productId } = data
    // console.log(data);

    try {
      const response = await axios.post("/api/purchaseProduct", {
        productId, mode
      });
      window.open(response.data.checkoutUrl, "_blank");
      // console.log(response.data);

    } catch (error) {
      console.error(error);
      alert("Failed to buy product");
    }
    finally {
      setisSubmitting(false)
    }
  };
  return (
    <>
      <button disabled={isSubmitting} onClick={() => buyProduct(data)} >{isSubmitting ? (<div className='btn bg-green-500 btn-wide'><Loader /></div>) : (<div className='btn btn-wide rounded-lg hover:bg-green-400  bg-green-500 text-success-content'>Buy Now</div>)}</button>
    </>

  )
}