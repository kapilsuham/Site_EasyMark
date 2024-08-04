'use client'

import { addmark } from "@/(more)/schema/addmark";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const AddMark = () => {
  const router = useRouter()
  let markData
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm<z.infer<typeof addmark>>({
    defaultValues: {
      title: '',
    }
  })
  const onSubmit = async (siteData: z.infer<typeof addmark>) => {
    console.log(siteData);
    try {
      setIsSubmitting(true)
      const response = await axios.post("/api/add-mark", siteData)
      toast(response.data.message)
      router.push(`/mark/${siteData?.title}`)
    } catch (error) {
      console.log(error);
    }
    finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div>
      <button className="btn btn-active" onClick={() => (document.getElementById('my_modal') as HTMLFormElement).showModal()}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"inherit"} fill={"none"}>
          <path d="M11 2C7.22876 2 5.34315 2 4.17157 3.12874C3 4.25748 3 6.07416 3 9.70753V17.9808C3 20.2867 3 21.4396 3.77285 21.8523C5.26947 22.6514 8.0768 19.9852 9.41 19.1824C10.1832 18.7168 10.5698 18.484 11 18.484C11.4302 18.484 11.8168 18.7168 12.59 19.1824C13.9232 19.9852 16.7305 22.6514 18.2272 21.8523C19 21.4396 19 20.2867 19 17.9808V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17 10L17 2M13 6H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        Add
      </button>
      <dialog id="my_modal" className="modal">
        <div className="modal-box">
          <form className="my-2" onSubmit={form.handleSubmit(onSubmit)}>
            <div className='flex flex-col  m-auto gap-10'>
              <div className="form-control m-auto">
                <label className="input input-bordered flex items-center gap-2 w-60 lg:w-96">
                  Title:
                  <input type="text" className="grow overflow-hidden" placeholder="ShipForever" required {...form.register("title")} />
                </label>
              </div>
            </div>
            <div className="modal-action">
              <div className="form-control w-full">
                <button type="submit" disabled={isSubmitting} className="btn bg-base-300"> {isSubmitting ? (
                  <>
                    <span className="m-auto loading loading-spinner loading-md"></span>
                  </>
                ) : ("Save")}</button>
              </div>
            </div>
          </form>
          <form method="dialog">
            {/* if there is a button, it will close the modal */}
            <button className="btn w-full">Close</button>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default AddMark