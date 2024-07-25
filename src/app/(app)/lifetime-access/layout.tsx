import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getSEOTags } from "@/lib/seo";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface RootLayoutProps {
  children: React.ReactNode;
}
export const metadata:Metadata = getSEOTags({
  title: 'Lifetime Success',
  canonicalUrlRelative: "/lifetime-access",
});

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
      redirect('/sign-in')
  }
  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      {children}
    </div>
  );
}
