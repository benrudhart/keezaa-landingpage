import { CardGrid } from "@/components/card_grid/card_grid";
import { Section } from "@/components/section/section";
import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";

export function HighlightsSection({ locale }: { locale: Locale }) {
  const content = getDictionary(locale).highlights;

  return (
    <Section title={content.sectionTitle} navigationAnchor="values">
      <CardGrid rowHeight={250}>
        {content.items.map((item) => (
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
  );
}
