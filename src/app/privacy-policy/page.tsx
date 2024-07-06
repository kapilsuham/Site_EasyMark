import Link from "next/link";
import { getSEOTags } from "@/lib/seo";
import { SITE_NAME } from "../ConfigApp";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
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

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning.

export const metadata = getSEOTags({
  title: 'Privacy Policy',
  canonicalUrlRelative: "/privacy-policy",
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
          Privacy Policy for {SITE_NAME}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Privacy Policy

Effective Date: July 6, 2024

ShipForever ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://shipforever.io, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.

1. Information We Collect

We may collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the Site, or otherwise contacting us.

The personal information that we collect depends on the context of your interactions with us and the Site, and may include the following:

- Name
- Email address
- Payment information
- User startup information

In addition to personal information, we may also collect non-personal information through web cookies. This information is used for the purpose of order processing and to enhance your experience on our Site.

2. Use of Your Information

The information we collect is used for the following purposes:

- To process transactions
- To send you emails
- To improve our website

3. Disclosure of Your Information

We do not share your personal information with third parties. We may disclose your information to comply with laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.

4. Children's Privacy

We do not knowingly collect any personal information from children under the age of 13. If you are under 13, please do not submit any personal information through the Site. We encourage parents and legal guardians to monitor their children's Internet usage and to help enforce this Policy by instructing their children never to provide personal information through the Site without their permission.

5. Updates to This Privacy Policy

We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.

Contact Us

If you have any questions about this Privacy Policy, please contact us at shipforever.kapil@gmail.com.`}
        </pre>
      </div>
    </main>
  );
};

export default Page;
