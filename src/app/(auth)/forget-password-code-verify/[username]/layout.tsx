import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "Forget Password Code Verify",
  canonicalUrlRelative: "/auth/forget-password-code-verify",
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
