"use client";

import { useEffect, useState } from "react";

export function DesktopHeroClock() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // Continuous rotation animation
    const rotationInterval = setInterval(() => {
      setRotation((prev) => (prev + 6) % 360);
    }, 50);

    return () => {
      clearInterval(rotationInterval);
    };
  }, []);

  return (
    <div className="relative">
      <div className="relative h-32 w-32">
        {/* Conic gradient clock face (matches legacy purple/blue gradient) */}
        <div
          className="absolute inset-0 overflow-hidden rounded-full"
          style={{
            background: `repeating-conic-gradient(from ${rotation}deg at 50% 50%, #1c0b8e 0%, #382db9 100%)`,
          }}
        >
          {/* Clock hand (cyan triangular pointer) */}
          <div
            className="absolute left-1/2 top-0 origin-bottom"
            style={{
              transform: `translateX(-50%) rotate(${rotation}deg)`,
              width: 0,
              height: 0,
              borderLeft: "5px solid transparent",
              borderRight: "5px solid transparent",
              borderTop: "64px solid hsl(173, 100%, 56%)",
            }}
          />
        </div>
      </div>

      {/* Multi-color glow planet (matches legacy light-planet) */}
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
        style={{
          background: "conic-gradient(#fbcf34, #f22424, #2cccd7, #0574dc, #05b5dc)",
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}
