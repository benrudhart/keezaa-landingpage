"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function LegacyAppTermsRedirectPage() {
  useEffect(() => {
    window.location.replace("/de/appTOS/");
  }, []);

  return (
    <main style={{ padding: 32 }}>
      <Link href="/de/appTOS/">Open app terms page</Link>
    </main>
  );
}
