import { getDictionary } from "@/dictionaries";
import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { HighlightsSection } from "@/components/highlights_section/highlights_section";
import { Hero } from "@/components/hero/hero";
import { Section } from "@/components/section/section";
import { TestimonialsSection } from "@/components/testimonials_section/testimonials_section";
import { CardGrid } from "@/components/card_grid/card_grid";
import { DEFAULT_LOCALE, isSupportedLocale, type Locale } from "@/lib/i18n";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isSupportedLocale(lang) ? (lang as Locale) : DEFAULT_LOCALE;
  const dict = getDictionary(locale);

  return (
    <>
      <Section paddingTop={100}>
        <Hero
          title={dict.hero.title}
          subtitle={dict.hero.subtitle}
          media={
            <Hero.Image
              src="/hero-screenshot.png"
              bezel="iPhone Air Space Black"
              alt={dict.hero.screenshotAlt}
            />
          }
          action={<DownloadActionButton size="medium" label={dict.hero.downloadLabel} />}
        />
      </Section>

      <Section navigationAnchor="features">
        <CardGrid rowHeight={280}>
          {dict.features.items.map((item) => (
            <CardGrid.IconCard
              key={item.title}
              maxWidth="third"
              iconName={item.iconName}
              title={item.title}
              description={item.description}
            />
          ))}
        </CardGrid>
      </Section>

      <TestimonialsSection locale={locale} />
      <HighlightsSection locale={locale} />

      <Section paddingTop={60} paddingBottom={160}>
        <DownloadActionButton size="medium" label={dict.hero.downloadLabel} />
      </Section>
    </>
  );
}
