'use client'

import { ApiResponse } from '@/(more)/types/ApiResponse'
import axios, { AxiosError } from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import Loader from './Loader'
const WaitListButton = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm()
  const onSubmit = async (data: Object) => {
    setIsSubmitting(true)
    try {
      await axios.post<ApiResponse>('/api/waitlist-email', data)
      toast(
        "Success",
      )
    } catch (error) {
      console.log("Error Joining", error);
      const axiosError = error as AxiosError<ApiResponse>
      let errorMessage = axiosError.response?.data.message
      toast(
        "Error Joining",
      )
    }
    finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="text-center flex-col">
          <div className='text-5xl font-extrabold text-base-content'>Join Us!</div>
          <div className="card shrink-0 w-full max-w-sm lg:shadow-2xl bg-base-100">
            <form onSubmit={form.handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered text-base-content" {...form.register("email")} required />
              </div>
              <div className="form-control mt-6">
                <button type="submit" disabled={isSubmitting} className="btn bg-green-500"> {isSubmitting ? (
                  <>
                    <Loader />
                  </>
                ) : ("Join-Waitlist")}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WaitListButton