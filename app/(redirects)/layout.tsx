import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import "@/global.css";

const dict = getDictionary();

export const metadata: Metadata = {
  title: dict.metadata.title,
  description: dict.metadata.description,
  metadataBase: new URL("https://keezaa.app"),
  openGraph: {
    title: dict.metadata.openGraphTitle,
    description: dict.metadata.openGraphDescription,
    url: "https://keezaa.app",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 720,
        alt: "",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: dict.metadata.openGraphTitle,
    description: dict.metadata.openGraphDescription,
    images: ["/og-preview.png"],
  },
};

export default function RedirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
