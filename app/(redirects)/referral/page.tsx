"use client";

import Link from "next/link";
import { useEffect } from "react";
import { resolveLocale } from "@/lib/i18n";

export default function ReferralRedirectPage() {
  useEffect(() => {
    const query = window.location.search;
    const hash = window.location.hash;
    const locale = resolveLocale(navigator.language);

    window.location.replace(`/${locale}/referral/${query}${hash}`);
  }, []);

  return (
    <main style={{ padding: 32 }}>
      <p>Redirecting…</p>
      <p>
        <Link href="/de/referral/">Deutsch</Link> | <Link href="/en/referral/">English</Link> | <Link href="/zh/referral/">简体中文</Link>
      </p>
    </main>
  );
}
