'use client'
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from 'axios'
import { ApiResponse } from "@/(more)/types/ApiResponse"
import { toast } from "sonner"
import Loader from "@/components/Loader"
const Page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const form = useForm()

  const onSubmit = async (data:any) => {
    setIsSubmitting(true)
    try {

      const response = await axios.post<ApiResponse>('/api/forget-password-code', data)
      toast('success')
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
            <div role="tablist" className="tabs tabs-bordered">
              <input type="radio" name="my_tabs_1" role="tab" className="tab px-10" aria-label="Username" defaultChecked  readOnly />
              <div role="tabpanel" className="tab-content py-10">
                <div className="form-control">
                
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input type="username" placeholder="Username" className="input input-bordered text-base-content" {...form.register("username")}  />
              </div></div>

              <input type="radio" name="my_tabs_1" role="tab" className="tab px-14" aria-label="Email" />
              <div role="tabpanel" className="tab-content py-10"><div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered text-base-content" {...form.register("email")}  />
              </div></div>
            </div>


            <div className="form-control mt-6">
              <button type="submit" disabled={isSubmitting}  className="btn btn-primary"> {isSubmitting ? (
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