import { getDictionary } from "@/dictionaries";
import { ReleaseNote } from "@/components/release_note/release_note";
import { ReleaseNotesPagination } from "@/components/release_notes_pagination/release_notes_pagination";
import { MAX_RELEASE_NOTES_PER_PAGE } from "@/constants";
import {
  readReleaseNotesPage,
  readTotalReleaseNotesPageCount,
} from "@/lib/release_notes_helpers";
import { SUPPORTED_LOCALES, isSupportedLocale, localizePath, type Locale } from "@/lib/i18n";

export default async function ReleaseNotesPage({
  params,
}: {
  params: Promise<{ lang: string; page: string }>;
}) {
  const { lang, page } = await params;
  const locale = (isSupportedLocale(lang) ? lang : "de") as Locale;
  const dict = getDictionary(locale);
  const totalPageCount = await readTotalReleaseNotesPageCount(
    MAX_RELEASE_NOTES_PER_PAGE,
  );
  const notes = await readReleaseNotesPage(
    Number(page),
    MAX_RELEASE_NOTES_PER_PAGE,
  );

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
          currentPage={Number(page)}
          totalPageCount={totalPageCount}
          basePath={localizePath(locale, "/release-notes")}
          olderLabel={dict.releaseNotes.olderNotes}
          newerLabel={dict.releaseNotes.newerNotes}
        />
      )}
    </>
  );
}

export async function generateStaticParams() {
  const totalPageCount = await readTotalReleaseNotesPageCount(
    MAX_RELEASE_NOTES_PER_PAGE,
  );

  return SUPPORTED_LOCALES.flatMap((lang) =>
    Array.from({
      length: totalPageCount,
    }).map((_, index) => ({
      lang,
      page: String(index + 1),
    }))
  );
}

export const dynamicParams = false;
