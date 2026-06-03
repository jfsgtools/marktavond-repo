'use client';

import React, { useEffect, useRef, useState } from 'react';

interface StatBlockProps {
  getal: number;
  suffix?: string;
  label: string;
}

export default function StatBlock({ getal, suffix = '', label }: StatBlockProps) {
  const [huidigGetal, setHuidigGetal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true;
            const duration = 1500;
            const steps = 60;
            const increment = getal / steps;
            let current = 0;
            const interval = setInterval(() => {
              current = Math.min(current + increment, getal);
              setHuidigGetal(Math.round(current));
              if (current >= getal) clearInterval(interval);
            }, duration / steps);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [getal]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6">
      <div className="stat-number">
        {huidigGetal}{suffix}
      </div>
      <p className="text-muted-foreground text-sm font-semibold mt-2 max-w-[120px] leading-tight">{label}</p>
    </div>
  );
}