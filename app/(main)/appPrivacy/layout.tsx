import { Article } from "@/components/article/article";

export default function AppPrivacyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Article>{children}</Article>;
}
