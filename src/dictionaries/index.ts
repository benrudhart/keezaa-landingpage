import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { deDictionary } from "./de";
import { enDictionary } from "./en";
import { zhDictionary } from "./zh";
import type { SiteDictionary } from "./types";

const DICTIONARIES: Record<Locale, SiteDictionary> = {
  de: deDictionary,
  en: enDictionary,
  zh: zhDictionary,
};

export function getDictionary(locale: Locale = DEFAULT_LOCALE): SiteDictionary {
  return DICTIONARIES[locale];
}
