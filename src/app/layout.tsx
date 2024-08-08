import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner';
import AuthProvider from "@/(more)/context/AuthProvider";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import NextTopLoader from 'nextjs-toploader';

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
export const viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: 'primary',
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <AuthProvider >
          <body className={inter.className}>
            <NextTopLoader color="purple"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              showSpinner={false}
              easing="ease"
              speed={200}
            />
            {children}
            <Toaster />
            <Analytics />
            <SpeedInsights />
          </body>
        </AuthProvider>
      </html>
    </>
  );
}
