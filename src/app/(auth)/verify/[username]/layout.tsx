import Footer from "@/components/Footer";
import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "verify",
  canonicalUrlRelative: "/auth/verify",
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
