import { Article } from "@/components/article/article";

export default function AppTermsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Article>{children}</Article>;
}
