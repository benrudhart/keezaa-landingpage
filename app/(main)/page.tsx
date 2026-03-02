import { CardGrid } from "@/components/card_grid/card_grid";
import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { Hero } from "@/components/hero/hero";
import { Section } from "@/components/section/section";
import { TestimonialsSection } from "@/components/testimonials_section/testimonials_section";

export default function Page() {
  return (
    <>
      <Section paddingTop={100}>
        <Hero
          title="Keezaa"
          subtitle="Die smarte Trainings-App für Kieser-Training®. Stoppuhr, Plan und Historie direkt am Handgelenk."
          media={
            <Hero.Image
              src="/app_view/screenshot_placeholder.png"
              bezel="iPhone 17 Black"
              alt="Keezaa App Screenshot"
            />
          }
          action={<DownloadActionButton size="medium" />}
        />
      </Section>

      <Section navigationAnchor="features">
        <CardGrid rowHeight={280}>
          <CardGrid.IconCard
            maxWidth="third"
            iconName="timer"
            title="Stoppuhr"
            description="Immer in Reichweite – an deinem Handgelenk. Startet, wenn du bereit bist, und stoppt die Zeit automatisch."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="fitness_center"
            title="Personal Trainer"
            description="Haptisches und akustisches Feedback hilft dir, das Tempo zu halten und die Zielzeit zu erreichen."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="assignment"
            title="Trainingsplan"
            description="Erstelle und bearbeite Pläne am iPhone. Passe sie bei Bedarf direkt auf der Watch an."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="watch"
            title="Vollwertige Watch App"
            description="Sämtliche Maschineneinstellungen mit einem Blick sehen und direkt auf der Watch ändern."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="timeline"
            title="Historie"
            description="Alle Trainings im Kalender. Den Gewichtsverlauf der Maschinen im Graph analysieren."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="favorite"
            title="Health Integration"
            description="Herzfrequenz überwachen, Kalorien tracken und mit jedem Training deine Ringe schließen."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="tune"
            title="Gewichtsanpassung"
            description="Automatische Anpassung der Gewichte bei Erreichen der Mindestdauer. Oder manuell einstellen."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="folder_copy"
            title="Mehrere Pläne"
            description="Beliebig viele Pläne verwalten und auf Watch oder iPhone trainieren."
          />

          <CardGrid.IconCard
            maxWidth="third"
            iconName="lock"
            title="Datenschutz"
            description="Deine Daten werden ausschließlich über deine private iCloud synchronisiert. Niemand sonst hat Einblick."
          />
        </CardGrid>
      </Section>

      <TestimonialsSection />

      <Section paddingTop={60} paddingBottom={160}>
        <DownloadActionButton
          size="medium"
        />
      </Section>
    </>
  );
}
