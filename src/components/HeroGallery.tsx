"use client";

import { useEffect, useState } from "react";

export function HeroGallery({
  images,
  intervalMs,
  altPrefix,
}: {
  images: string[];
  intervalMs: number;
  altPrefix: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion || images.length <= 1) return;
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, Math.max(intervalMs, 2000));
    return () => clearInterval(id);
  }, [images.length, intervalMs, reducedMotion]);

  return (
    <>
      {images.map((src, i) => (
        <div
          key={src + i}
          role="img"
          aria-label={`${altPrefix} background ${i + 1}`}
          className="absolute inset-0 bg-cover bg-center scale-105 transition-opacity ease-in-out"
          style={{
            backgroundImage: `url('${src}')`,
            opacity: i === currentIndex ? 0.6 : 0,
            transitionDuration: "1500ms",
          }}
        />
      ))}
    </>
  );
}
