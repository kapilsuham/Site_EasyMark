import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner';
import AuthProvider from "@/(more)/context/AuthProvider";
import PlausibleProvider from "next-plausible";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL as string),
  title: {
    default: "Manage you bookmarks | EasyMark",
    template: "%s | EasyMark"
  },
  description: "Manage you bookmarks",
  twitter: {
    card: "summary_large_image",
    site: 'easymark.co',
    title: 'Manage you bookmarks',
    description: 'EasyMark | Manage you bookmarks',
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
      </html>
    </>
  );
}
