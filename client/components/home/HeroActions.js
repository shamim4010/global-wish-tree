"use client";

import { useState } from "react";
import Link from "next/link";

export default function HeroActions() {
  const [showNotice, setShowNotice] = useState(false);

  return (
    <div className="actions">
      <div className="actions-row">
        <button type="button" className="btn btn-primary" onClick={() => setShowNotice(true)}>
          Make a Wish
        </button>

        <Link href="/explore" className="btn btn-ghost">
          Explore Wishes
        </Link>
      </div>

      {showNotice && (
        <p className="notice" role="status">
          Wish creation opens in a later phase. 🌱
        </p>
      )}
    </div>
  );
}