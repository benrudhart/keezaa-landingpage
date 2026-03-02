import { DEFAULT_LOCALE, isSupportedLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import type { Metadata } from "next";
import AppTermsDe from "./content.de.mdx";
import AppTermsEn from "./content.en.mdx";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isSupportedLocale(lang) ? (lang as Locale) : DEFAULT_LOCALE;
  const dict = getDictionary(locale);

  return {
    title: dict.legal.appTermsTitle,
    alternates: {
      canonical: `/${locale}/appTOS`,
      languages: {
        de: "/de/appTOS",
        en: "/en/appTOS",
      },
    },
  };
}

export default async function AppTermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isSupportedLocale(lang) ? (lang as Locale) : DEFAULT_LOCALE;

  return locale === "de" ? <AppTermsDe /> : <AppTermsEn />;
}
