"use client";

import { useEffect, useState } from "react";

const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

type FireConfig = {
  count: number;
  position: { left: number; top: number };
  size: { min: number; max: number };
  color: {
    hue: { min: number; max: number };
    saturate: { min: number; max: number };
    lightness: { min: number; max: number };
  };
};

// Exact configs from WordPress fire.js
const FIRE_CONFIGS: Record<string, FireConfig> = {
  cyan: {
    count: 15,
    position: { left: 100, top: 50 },
    size: { min: 150, max: 450 },
    color: {
      hue: { min: 180, max: 264 },
      saturate: { min: 65, max: 100 },
      lightness: { min: 31, max: 63 },
    },
  },
  orange: {
    count: 15,
    position: { left: 100, top: 50 },
    size: { min: 150, max: 450 },
    color: {
      hue: { min: 4, max: 57 },
      saturate: { min: 50, max: 100 },
      lightness: { min: 31, max: 63 },
    },
  },
  redPrimary: {
    count: 15,
    position: { left: 100, top: 50 },
    size: { min: 150, max: 450 },
    color: {
      hue: { min: 350, max: 360 },
      saturate: { min: 64, max: 100 },
      lightness: { min: 16, max: 55 },
    },
  },
  redSecondary: {
    count: 5,
    position: { left: 100, top: 50 },
    size: { min: 150, max: 450 },
    color: {
      hue: { min: 236, max: 255 },
      saturate: { min: 64, max: 100 },
      lightness: { min: 31, max: 51 },
    },
  },
  green: {
    count: 15,
    position: { left: 100, top: 50 },
    size: { min: 150, max: 450 },
    color: {
      hue: { min: 108, max: 155 },
      saturate: { min: 55, max: 100 },
      lightness: { min: 18, max: 63 },
    },
  },
};

type Circle = {
  width: string;
  left: string;
  top: string;
  hue: number;
  saturate: string;
  lightness: string;
};

function makeFire(config: FireConfig): Circle[] {
  const { count, position, size, color } = config;
  const circles: Circle[] = [];

  for (let i = 0; i < count; i++) {
    circles.push({
      width: getRandomInt(size.min, size.max) + "px",
      left: getRandomInt(0, position.left) + "%",
      top: getRandomInt(0, position.top) + "%",
      hue: getRandomInt(color.hue.min, color.hue.max),
      saturate: getRandomInt(color.saturate.min, color.saturate.max) + "%",
      lightness: getRandomInt(color.lightness.min, color.lightness.max) + "%",
    });
  }

  return circles;
}

type BottomFireProps = {
  variant?: keyof typeof FIRE_CONFIGS | (keyof typeof FIRE_CONFIGS)[];
  className?: string;
};

export function BottomFire({ variant = "cyan", className = "" }: BottomFireProps) {
  const [circles, setCircles] = useState<Circle[]>([]);

  useEffect(() => {
    // Set body data-scrolled attribute on scroll
    const handleScroll = () => {
      document.body.setAttribute(
        "data-scrolled",
        window.scrollY > 100 ? "true" : "false"
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Generate circles based on variant(s)
    const variants = Array.isArray(variant) ? variant : [variant];
    const allCircles: Circle[] = [];

    variants.forEach((v) => {
      const config = FIRE_CONFIGS[v];
      if (config) {
        allCircles.push(...makeFire(config));
      }
    });

    setCircles(allCircles);
  }, [variant]);

  return (
    <div className={`bottom-fire ${className}`}>
      {circles.map((circle, index) => (
        <div
          key={index}
          className="circle"
          style={{
            // @ts-expect-error - CSS custom properties
            "--width": circle.width,
            "--left": circle.left,
            "--top": circle.top,
            "--hue": circle.hue,
            "--saturate": circle.saturate,
            "--lightness": circle.lightness,
          }}
        />
      ))}
    </div>
  );
}
