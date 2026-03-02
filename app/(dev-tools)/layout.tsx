import { THEME } from "@/constants";
import "@/global.css";

export default function DevToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme={THEME}>
      <body>{children}</body>
    </html>
  );
}
