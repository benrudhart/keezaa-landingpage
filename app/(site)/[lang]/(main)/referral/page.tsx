import { ReferralPage } from "@/components/referral_page/referral_page";
import { getDictionary } from "@/dictionaries";
import { DEFAULT_LOCALE, isSupportedLocale, type Locale } from "@/lib/i18n";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isSupportedLocale(lang) ? (lang as Locale) : DEFAULT_LOCALE;
  const dict = getDictionary(locale);

  return {
    title: dict.referral.pageTitle,
    description: dict.referral.pageDescription,
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
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isSupportedLocale(lang) ? (lang as Locale) : DEFAULT_LOCALE;
  const dict = getDictionary(locale);

  return <ReferralPage locale={locale} content={dict.referral} />;
}
