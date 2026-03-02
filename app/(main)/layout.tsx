import { APP_ID, IS_WAITLIST_ENABLED, THEME } from "@/constants";
import type { Metadata, Viewport } from "next";

import { AppIcon } from "@/components/app_icon/app_icon";
import { CompactFooter } from "@/components/compact_footer/compact_footer";
import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { EmailForm } from "@/components/email_form/email_form";
import { Hero } from "@/components/hero/hero";
import { MaterialSymbolsLink } from "@/components/material_symbols_link/material_symbols_link";
import { Navbar } from "@/components/navbar/navbar";
import { ThemeStyle } from "@/components/theme_style/theme_style";
import "@/global.css";
import { ThemeProvider } from "@/providers/theme_provider";
import { Section } from "@/components/section/section";

export const metadata: Metadata = {
  /**
   * `title` and `description` are visible in search results.
   * Recommended length for title is max 60 characters.
   * Recommended length for description is max 160 characters.
   */
  title: "Keezaa | Kieser-Training App",
  description:
    "Die smarte Trainings-App für Kieser-Training® – Stoppuhr, Trainingsplan und Historie direkt an deinem Handgelenk. Für Apple Watch und iPhone.",

  metadataBase: new URL("https://keezaa.app"),

  openGraph: {
    title: "Keezaa – Die Trainings-App für Kieser®",
    description:
      "Stoppuhr, Trainingsplan und Historie direkt an deinem Handgelenk. Für Apple Watch und iPhone.",
    url: "https://keezaa.app",
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
    title: "Keezaa – Die Trainings-App für Kieser®",
    description:
      "Stoppuhr, Trainingsplan und Historie direkt an deinem Handgelenk. Für Apple Watch und iPhone.",
    images: ["/og-preview.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" data-theme={THEME}>
      <head>
        {/* This makes Safari on iOS show the App Store download banner */}
        {!IS_WAITLIST_ENABLED && (
          <meta name="apple-itunes-app" content={`app-id=${APP_ID}`} />
        )}

        <link rel="icon" href="/favicon.png" type="image/png" sizes="48x48" />

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
                links={[
                  { label: "Features", href: "#features" },
                  { label: "Bewertungen", href: "#testimonials" },
                  { label: "Werte", href: "#values" },
                  { label: "Kontakt", href: "mailto:support@keezaa.app" },
                ]}
                action={<DownloadActionButton />}
              />

              {children}

              {/*
                There is also a <MultiColumnFooter> component available
                in case you need more space for links.
              */}
              <CompactFooter
                appIcon={
                  <AppIcon
                    src="/keezaa_app_icon.png"
                    filter="grayscale"
                  />
                }
                links={[
                  { label: "Datenschutz", href: "/privacy" },
                  {
                    label: "Nutzungsbedingungen",
                    href: "/appTOS",
                  },
                  {
                    label: "Follow Updates",
                    href: "https://github.com/benrudhart",
                    external: true,
                  },
                ]}
                footnoteLeading={`© ${new Date().getFullYear()} Keezaa. Alle Rechte vorbehalten.`}
                footnoteTrailing={
                  // I'd appreciate if you leave this link here, but feel free to remove it, no hard feelings :)
                  <>
                    Website is built with{" "}
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
                  <>
                    <EmailForm
                      providerConfig={{
                        provider: "loops",
                        config: {
                          formId: "your-loops-form-id",
                        },
                      }}
                    />
                    {/*
                      You can also use a simple button to redirect users
                      to a custom page where you collect emails
                    */}
                    {/* <GetNotifiedActionButton href="your-email-form-link" /> */}
                  </>
                }
              />
            </Section>
          )}
        </ThemeProvider>

        {/* <PlausibleAnalytics domain="your-app-domain.com" /> */}
        {/* <VercelAnalytics /> */}
      </body>
    </html>
  );
}
