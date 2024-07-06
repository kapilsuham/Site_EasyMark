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

Effective Date: July 6, 2024

Thank you for using ShipForever!

This License Agreement ("Agreement") governs your use of the JavaScript code boilerplate provided by ShipForever ("we", "us", or "our") on our website https://shipforever.io ("Site").

1. License Grant

Subject to your compliance with these terms, ShipForever grants you a limited, non-exclusive, non-transferable license to use the JavaScript code boilerplate solely for the purpose of developing and launching your startup applications.

2. Restrictions

You may not:

- Sell, sublicense, rent, lease, or otherwise commercialize the JavaScript code boilerplate.
- Modify, adapt, alter, translate, or create derivative works from the JavaScript code boilerplate.
- Reverse engineer, decompile, disassemble, or attempt to derive the source code of the JavaScript code boilerplate.

3. Ownership

ShipForever retains all rights, title, and interest in and to the JavaScript code boilerplate, including all intellectual property rights.

4. Privacy and Data Collection

Your use of the JavaScript code boilerplate is subject to our Privacy Policy regarding the collection, use, and disclosure of personal information. Please refer to our Privacy Policy available at https://shipforever.io/privacy-policy.

5. Updates

ShipForever may update this License Agreement from time to time. We will notify you of any changes by email.

6. Contact Us

If you have any questions about this License Agreement, please contact us at shipforever.kapil@gmail.com.

By using the JavaScript code boilerplate, you agree to be bound by this License Agreement. If you do not agree with these terms, please do not use the JavaScript code boilerplate from ShipForever.`}
          </pre>
        </div>
      </main>
    )
}

export default Page