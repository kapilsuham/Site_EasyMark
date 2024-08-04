import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import { getSEOTags } from "@/lib/seo";
import { Metadata } from "next";
import Sidebar from '@/components/Sidebar';

export const metadata:Metadata = getSEOTags({
  title: 'Dashboard',
  canonicalUrlRelative: "/dashboard",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const session =await getServerSession(authOptions)
  if (!session || !session.user) {
      redirect('/sign-in')
  }
  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      <Sidebar />
      {children}
    </div>
  );
}