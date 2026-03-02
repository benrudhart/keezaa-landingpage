import type { Locale } from "@/lib/i18n";

export type SupportedHighlightLocale = Locale;

interface HighlightItem {
  iconName: "no_accounts" | "cloud" | "sentiment_calm";
  title: string;
  description: string;
}

interface HighlightsContent {
  sectionTitle: string;
  items: HighlightItem[];
}

const HIGHLIGHTS_BY_LOCALE: Record<SupportedHighlightLocale, HighlightsContent> =
  {
    de: {
      sectionTitle: "Eine App mit Prinzipien",
      items: [
        {
          iconName: "no_accounts",
          title: "Kein Sign-up",
          description:
            "Du kannst direkt loslegen. Keezaa nutzt dein Apple Konto und verlangt keine separate Registrierung.",
        },
        {
          iconName: "cloud",
          title: "Datenschutz by Design",
          description:
            "Niemand außer dir hat Zugriff auf deine Daten. Weder Keezaa noch Apple können deine Trainingsdaten einsehen.",
        },
        {
          iconName: "sentiment_calm",
          title: "Keine Werbung",
          description:
            "Keine Ads, keine störenden Pop-ups, kein Growth-Lärm. Nur dein Training und die Daten, die du wirklich brauchst.",
        },
      ],
    },
    en: {
      sectionTitle: "An app with values",
      items: [
        {
          iconName: "no_accounts",
          title: "No sign up",
          description:
            "You can start right away. Keezaa uses your Apple Account and does not require a separate sign up.",
        },
        {
          iconName: "cloud",
          title: "Private by design",
          description:
            "No one has access to your data except you. Not Keezaa, not even Apple, complete privacy.",
        },
        {
          iconName: "sentiment_calm",
          title: "No ads",
          description:
            "No ads, no annoying prompts, no growth noise. Just your workout and the data you actually need.",
        },
      ],
    },
    zh: {
      sectionTitle: "这款应用的原则",
      items: [
        {
          iconName: "no_accounts",
          title: "无需注册",
          description:
            "打开即可开始使用。Keezaa 使用你的 Apple 账户，不需要额外注册。",
        },
        {
          iconName: "cloud",
          title: "隐私优先",
          description:
            "除了你自己，没有人可以访问你的数据。无论是 Keezaa 还是 Apple，都无法查看你的训练数据。",
        },
        {
          iconName: "sentiment_calm",
          title: "没有广告",
          description:
            "没有广告，没有烦人的弹窗，也没有增长噪音。只有你的训练，以及你真正需要的数据。",
        },
      ],
    },
  };

export function getHighlights(locale: SupportedHighlightLocale = "de") {
  return HIGHLIGHTS_BY_LOCALE[locale];
}
