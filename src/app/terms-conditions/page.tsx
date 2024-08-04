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
          {`Terms & Services

Effective Date: August 3, 2024

1. Introduction

Welcome to EasyMark (https://easymark.co), a bookmark managing and productivity enhancing site. By accessing or using our website, you agree to these Terms & Services.

2. Access and Use

Upon purchasing a package, you gain access to paid features on our site. You do not have the right to resell or redistribute any of our services or content. All purchases are non-refundable.

3. User Data

We collect the following user data: name, email, LemonSqueezy information, and payment details. We also use web cookies for non-personal data collection. For more details, please refer to our Privacy Policy at [Privacy Policy](https://easymark.co/privacy-policy).

4. Ownership

All content and features on EasyMark remain the property of EasyMark. Your access is limited to personal use only.

5. Governing Law

These Terms & Services are governed by the laws of India.

6. Updates to Terms

Any changes to these Terms & Services will be communicated to users via email.

7. Contact Information

For any questions or concerns, please contact us at easymark.kapil@gmail.com.

8. Acceptance

By using EasyMark, you agree to comply with these Terms & Services.

EasyMark Team`}

        </pre>
      </div>
    </main>
  );
};

export default TOS;
