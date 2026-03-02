"use client";

import { APP_ID } from "@/constants";
import type { SiteDictionary } from "@/dictionaries/types";
import { localizePath, type Locale } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import styles from "./referral_page.module.css";

interface ReferralPageProps {
  locale: Locale;
  content: SiteDictionary["referral"];
}

export function ReferralPage({ locale, content }: ReferralPageProps) {
  const [code, setCode] = useState("");
  const [copyFeedback, setCopyFeedback] = useState("");
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const nextCode = readReferralCode();
    setCode(nextCode);
    setIsIOS(detectIOSDevice());
  }, []);

  const t = content;
  const isValidCode = useMemo(() => /^[A-Z0-9]{3,12}$/.test(code), [code]);
  const claimLink = useMemo(() => {
    return `keezaa://claim-code?code=${encodeURIComponent(code)}&type=referral`;
  }, [code]);

  useEffect(() => {
    document.title = isValidCode ? t.pageTitle : t.invalidPageTitle;
  }, [isValidCode, t]);

  async function copyCode() {
    if (!isValidCode) {
      return;
    }

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(code);
      } else {
        const fallbackInput = document.createElement("input");
        fallbackInput.value = code;
        document.body.appendChild(fallbackInput);
        fallbackInput.select();
        fallbackInput.setSelectionRange(0, code.length);

        if (!document.execCommand("copy")) {
          throw new Error("Copy command failed");
        }

        document.body.removeChild(fallbackInput);
      }

      setCopyFeedback(t.codeCopied);
      window.setTimeout(() => {
        setCopyFeedback("");
      }, 1400);
    } catch {
      setCopyFeedback(t.codeCopyError);
    }
  }

  if (!isValidCode) {
    return (
      <main className={styles.page}>
        <section className={styles.section}>
          <div className={styles.shell}>
            <h1 className={styles.title}>{t.invalidTitle}</h1>
            <p className={styles.invalidMessage}>{t.invalidMessage}</p>
            <Link href={localizePath(locale)} className={styles.secondaryAction}>
              {t.backHome}
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <section className={styles.section}>
        <div className={styles.shell}>
          <h1 className={styles.title}>{t.title}</h1>

          <div className={styles.codeBlock}>
            <p className={styles.codeLead}>{t.codeLead}</p>
            <button
              type="button"
              className={styles.codeButton}
              onClick={copyCode}
              aria-describedby="referral-copy-feedback"
              title={t.codeHint}
            >
              {code.split("").map((character, index) => (
                <span key={`${character}-${index}`} className={styles.codeChar}>
                  {character}
                </span>
              ))}
            </button>
            <p className={styles.codeHint}>{t.codeHint}</p>
            <p
              id="referral-copy-feedback"
              className={styles.copyFeedback}
              aria-live="polite"
            >
              {copyFeedback}
            </p>
          </div>

          <div className={styles.rewardCard}>
            <p className={styles.rewardIntro}>{t.rewardIntro}</p>
            <h2 className={styles.rewardTitle}>{t.rewardTitle}</h2>
            {t.rewardText && <p className={styles.rewardText}>{t.rewardText}</p>}
          </div>

          <div className={styles.steps}>
            <article className={styles.stepCard}>
              <h2 className={styles.stepTitle}>{t.stepDownloadTitle}</h2>
              <a
                href={`https://apps.apple.com/app/id${APP_ID}`}
                target="_blank"
                rel="noreferrer"
                className={styles.appStoreBadgeLink}
              >
                <Image
                  className={styles.appStoreBadgeImage}
                  src={`https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/${t.appStoreBadgeLocale}?size=250x83&releaseDate=1528934400`}
                  alt={t.appStoreBadgeAlt}
                  width={250}
                  height={83}
                  unoptimized
                />
              </a>
            </article>

            <article className={styles.stepCard}>
              <h2 className={styles.stepTitle}>{t.stepOpenTitle}</h2>
              {isIOS && (
                <a href={claimLink} className={styles.openAction}>
                  <Image
                    src="/keezaa_app_icon.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.openActionIcon}
                  />
                  <span className={styles.openActionText}>{t.openInApp}</span>
                </a>
              )}
              {!isIOS && <p className={styles.platformNote}>{t.platformNote}</p>}
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

function readReferralCode(): string {
  if (typeof window === "undefined") {
    return "";
  }

  const params = new URLSearchParams(window.location.search);
  return (params.get("code") || "").trim().toUpperCase();
}

function detectIOSDevice(): boolean {
  if (typeof navigator === "undefined") {
    return false;
  }

  const ua = navigator.userAgent || "";
  const platform = navigator.platform || "";
  const navigatorWithUAData = navigator as Navigator & {
    userAgentData?: { platform?: string };
  };
  const uaDataPlatform = navigatorWithUAData.userAgentData?.platform || "";
  const iOSByUA = /iPhone|iPad|iPod/i.test(ua);
  const iOSByUAData = /iOS/i.test(uaDataPlatform);
  const iPadOSDesktopUA =
    platform === "MacIntel" && navigator.maxTouchPoints > 1;

  return iOSByUA || iOSByUAData || iPadOSDesktopUA;
}
