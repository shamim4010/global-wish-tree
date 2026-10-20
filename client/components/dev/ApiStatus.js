"use client";

import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";

export default function ApiStatus() {
  const [state, setState] = useState({ loading: true });

  useEffect(() => {
    let cancelled = false;

    apiGet("/api/health")
      .then((data) => {
        if (!cancelled) setState({ loading: false, data });
      })
      .catch(() => {
        if (!cancelled) setState({ loading: false, error: true });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  let text = "Checking server...";
  if (!state.loading && state.error) text = "Server unreachable";
  if (!state.loading && state.data) {
    text = `Server: ${state.data.status} · Database: ${state.data.database}`;
  }

  return (
    <p className="status" role="status">
      {text}
    </p>
  );
}