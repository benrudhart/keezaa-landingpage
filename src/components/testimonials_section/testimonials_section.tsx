"use client";

import { Section } from "@/components/section/section";
import { TestimonialsGrid } from "@/components/testimonials_grid/testimonials_grid";
import {
  getTestimonials,
  resolveTestimonialLocale,
  type SupportedTestimonialLocale,
} from "@/lib/testimonials";
import { useEffect, useState } from "react";

export function TestimonialsSection() {
  const [locale, setLocale] = useState<SupportedTestimonialLocale>("de");

  useEffect(() => {
    setLocale(resolveTestimonialLocale(navigator.language));
  }, []);

  const content = getTestimonials(locale);

  return (
    <Section title={content.sectionTitle} paddingTop={40} paddingBottom={60}>
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
