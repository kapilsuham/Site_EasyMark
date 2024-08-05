'use client'

import { forgetPasswordCodeSchema } from "@/(more)/schema/forgetPasswordCodeSchema"
import { ApiResponse } from "@/(more)/types/ApiResponse"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useParams, useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { useState } from "react"
import { toast } from "sonner"
import Loader from "@/components/Loader"
import Image from "next/image"
import { SITE_NAME } from "@/app/ConfigApp"
const VerifyAccount= ()=> {
  const router=useRouter()
  const [isSubmitting,setIsSubmitting]=useState(false)
  const params=useParams<{username:string}>()
  const form=useForm<z.infer<typeof forgetPasswordCodeSchema>>({
    resolver:zodResolver(forgetPasswordCodeSchema),
    defaultValues:{
      password:'',
      code:''
    }
  })
  const onSubmit=async(data:z.infer<typeof forgetPasswordCodeSchema>)=>{    
    setIsSubmitting(true)
    try {
      await axios.post(`/api/verify-code`,
        {username:params.username,
        code:data.code}
      )
      const password=data.password
      await axios.post<ApiResponse>('/api/change-password', { username: params.username, password })
      toast('successfully change password')
      // console.log(response?.data?.data?.email);

      router.replace(`/sign-in`)

      toast('success')
    } catch (error) {
      console.log("error in changing password",error);
      toast("Invalid Code")
    }
    finally{
      setIsSubmitting(false)
    }
  }


  async function sleep(time:number) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  const resendEmail=async()=>{
    setIsSubmitting(true)
    const url =new URLSearchParams(location.search)
    const email=url.get('email')    
    try {
      const response=await axios.post(`/api/forgetpassword-resend-code`,
      {username:params.username,email})
      
      await sleep(8000)     
      toast('Code Send')
    } catch (error) {
      console.log("error in sending code",error);
      toast("Resend code failed")
    }
    setIsSubmitting(false)
  }
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-base-content">Verify now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={form.handleSubmit(onSubmit)} className="card-body">
      <div className="flex text-xl font-bold items-center m-auto text-base-content cursor-pointer gap-2">
              <Image src='https://lemonsqueezy.imgix.net/design/112348/e14b4f14-f29c-4d19-83de-104808f7eda6.png?fit=clip&h=100&ixlib=php-3.3.1&w=100&s=3724ef4df78ce51df6f700522edee435' height={50} width={50} alt="logo" />
              <span>{SITE_NAME}</span>
            </div>
      <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered text-base-content" {...form.register("password")} required />
              </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Verify Code</span>
          </label>
          <input autoComplete="off" type="code" placeholder="Code" className="input input-bordered text-base-content" {...form.register("code")} />
          
        </div>
        <div className="form-control lg:mt-3">
          <button type="submit" disabled={isSubmitting} className="btn bg-green-500"> {isSubmitting?(
          <>
          <Loader/>
          </>
        ):("Submit")}</button>
        </div>
          <button className="btn bg-green-500" disabled={isSubmitting} onClick={()=>resendEmail()}>
      Resend Code</button>
      </form>
    </div>
  </div>
</div>
  )
}

export default VerifyAccount