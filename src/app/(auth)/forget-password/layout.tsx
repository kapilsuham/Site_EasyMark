import Footer from "@/components/Footer";
import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "Forget Password",
  canonicalUrlRelative: "/auth/forget-password",
});
interface RootLayoutProps {
  children: React.ReactNode;
}
export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div>
    { children }
    <Footer/>
    </div>
  );
}
