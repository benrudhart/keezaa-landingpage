"use client";

import Link from "next/link";
import { useEffect } from "react";
import { resolveLocale } from "@/lib/i18n";

export default function RootRedirectPage() {
  useEffect(() => {
    const target = `/${resolveLocale(navigator.language)}/`;
    window.location.replace(target);
  }, []);

  return (
    <main style={{ padding: 32 }}>
      <h1>Keezaa</h1>
      <p>Choose a language.</p>
      <ul>
        <li><Link href="/de/">Deutsch</Link></li>
        <li><Link href="/en/">English</Link></li>
        <li><Link href="/zh/">简体中文</Link></li>
      </ul>
    </main>
  );
}
