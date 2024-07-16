'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { signInSchema } from "@/(more)/schema/signInSchema"
import { signIn, useSession } from "next-auth/react"
import { toast } from "sonner"
import Loader from "@/components/Loader"const Page = () => {
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
          <h1 className="text-5xl font-bold">LogIn now!</h1>
          <p className="lg:py-6">Google Login works when have an account.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={form.handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input type="identifier" placeholder="Username or Email" className="input input-bordered" required {...form.register("identifier")}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" {...form.register("password")} required />
              <label className="label">
                <a href="/forget-password" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control">
              <button type="submit" disabled={isSubmitting} className="btn btn-primary"> {isSubmitting ? (
                <>
                  <Loader/>
                </>
              ) : ("Sign-In")}</button>
            </div>
            <div className="divider">OR</div>
            <div className="form-control">
              <button disabled={isSubmitting} onClick={GoogleOauth} className="btn btn-primary"> {isSubmitting ? (
                <>
                  <Loader/>
                </>
              ) : (<div><div className="flex lg:gap-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="white" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 12H17C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C13.3807 7 14.6307 7.55964 15.5355 8.46447" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg><div className="mt-1">Google-Login</div></div></div>)}</button>
            </div>
            <div>Already have account-<a className="link" href="/sign-up">SignUp</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )



}

export default Page