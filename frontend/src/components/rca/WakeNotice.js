"use client";

import { useEffect, useState } from "react";

const SHOW_AFTER_MS = 4000;

/**
 * The public demo API runs on free hosting that sleeps when idle, so the first
 * request can take about a minute. Explain the wait instead of looking frozen.
 */
export default function WakeNotice({ active }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!active) {
      setVisible(false);
      return undefined;
    }
    const timer = setTimeout(() => setVisible(true), SHOW_AFTER_MS);
    return () => clearTimeout(timer);
  }, [active]);

  if (!active || !visible) return null;
  return (
    <p className="inline-caution" role="status">
      The demo server was idle and is waking up. This can take up to about 90 seconds on the first visit. Please keep this tab open.
    </p>
  );
}
