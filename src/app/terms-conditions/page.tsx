import Link from "next/link";
import { getSEOTags } from "@/lib/seo";
import { SITE_NAME } from "../ConfigApp";
import { Metadata } from "next";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipforever.io
// - Name: ShipForever
// - Contact information: shipforever.kapil@gmail.com
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can not ask for refund after the purchase.
// - User data collected: name, email, lemonsqueezy information ,payment & user startup information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipforever.io/privacy-policy
// - Governing Law: India
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning.

export const metadata:Metadata = getSEOTags({
  title: 'Terms and Conditions',
  canonicalUrlRelative: "/tos",
});const TOS = () => {
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
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {SITE_NAME}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Terms of Service

Effective Date: July 6, 2024

Welcome to ShipForever!

These Terms of Service ("Terms") govern your use of the ShipForever website (https://shipforever.io) and any related services provided by ShipForever ("we", "us" or "our").

By accessing or using our website, you agree to comply with these Terms. If you do not agree with these Terms, you may not use our website.

1. Description of Service

ShipForever provides a JavaScript code boilerplate designed to accelerate the launch of startups.

2. Ownership and Usage

Users who purchase our packages are granted the right to download and use the code to create applications. You own the code you create but may not resell it. All purchases are non-refundable.

3. Collection of User Data

We collect personal information such as name, email, and payment details, as well as non-personal information through web cookies. For details, please refer to our Privacy Policy [here](https://shipforever.io/privacy-policy).

4. Governing Law

These Terms are governed by the laws of India.

5. Updates to Terms

We may update these Terms from time to time. We will notify you of any changes by email.

Contact Us

If you have any questions about these Terms, please contact us at shipforever.kapil@gmail.com.`}

        </pre>
      </div>
    </main>
  );
};

export default TOS;
