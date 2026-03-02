import type { Locale } from "@/lib/i18n";

export type LegalContentRenderer = () => React.JSX.Element;

export type LocalizedLegalContent = Record<Locale, LegalContentRenderer>;
