'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { signInSchema } from "@/(more)/schema/signInSchema"
import { signIn } from "next-auth/react"
import { toast } from "sonner"
import Loader from "@/components/Loader"
import { SITE_NAME } from "@/app/ConfigApp"
import Image from "next/image"
const Page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      identifier: '',
      password: ''
    }
  })
  const GoogleOauth=async()=>{
    setIsSubmitting(true)
    try {
      await signIn('google')
      toast("Loading")
      
    } catch (error) {
      console.log(error);
    }
    finally{
      setIsSubmitting(false)
    }
  }


  const onSubmit = async (data: z.infer<typeof signInSchema>) => {

    setIsSubmitting(true)
    const result = await signIn('credentials', {
      redirect: false,
      identifier: data.identifier,
      password: data.password
    })
    // console.log(result);
    if (result?.error) {
      if (result.error == 'CredentailsSignin') {
        toast('Login failed')
      } else {  
        toast(result.error)
      }
    }
    if (result?.url) {
      router.replace('/dashboard')
    }
    setIsSubmitting(false)
  }
  return (
   
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-base-content font-bold">LogIn now!</h1>
          <p className="lg:py-6 text-base-content">Google Login works when have an account.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={form.handleSubmit(onSubmit)} className="card-body">
          <div className="flex text-xl font-bold items-center m-auto text-base-content cursor-pointer gap-2">
              <Image src='https://lemonsqueezy.imgix.net/design/112348/39893123-0e23-43f1-a2f1-2b54169a0d71.png?fit=clip&h=100&ixlib=php-3.3.1&w=100&s=c63c661e3259135daa6f11046e676ffd' height={50} width={50} alt="logo" />
              <span>{SITE_NAME}</span>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input type="identifier" placeholder="Username or Email" className="input input-bordered text-base-content" required {...form.register("identifier")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered text-base-content" {...form.register("password")} required />
              <label className="label">
                <a href="/forget-password" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control">
              <button type="submit" disabled={isSubmitting} className="btn bg-primary hover:bg-primary hover:opacity-90 text-primary-content"> {isSubmitting ? (
                <>
                  <Loader/>
                </>
              ) : ("Sign-In")}</button>
            </div>
            <div className="divider text-base-content">OR</div>
            <div className="form-control">
              <button disabled={isSubmitting} onClick={GoogleOauth} className="btn bg-primary hover:bg-primary hover:opacity-90 text-primary-content"> {isSubmitting ? (
                <>
                  <Loader/>
                </>
              ) : (<div><div className="flex lg:gap-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="white" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 12H17C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C13.3807 7 14.6307 7.55964 15.5355 8.46447" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg><div className="mt-1">Google-Login</div></div></div>)}</button>
            </div>
            <div className="text-base-content">Already have account-<a className="link" href="/sign-up">SignUp</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )



}

export default Page