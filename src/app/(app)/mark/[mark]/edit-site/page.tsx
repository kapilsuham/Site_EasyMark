'use client'

import { addsite } from '@/(more)/schema/addsite'
import axios from 'axios'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const Page = () => {
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  // const title = 
  const searchParams = useSearchParams()
  const searchHome= searchParams.get('home');
  const searchPage = searchParams.get('page');
  const searchIcon = searchParams.get('icon');
  const markparam = searchParams.get('mark');

  const param = useParams()
  // console.log(param);
  
  const router = useRouter()
  const form = useForm<z.infer<typeof addsite>>({
    defaultValues: {
      title: '',
      home: '',
      page: '',
      icon: ''
    }
  })
  const onSubmit = async (siteData: z.infer<typeof addsite>) => {
    // console.log(siteData);
    try {
      setIsSubmitting(true)
      const response = await axios.post("/api/edit-site", { siteData, param, markparam })
      toast(response.data.message)
      router.back()
    } catch (error) {
      console.log(error);
    }
    finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    let defaults = {
      title: param?.mark?.toString(),
      home: searchHome ?? '',
      page: searchPage ?? '',
      icon: searchIcon ?? ''
    }
    form.reset(defaults);
    // console.log(defaults);
}, [form.reset,form, param?.mark,searchHome,searchIcon,searchPage]);
  return (
    <div className='bg-base-200 lg:absolute lg:w-5/6 right-0 p-10 text-base-content min-h-screen'>
      <div className="mb-10 justify-center text-2xl font-semibold items-center">
        {param?.mark}
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="card-body">
        <div className='lg:flex'>
          <div className='flex flex-col gap-10'>
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-2 w-72">
                Title:
                <input type="text" className="grow overflow-hidden w-52" placeholder="ShipForever" required {...form.register("title")} />
              </label>
            </div>
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-2 w-72">
                Home:
                <input type="text" className="grow overflow-hidden w-52" placeholder="shipforever.io" required {...form.register("home")} />
              </label>
            </div>
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-2 w-72">
                Icon:
                <input type="text" className="grow overflow-hidden w-52" placeholder="Icon Url" {...form.register("icon")} />
              </label>
            </div>
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-2 w-72">
                Page:
                <input type="text" className="grow overflow-hidden w-52" placeholder="shipforever.io/kapil" {...form.register("page")} />
              </label>
            </div>
          </div>
          <div className='flex m-auto gap-5 my-5'>
            <div className="form-control">
              <button type="submit" disabled={isSubmitting} className="btn bg-base-300"> {isSubmitting ? (
                <>
                  <span className="m-auto loading loading-spinner loading-md"></span>
                </>
              ) : ("Save")}</button>
            </div>
            <button onClick={() => router.back()} className="btn">Cancle</button>
          </div>
        </div>
      </form>
    </div >
  )
}

export default Page