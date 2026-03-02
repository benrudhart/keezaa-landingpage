"use client";

import { Icon } from "@/components/icon/icon";
import {
  LOCALE_OPTIONS,
  SUPPORTED_LOCALES,
  isSupportedLocale,
  type Locale,
} from "@/lib/i18n";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./language_switcher.module.css";

interface LanguageSwitcherProps {
  locale: Locale;
  title: string;
}

export function LanguageSwitcher({ locale, title }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const activeLocale = LOCALE_OPTIONS[locale];

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (!(event.target instanceof Node)) {
        return;
      }

      if (!containerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className={styles.container}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={title}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className={styles.triggerLabel}>{activeLocale.shortLabel}</span>
        <Icon name="language" size="small" filled={false} />
      </button>

      {isOpen && (
        <div className={styles.popup} role="menu" aria-label={title}>
          {SUPPORTED_LOCALES.map((targetLocale) => (
            <Link
              key={targetLocale}
              href={buildLocalizedHref(pathname, searchParams, targetLocale)}
              role="menuitem"
              className={`${styles.link} ${
                targetLocale === locale ? styles.active : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span className={styles.flag} aria-hidden="true">
                {LOCALE_OPTIONS[targetLocale].flag}
              </span>
              <span>{LOCALE_OPTIONS[targetLocale].label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function buildLocalizedHref(
  pathname: string,
  searchParams: ReturnType<typeof useSearchParams>,
  targetLocale: Locale
) {
  const segments = pathname.split("/");

  if (segments.length > 1 && isSupportedLocale(segments[1])) {
    segments[1] = targetLocale;
  } else {
    segments.splice(1, 0, targetLocale);
  }

  const query = searchParams.toString();
  const nextPath = segments.join("/").replace(/\/+/g, "/");

  return query ? `${nextPath}?${query}` : nextPath;
}
