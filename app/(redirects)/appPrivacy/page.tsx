"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function LegacyAppPrivacyRedirectPage() {
  useEffect(() => {
    window.location.replace("/de/appPrivacy/");
  }, []);

  return (
    <main style={{ padding: 32 }}>
      <Link href="/de/appPrivacy/">Open app privacy page</Link>
    </main>
  );
}
