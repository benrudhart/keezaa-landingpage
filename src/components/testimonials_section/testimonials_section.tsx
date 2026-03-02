import { Section } from "@/components/section/section";
import { TestimonialsGrid } from "@/components/testimonials_grid/testimonials_grid";
import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";

export function TestimonialsSection({ locale }: { locale: Locale }) {
  const content = getDictionary(locale).testimonials;

  return (
    <Section
      title={content.sectionTitle}
      navigationAnchor="testimonials"
      paddingTop={40}
      paddingBottom={60}
    >
      <TestimonialsGrid>
        {content.reviews.map((testimonial) => (
          <TestimonialsGrid.Testimonial
            key={`${testimonial.author}-${testimonial.title}`}
            headline={testimonial.title}
            message={testimonial.message}
            authorName={testimonial.author}
            source="appStore"
            starsRating={true}
            quotationMarks={false}
            messageFontStyle="normal"
          />
        ))}
      </TestimonialsGrid>
    </Section>
  );
}
