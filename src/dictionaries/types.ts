export interface FeatureItem {
  iconName:
    | "timer"
    | "fitness_center"
    | "assignment"
    | "watch"
    | "timeline"
    | "favorite"
    | "tune"
    | "folder_copy";
  title: string;
  description: string;
}

export interface SiteDictionary {
  metadata: {
    title: string;
    description: string;
    openGraphTitle: string;
    openGraphDescription: string;
  };
  navbar: {
    features: string;
    testimonials: string;
    values: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    downloadLabel: string;
    screenshotAlt: string;
  };
  intro?: {
    text: string;
  };
  features: {
    items: FeatureItem[];
  };
  footer: {
    privacy: string;
    terms: string;
    followUpdates: string;
    language: string;
    rightsReserved: string;
  };
  referral: {
    pageTitle: string;
    pageDescription: string;
    invalidPageTitle: string;
    title: string;
    codeLead: string;
    codeHint: string;
    codeCopied: string;
    codeCopyError: string;
    rewardIntro: string;
    rewardTitle: string;
    rewardText: string;
    stepDownloadTitle: string;
    stepDownloadText: string;
    appStoreBadgeAlt: string;
    appStoreBadgeLocale: string;
    stepOpenTitle: string;
    stepOpenText: string;
    openInApp: string;
    platformNote: string;
    invalidTitle: string;
    invalidMessage: string;
    backHome: string;
  };
  legal: {
    privacyTitle: string;
    appPrivacyTitle: string;
    appTermsTitle: string;
  };
  releaseNotes: {
    title: string;
    olderNotes: string;
    newerNotes: string;
  };
}
