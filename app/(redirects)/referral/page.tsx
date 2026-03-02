"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ReferralRedirectPage() {
  useEffect(() => {
    const query = window.location.search;
    const hash = window.location.hash;
    const locale = navigator.language.toLowerCase().startsWith("en")
      ? "en"
      : "de";

    window.location.replace(`/${locale}/referral/${query}${hash}`);
  }, []);

  return (
    <main style={{ padding: 32 }}>
      <p>Redirecting…</p>
      <p>
        <Link href="/de/referral/">Deutsch</Link> | <Link href="/en/referral/">English</Link>
      </p>
    </main>
  );
}
