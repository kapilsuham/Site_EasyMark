import Navbar from "@/components/Navbar";
interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {  
  return (
    <div className="min-h-screen bg-base-200">
      <Navbar/>
      {children}
    </div>
  );
}