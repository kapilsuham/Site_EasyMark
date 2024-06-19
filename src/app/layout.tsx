import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner';
import AuthProvider from "@/(more)/context/AuthProvider";
import dynamic from 'next/dynamic'
import PlausibleProvider from "next-plausible";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL as string),
  title: {
    default: "Grow Your Startups in Minutes,Save Months | ShipForever",
    template: "%s | ShipForever"
  },
  description: "Grow startups in minutes save months",
  twitter: {
    card: "summary_large_image",
    site: 'shipforever.com',
    title: 'Grow Your Startups in Minutes,Save Months',
    description: 'ShipForever | Grow Your Startups in Minutes,Save Months',
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const CrispWithNoSSR = dynamic(
    () => import('@/(more)/crisp')
  )
  return (
    <>
      <html lang="en">
        {/* <head>
        <PlausibleProvider domain='shipforever.com' trackLocalhost={true} enabled={true}/>
        </head> */}
        {/* <CrispWithNoSSR /> */}
        <AuthProvider >
          <body className={inter.className}>
            {children}
            <Toaster />
          </body>
        </AuthProvider>
      </html>
    </>
  );
}
