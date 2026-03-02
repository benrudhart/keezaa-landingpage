import { DEFAULT_LOCALE, isSupportedLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import type { Metadata } from "next";
import PrivacyDe from "./content.de.mdx";
import PrivacyEn from "./content.en.mdx";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isSupportedLocale(lang) ? (lang as Locale) : DEFAULT_LOCALE;
  const dict = getDictionary(locale);

  return {
    title: dict.legal.privacyTitle,
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: {
        de: "/de/privacy",
        en: "/en/privacy",
      },
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isSupportedLocale(lang) ? (lang as Locale) : DEFAULT_LOCALE;

  return locale === "de" ? <PrivacyDe /> : <PrivacyEn />;
}
