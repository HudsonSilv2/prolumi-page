import { useState, useEffect, useCallback } from 'react';

/**
 * Hook: scroll position (for header background transition)
 */
export function useScrollThreshold(threshold = 32) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const cb = () => setScrolled(window.scrollY > threshold);
    cb();
    window.addEventListener('scroll', cb, { passive: true });
    return () => window.removeEventListener('scroll', cb);
  }, [threshold]);
  return scrolled;
}

/**
 * Hook: auto-play with pause on hover
 */
export function useAutoPlay(intervalMs: number, length: number, paused: boolean) {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((prev) => (prev + 1) % length), [length]);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, intervalMs);
    return () => clearInterval(t);
  }, [intervalMs, length, paused, next]);
  return [current, setCurrent, next] as const;
}
