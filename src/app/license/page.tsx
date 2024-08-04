import { SITE_NAME } from "@/app/ConfigApp";
import { getSEOTags } from "@/lib/seo";
import { Metadata } from "next";
import Link from "next/link";

// CHATGPT PROMPT TO GENERATE YOUR License — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple License for my website. Here is some context:
// - Website: https://shipforever.io
// - Name: ShipForever
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email, lemonsqueezy information ,payment & user startup information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: shipforever.kapil@gmail.com

// Please write a simple License for my site. Add the current date.  Do not add or explain your reasoning.

export const metadata:Metadata = getSEOTags({
  title: 'License',
  canonicalUrlRelative: "/license",
});
const Page = () => {

    return (

        <main className="max-w-xl mx-auto">
        <div className="p-5">
          <Link href="/" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
                clipRule="evenodd"
              />
            </svg>{" "}
            Back
          </Link>
          <h1 className="text-3xl font-extrabold pb-6">
          License for {SITE_NAME}
          </h1>
  
          <pre
            className="leading-relaxed whitespace-pre-wrap"
            style={{ fontFamily: "sans-serif" }}
          >
            {`License Agreement

Effective Date: August 3, 2024

1. License Grant

By using EasyMark (https://easymark.co), you are granted a non-exclusive, non-transferable license to access and use the website and its services for personal and non-commercial purposes.

2. User Data

EasyMark collects and processes the following user data: name, email, LemonSqueezy information, and payment details. We also use web cookies for non-personal data collection.

3. Purpose of Data Collection

The data collected is used solely for order processing and enhancing your experience on our site.

4. Data Sharing

Your data is not shared with any third parties.

5. Children's Privacy

We do not collect data from individuals under the age of 13.

6. Policy Updates

Any changes to this License Agreement will be communicated to users via email.

7. Contact Information

For any questions or concerns, please contact us at easymark.kapil@gmail.com.

8. Acceptance

By using EasyMark, you agree to the terms of this License Agreement.

EasyMark Team`}
          </pre>
        </div>
      </main>
    )
}

export default Page