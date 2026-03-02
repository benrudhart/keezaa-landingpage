import { ColorScheme } from "./types/shared";

/**
 * "system" - follows the user's system appearance
 * "light" - forces your website to always use light theme
 * "dark" - forces your website to always use dark theme
 */
export const THEME: "system" | "light" | "dark" = "system";

/**
 * Your App Store App ID without the 'id' prefix.
 * You can find it in your App Store Connect.
 * Go to your app -> App Information -> Apple ID.
 *
 * Example: "6502667826"
 */
export const APP_ID = "1337707625";

/**
 * Custom fonts for 'whimsical' and 'cursive' font styles.
 * Default system font is used for all other font styles.
 */
export const WHIMSICAL_FONT = { className: "" } as const;
export const CURSIVE_FONT = { className: "" } as const;

export const MATERIAL_SYMBOLS = [
  "timer",
  "fitness_center",
  "assignment",
  "watch",
  "timeline",
  "favorite",
  "tune",
  "folder_copy",
  "lock",
  "open_in_new",
  "send",
  "check_circle",
  "open_in_full",
  "play_arrow",
  "pause",
  "star",
  "no_accounts",
  "cloud",
  "sentiment_calm",
  "language",
] as const;

// Keezaa
export const COLORS: ColorScheme = {
  LIGHT: {
    "text-primary": "#0A1620",
    "text-secondary": "rgba(10, 22, 32, 0.62)",
    "fill-0": "#FFFFFF",
    "fill-1": "#F3F8FC",
    "fill-2": "#E1ECF5",
    "fill-3": "#C5D9E7",
    "accent-brand": "#275D96",
    "accent-orange": "#FF9F5A",
    "accent-green": "#26B86A",
    "accent-red": "#E85D5D",
    "accent-blue": "#316EA9",
    "accent-indigo": "#456CA0",
    "accent-mint": "#15B8B0",
    "accent-purple": "#7B6EF6",
    "accent-pink": "#F25F8B",
  },
  DARK: {
    "text-primary": "#F4F8FB",
    "text-secondary": "rgba(221, 230, 238, 0.72)",
    "fill-0": "#020508",
    "fill-1": "#060C12",
    "fill-2": "#101A24",
    "fill-3": "#1C2B38",
    "accent-brand": "#3F7DBD",
    "accent-orange": "#FFB36F",
    "accent-green": "#35D07F",
    "accent-red": "#FF7272",
    "accent-blue": "#4F8ECC",
    "accent-indigo": "#6288C1",
    "accent-mint": "#35D4CA",
    "accent-purple": "#AB96FF",
    "accent-pink": "#FF7CAC",
  },
} as const;

export const MAX_RELEASE_NOTES_PER_PAGE = 5;

export const IS_WAITLIST_ENABLED = false;
