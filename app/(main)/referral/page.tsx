import { ReferralPage } from "@/components/referral_page/referral_page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empfehlungscode | Keezaa",
  description: "Keezaa Seite für Empfehlungscode und Belohnung",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
    },
  },
};

export default function Page() {
  return <ReferralPage />;
}
