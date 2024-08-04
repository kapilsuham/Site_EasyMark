import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import Sidebar from "@/components/Sidebar";
import { getSEOTags } from "@/lib/seo";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export async function generateMetadata({ params }:any) {
  console.log('======',params);
  return getSEOTags({
    title: decodeURIComponent(params.mark),
    canonicalUrlRelative: `/${params}`,
  });
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const session =await getServerSession(authOptions)
  if (!session || !session.user) {
      redirect('/sign-in')
  }
  return (
    <div>
      <Sidebar />
    { children }
    </div>
  );
}
