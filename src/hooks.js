import { useEffect, useState } from 'react';
import { HOURS } from './data.js';

export const pad = (n) => String(n).padStart(2, '0');
export const fmtH = (h) => pad(h) + ':00';
export const todayIdx = () => (new Date().getDay() + 6) % 7;

export const load = (k, d) => {
  try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; }
};
export const save = (k, v) => {
  try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* sem armazenamento */ }
};

// Conta de 0 até "to" com animação suave (respeita movimento reduzido).
export function useCount(to) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf, t0;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setV(to); return; }
    const step = (t) => {
      if (!t0) t0 = t;
      const p = Math.min((t - t0) / 1200, 1);
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return v;
}

// Diz se a academia está aberta agora, usando o relógio do aparelho.
export function useOpenNow() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(t);
  }, []);
  const d = (now.getDay() + 6) % 7;
  const h = now.getHours() + now.getMinutes() / 60;
  const [a, b] = HOURS[d];
  return { open: h >= a && h < b, d, a, b };
}
