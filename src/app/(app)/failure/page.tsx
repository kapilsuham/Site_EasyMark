import { getSEOTags } from "@/lib/seo";
import { Metadata } from "next";

export const metadata:Metadata = getSEOTags({
  title: 'Failure',
  canonicalUrlRelative: "/failure",
});const Page = () => {

  return (
    <div className='flex justify-center items-center text-center'>
    You have no access. Payment is not done yet
    </div>
  )
}

export default Page