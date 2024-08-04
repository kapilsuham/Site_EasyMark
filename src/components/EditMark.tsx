'use client'

import { addmark } from "@/(more)/schema/addmark";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const EditMark = (data: any) => {
  // console.log(data?.markData);

  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm<z.infer<typeof addmark>>({
    defaultValues: {
      title: '',
    }
  })
  const onSubmit = async (siteData: z.infer<typeof addmark>) => {
    // console.log(siteData);
    try {
      setIsSubmitting(true)
      const id = data?.markData      
      const response = await axios.post("/api/edit-mark", { siteData, id })
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
      <button className="btn w-full" onClick={() => (document.getElementById('modal') as HTMLFormElement).showModal()}>
        Edit
      </button>
      <dialog id="modal" className="modal">
        <div className="modal-box">
          <form className="my-2" onSubmit={form.handleSubmit(onSubmit)}>
            <div className='flex flex-col  m-auto gap-10'>
              <div className="form-control m-auto">
                <label className="input input-bordered flex items-center gap-2 w-60 lg:w-96">
                  Title:
                  <input type="text" className="grow overflow-hidden" placeholder="New Title" required {...form.register("title")} />
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

export default EditMark