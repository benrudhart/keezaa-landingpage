import { Article } from "../article/article";
import styles from "./release_note.module.css";
import type { Locale } from "@/lib/i18n";

interface ReleaseNoteProps {
  title: string;
  publishDate: Date;
  content: React.ReactNode;
  locale?: Locale;
}

export function ReleaseNote({
  title,
  publishDate,
  content,
  locale = "de",
}: ReleaseNoteProps) {
  const formattedDate = publishDate.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Article className={styles.releaseNote}>
      <span className={styles.publishDate}>{formattedDate}</span>
      <h1 className={styles.title}>{title}</h1>
      {content}
    </Article>
  );
}
