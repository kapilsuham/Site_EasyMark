'use client'
import checkPlanAccess from "@/(more)/helpers/checkPlanAccess";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter()
  useEffect(() => {
    (async () => {
      const response = await checkPlanAccess()
      if (response.data.data.oneTimeHasAccess && response.data.data.subscriptionHasAccess) {
        return (
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">Hello there</h1>
                <p className="py-6">It's your one time payment access page for your customers</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        )
      }
      router.replace('/failure')
    })()
  }, [])
}

export default Page