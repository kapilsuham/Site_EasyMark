import { getSEOTags } from "@/lib/seo";
import { Metadata } from "next";

interface RootLayoutProps {
  children: React.ReactNode;
}
export const metadata:Metadata = getSEOTags({
  title: 'Subscription Access',
  canonicalUrlRelative: "/subscription-access",
});

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      {children}
    </div>
  );
}