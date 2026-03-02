import { APP_TERMS_CONTENT } from "@/content/legal/index";
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
    title: dict.legal.appTermsTitle,
    alternates: {
      canonical: `/${locale}/appTOS`,
      languages: {
        de: "/de/appTOS",
        en: "/en/appTOS",
        zh: "/zh/appTOS",
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
  const locale = resolveLocale(lang);
  const renderContent = APP_TERMS_CONTENT[locale];
  return renderContent();
}
