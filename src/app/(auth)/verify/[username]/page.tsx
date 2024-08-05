'use client'

import { verificationCodeSchema } from "@/(more)/schema/verificationCodeSchema"
import { ApiResponse } from "@/(more)/types/ApiResponse"
import { zodResolver } from "@hookform/resolvers/zod"
import axios, { AxiosError } from "axios"
import { useParams, useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { useState } from "react"
import { toast } from "sonner"
import Loader from "@/components/Loader"
import Image from "next/image"
import { SITE_NAME } from "@/app/ConfigApp"
const Page = () => {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const params = useParams<{ username: string }>()
  const form = useForm<z.infer<typeof verificationCodeSchema>>({
    resolver: zodResolver(verificationCodeSchema),
    defaultValues: {
      code: ''
    }
  })
  const onSubmit = async (data: z.infer<typeof verificationCodeSchema>) => {

    setIsSubmitting(true)
    try {
      await axios.post(`/api/verify-code`,
        {
          username: params.username,
          code: data.code
        }
      )
      toast('success')
      router.replace('/sign-in')
    } catch (error) {
      console.log("error in sign-up of user", error);
      const axiosError = error as AxiosError<ApiResponse>
      toast("Invalid Code")
    }
    finally {
      setIsSubmitting(false)
    }
  }



  async function sleep(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  const resendEmail = async () => {
    setIsSubmitting(true)
    const url = new URLSearchParams(location.search)
    const email = url.get('email')
    // console.log(email);

    try {
      const response = await axios.post(`/api/resend-code`,
        {
          username: params.username, email
        }
      )

      await sleep(8000)
      toast('Code Send')
    } catch (error) {
      console.log("error in sign-up of user", error);
      const axiosError = error as AxiosError<ApiResponse>
      toast("resend email failed")
    }
    setIsSubmitting(false)
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-base-content">Verify now!</h1>
          <p className="py-6 text-base-content">A verification code is send on your email.</p>
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
              <input autoComplete="off" type="code" placeholder="Code" className="input input-bordered text-base-content" {...form.register("code")} />
            </div>
            <div className="form-control mt-6">
              <button disabled={isSubmitting} type="submit" className="btn bg-green-500"> {isSubmitting ? (
                <>
                  <Loader />
                </>
              ) : ("Submit")}</button>
            </div>
            <button className="btn bg-green-500" disabled={isSubmitting} onClick={() => resendEmail()}>
              Resend Code</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Page