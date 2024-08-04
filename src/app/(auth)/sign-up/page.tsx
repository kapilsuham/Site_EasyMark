'use client'

import { useForm } from "react-hook-form"
import * as z from "zod"
import { useEffect, useState } from "react"
import { useDebounceCallback } from 'usehooks-ts'
import { useRouter } from "next/navigation"
import { signUpSchema } from "@/(more)/schema/signUpSchema"
import axios, { AxiosError } from 'axios'
import { ApiResponse } from "@/(more)/types/ApiResponse"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import Loader from "@/components/Loader"

export default function Page() {
  const [username, setUsername] = useState('')
  const [usernameMessage, setUsernameMessage] = useState('')
  const [isCheckingUsername, setIsCheckingUsername] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const debounced = useDebounceCallback(setUsername, 500)
  const router = useRouter()
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  })

  useEffect(() => {
    const checUsernameUnique = async () => {
      if (username) {
        setIsCheckingUsername(true)
        setUsernameMessage('')
        try {
          const response = await axios.get(`/api/check-username-unique?username=${username}`)
          setUsernameMessage(response.data.message)
        } catch (error) {
          const axiosError = error as AxiosError<ApiResponse>
          setUsernameMessage(axiosError.response?.data.message ?? 'error in checking username')
        }
        finally {
          setIsCheckingUsername(false)
        }
      }
    }
    checUsernameUnique()
  }, [username])



  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
    setIsSubmitting(true)
    try {
      const response = await axios.post<ApiResponse>('/api/sign-up', data)
      router.replace(`/verify/${username}?email=${data?.email}`)
    } catch (error) {
      console.log("error in sign-up of user", error);
      toast(
        "sign-up failed try another email",
      )
    }
    finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-base-content font-bold">SignUp now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={form.handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input type="username" placeholder="Username" className="input input-bordered text-base-content" required {...form.register("username")}
                onChange={event => debounced(event.target.value)} />
            </div>
            {isCheckingUsername && <span className="loading loading-spinner loading-sm"></span>
            }
            <p className={`text-sm ${usernameMessage === "unique" ? 'text-success' : 'text-error'}`}>
              {usernameMessage}
            </p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered text-base-content" {...form.register("email")} required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered text-base-content" {...form.register("password")} required />
            </div>
            <div className="form-control mt-6">
              <button type="submit" disabled={isSubmitting} className="btn bg-green-400"> {isSubmitting ? (
                <>
                  <Loader />
                </>
              ) : ("Sign-Up")}</button>
            </div>
            <div className="text-base-content">Already have account-<a className="link" href="/sign-in">SignIn</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
