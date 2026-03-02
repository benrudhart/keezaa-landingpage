import { DEFAULT_LOCALE, isSupportedLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import type { Metadata } from "next";
import AppPrivacyDe from "./content.de.mdx";
import AppPrivacyEn from "./content.en.mdx";
import AppPrivacyZh from "./content.zh.mdx";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isSupportedLocale(lang) ? (lang as Locale) : DEFAULT_LOCALE;
  const dict = getDictionary(locale);

  return {
    title: dict.legal.appPrivacyTitle,
    alternates: {
      canonical: `/${locale}/appPrivacy`,
      languages: {
        de: "/de/appPrivacy",
        en: "/en/appPrivacy",
        zh: "/zh/appPrivacy",
      },
    },
  };
}

export default async function AppPrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isSupportedLocale(lang) ? (lang as Locale) : DEFAULT_LOCALE;

  if (locale === "de") {
    return <AppPrivacyDe />;
  }

  if (locale === "zh") {
    return <AppPrivacyZh />;
  }

  return <AppPrivacyEn />;
}
