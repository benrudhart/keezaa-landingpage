import { PRIVACY_CONTENT } from "@/content/legal/index";
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
    title: dict.legal.privacyTitle,
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: {
        de: "/de/privacy",
        en: "/en/privacy",
        zh: "/zh/privacy",
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
  const locale = resolveLocale(lang);
  const renderContent = PRIVACY_CONTENT[locale];
  return renderContent();
}
