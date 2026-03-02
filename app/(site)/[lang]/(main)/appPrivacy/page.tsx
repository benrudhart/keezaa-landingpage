import { APP_PRIVACY_CONTENT } from "@/content/legal/index";
import { getDictionary } from "@/dictionaries";
import { resolveLocale } from "@/lib/i18n";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = resolveLocale(lang);
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
  const locale = resolveLocale(lang);
  const renderContent = APP_PRIVACY_CONTENT[locale];
  return renderContent();
}
