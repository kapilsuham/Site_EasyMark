
import { getSEOTags } from "@/lib/seo";
import { Metadata } from "next";

export const metadata:Metadata = getSEOTags({
  title: 'Success',
  canonicalUrlRelative: "/success",
});

const success = () => {
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

export default success