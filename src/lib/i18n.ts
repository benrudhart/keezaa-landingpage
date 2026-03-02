export const SUPPORTED_LOCALES = ["de", "en", "zh"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const LOCALE_OPTIONS: Record<
  Locale,
  {
    shortLabel: string;
    label: string;
    flag: string;
  }
> = {
  de: {
    shortLabel: "DE",
    label: "Deutsch",
    flag: "🇩🇪",
  },
  en: {
    shortLabel: "EN",
    label: "English",
    flag: "🇬🇧",
  },
  zh: {
    shortLabel: "ZH",
    label: "简体中文",
    flag: "🇨🇳",
  },
};

export const DEFAULT_LOCALE: Locale = "de";

export function isSupportedLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function resolveLocale(value?: string | null): Locale {
  if (!value) {
    return DEFAULT_LOCALE;
  }

  const normalized = value.trim().toLowerCase();

  for (const locale of SUPPORTED_LOCALES) {
    if (normalized === locale) {
      return locale;
    }
  }

  const language = normalized.split("-")[0];
  return isSupportedLocale(language) ? language : DEFAULT_LOCALE;
}

export function localizePath(locale: Locale, path = ""): string {
  if (!path || path === "/") {
    return `/${locale}`;
  }

  return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
}
