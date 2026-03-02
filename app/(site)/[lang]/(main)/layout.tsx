import { APP_ID, IS_WAITLIST_ENABLED, THEME } from "@/constants";
import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { getDictionary } from "@/dictionaries";
import { AppIcon } from "@/components/app_icon/app_icon";
import { CompactFooter } from "@/components/compact_footer/compact_footer";
import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { EmailForm } from "@/components/email_form/email_form";
import { Hero } from "@/components/hero/hero";
import { LanguageSwitcher } from "@/components/language_switcher/language_switcher";
import { MaterialSymbolsLink } from "@/components/material_symbols_link/material_symbols_link";
import { Navbar } from "@/components/navbar/navbar";
import { ThemeStyle } from "@/components/theme_style/theme_style";
import "@/global.css";
import { ThemeProvider } from "@/providers/theme_provider";
import { DEFAULT_LOCALE, isSupportedLocale, localizePath } from "@/lib/i18n";
import { Section } from "@/components/section/section";
import { notFound } from "next/navigation";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isSupportedLocale(lang) ? lang : DEFAULT_LOCALE;
  const dict = getDictionary(locale);
  const pathPrefix = `/${locale}`;

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    metadataBase: new URL("https://keezaa.app"),
    alternates: {
      canonical: pathPrefix,
      languages: {
        de: "/de",
        en: "/en",
        zh: "/zh",
      },
    },
    openGraph: {
      title: dict.metadata.openGraphTitle,
      description: dict.metadata.openGraphDescription,
      url: `https://keezaa.app${pathPrefix}`,
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
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isSupportedLocale(lang)) {
    notFound();
  }

  const locale = lang;
  const dict = getDictionary(locale);

  return (
    <html lang={locale} data-theme={THEME}>
      <head>
        {!IS_WAITLIST_ENABLED && (
          <meta name="apple-itunes-app" content={`app-id=${APP_ID}`} />
        )}

        <link rel="icon" href="/favicon.png" type="image/png" sizes="48x48" />
        <Script
          src="https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js"
          data-app-id="D62C9B0D-D105-4F3B-BA77-1B4B6B85B00D"
          strategy="beforeInteractive"
        />

        <ThemeStyle />
        <MaterialSymbolsLink />
      </head>
      <body>
        <ThemeProvider>
          {!IS_WAITLIST_ENABLED && (
            <>
              <Navbar
                icon={<AppIcon src="/keezaa_app_icon.png" />}
                appName="Keezaa"
                appHref={localizePath(locale)}
                links={[
                  { label: dict.navbar.features, href: localizePath(locale, "/#features") },
                  { label: dict.navbar.testimonials, href: localizePath(locale, "/#testimonials") },
                  { label: dict.navbar.values, href: localizePath(locale, "/#values") },
                  { label: dict.navbar.contact, href: "mailto:support@keezaa.app" },
                ]}
                action={<DownloadActionButton label={dict.hero.downloadLabel} />}
              />

              {children}

              <CompactFooter
                appIcon={<AppIcon src="/keezaa_app_icon.png" filter="grayscale" />}
                links={[
                  { label: dict.footer.privacy, href: localizePath(locale, "/privacy") },
                  { label: dict.footer.terms, href: localizePath(locale, "/appTOS") },
                  {
                    label: dict.footer.followUpdates,
                    href: "https://github.com/benrudhart",
                    external: true,
                  },
                ]}
                utility={
                  <LanguageSwitcher
                    locale={locale}
                    title={dict.footer.language}
                  />
                }
                footnoteLeading={`© ${new Date().getFullYear()} Keezaa. ${dict.footer.rightsReserved}`}
                footnoteTrailing={
                  <>
                    {dict.footer.builtWith}{" "}
                    <a target="_blank" href="https://appview.dev">
                      AppView
                    </a>
                  </>
                }
              />
            </>
          )}

          {IS_WAITLIST_ENABLED && (
            <Section paddingTop={60}>
              <Hero
                title="App Title"
                subtitle="Short app description that highlights what the app does and its key value"
                media={
                  <Hero.Image
                    src="/app_view/screenshot_placeholder.png"
                    alt=""
                    bezel="iPhone 17 Black"
                  />
                }
                action={
                  <EmailForm
                    providerConfig={{
                      provider: "loops",
                      config: {
                        formId: "your-loops-form-id",
                      },
                    }}
                  />
                }
              />
            </Section>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
