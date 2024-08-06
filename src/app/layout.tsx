import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner';
import AuthProvider from "@/(more)/context/AuthProvider";
import PlausibleProvider from "next-plausible";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL as string),
  title: {
    default: "Best bookmark managing tool | EasyMark",
    template: "%s | EasyMark"
  },
  description: "Best bookmark managing tool",
  twitter: {
    card: "summary_large_image",
    site: 'easymark.co',
    title: 'Best bookmark managing tool',
    description: 'EasyMark | Best bookmark managing tool',
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        {/* <head>
        <PlausibleProvider domain='shipforever.com' trackLocalhost={true} enabled={true}/>
        </head> */}
        <AuthProvider >
          <body className={inter.className}>
            {children}
            <Toaster />
          </body>
        </AuthProvider>
        <Analytics/>
        <SpeedInsights/>
      </html>
    </>
  );
}
