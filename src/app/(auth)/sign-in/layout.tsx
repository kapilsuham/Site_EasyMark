import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "Sign-in",
  canonicalUrlRelative: "/auth/sign-in",
});
interface RootLayoutProps {
  children: React.ReactNode;
}
export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div>
    { children }
    </div>
  );
}
