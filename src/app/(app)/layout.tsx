import Navbar from "@/components/Navbar";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {  
  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      <Navbar/>
      {children}
    </div>
  );
}