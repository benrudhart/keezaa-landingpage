import { ReferralPage } from "@/components/referral_page/referral_page";
import { DEFAULT_LOCALE, isSupportedLocale, type Locale } from "@/lib/i18n";
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

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isSupportedLocale(lang) ? (lang as Locale) : DEFAULT_LOCALE;

  return <ReferralPage locale={locale} />;
}
