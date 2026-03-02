"use client";

import { CardGrid } from "@/components/card_grid/card_grid";
import { Section } from "@/components/section/section";
import {
  getHighlights,
  resolveHighlightLocale,
  type SupportedHighlightLocale,
} from "@/lib/highlights";
import { useEffect, useState } from "react";

export function HighlightsSection() {
  const [locale, setLocale] = useState<SupportedHighlightLocale>("de");

  useEffect(() => {
    setLocale(resolveHighlightLocale(navigator.language));
  }, []);

  const content = getHighlights(locale);

  return (
    <Section title={content.sectionTitle}>
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
