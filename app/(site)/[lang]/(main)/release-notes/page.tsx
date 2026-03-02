import { getDictionary } from "@/dictionaries";
import { ReleaseNote } from "@/components/release_note/release_note";
import { ReleaseNotesPagination } from "@/components/release_notes_pagination/release_notes_pagination";
import { MAX_RELEASE_NOTES_PER_PAGE } from "@/constants";
import {
  readReleaseNotesPage,
  readTotalReleaseNotesPageCount,
} from "@/lib/release_notes_helpers";
import { DEFAULT_LOCALE, isSupportedLocale, localizePath, type Locale } from "@/lib/i18n";

export default async function ReleaseNotesIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isSupportedLocale(lang) ? (lang as Locale) : DEFAULT_LOCALE;
  const dict = getDictionary(locale);
  const totalPageCount = await readTotalReleaseNotesPageCount(
    MAX_RELEASE_NOTES_PER_PAGE
  );
  const notes = await readReleaseNotesPage(1, MAX_RELEASE_NOTES_PER_PAGE);

  return (
    <>
      {notes.map((note) => (
        <ReleaseNote
          key={note.slug}
          title={note.title}
          publishDate={note.publishDate}
          locale={locale}
          content={<note.content />}
        />
      ))}

      {totalPageCount > 1 && (
        <ReleaseNotesPagination
          currentPage={1}
          totalPageCount={totalPageCount}
          basePath={localizePath(locale, "/release-notes")}
          olderLabel={dict.releaseNotes.olderNotes}
          newerLabel={dict.releaseNotes.newerNotes}
        />
      )}
    </>
  );
}
