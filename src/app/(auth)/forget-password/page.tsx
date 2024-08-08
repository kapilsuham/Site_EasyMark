'use client'

import { useForm } from "react-hook-form"
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from 'axios'
import { ApiResponse } from "@/(more)/types/ApiResponse"
import { toast } from "sonner"
import Loader from "@/components/Loader"
import Image from "next/image"
import { SITE_NAME } from "@/app/ConfigApp"
const Page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const form = useForm()

  const onSubmit = async (data:any) => {
    setIsSubmitting(true)
    try {

      const response = await axios.post<ApiResponse>('/api/forget-password-code', data)
      toast('Code Send')
      // console.log(response?.data?.data?.email);

      router.replace(`/forget-password-code-verify/${response?.data?.data?.username}?email=${response?.data?.data?.email}`) 
    } catch (error) {
      console.log("error in forgetting password of user", error);
      toast("forget password error")
    }
    finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-base-content">Forget Password!</h1>
          <p className="py-6 text-base-content">Don't worry about anything.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={form.handleSubmit(onSubmit)} className="card-body">
          <div className="flex text-xl font-bold items-center m-auto text-base-content cursor-pointer gap-2">
              <Image src='https://lemonsqueezy.imgix.net/design/112348/39893123-0e23-43f1-a2f1-2b54169a0d71.png?fit=clip&h=100&ixlib=php-3.3.1&w=100&s=c63c661e3259135daa6f11046e676ffd' height={50} width={50} alt="logo" />
              <span>{SITE_NAME}</span>
            </div>
            <div role="tablist" className="tabs tabs-bordered">
              <input type="radio" name="my_tabs_1" role="tab" className="tab px-10" aria-label="Username" defaultChecked  readOnly />
              <div role="tabpanel" className="tab-content py-10">
                <div className="form-control">
                
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input autoComplete="off" type="username" placeholder="Username" className="input input-bordered text-base-content" {...form.register("username")}  />
              </div></div>

              <input type="radio" name="my_tabs_1" role="tab" className="tab px-14" aria-label="Email" />
              <div role="tabpanel" className="tab-content py-10"><div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" autoComplete="off" placeholder="email" className="input input-bordered text-base-content" {...form.register("email")}  />
              </div></div>
            </div>


            <div className="form-control mt-6">
              <button type="submit" disabled={isSubmitting}  className="btn bg-primary hover:bg-primary hover:opacity-90 text-primary-content"> {isSubmitting ? (
                <>
                  <Loader/>
                </>
              ) : ("Submit")}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Page