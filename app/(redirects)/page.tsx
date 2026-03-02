"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function RootRedirectPage() {
  useEffect(() => {
    const target = navigator.language.toLowerCase().startsWith("en")
      ? "/en/"
      : "/de/";
    window.location.replace(target);
  }, []);

  return (
    <main style={{ padding: 32 }}>
      <h1>Keezaa</h1>
      <p>Please choose a language.</p>
      <ul>
        <li><Link href="/de/">Deutsch</Link></li>
        <li><Link href="/en/">English</Link></li>
      </ul>
    </main>
  );
}
