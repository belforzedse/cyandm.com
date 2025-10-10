type BubbleVariant = "cyan" | "sunset" | "violet" | "projects";

type BubbleDefinition = {
  size: number;
  top: string;
  left: string;
  duration: string;
  delay: string;
  opacity: number;
};

const VARIANTS: Record<BubbleVariant, { colors: [string, string]; blur: number }> = {
  cyan: { colors: ["rgba(21,237,237,0.6)", "rgba(4,178,233,0.45)"], blur: 80 },
  sunset: { colors: ["rgba(255,175,64,0.6)", "rgba(255,64,129,0.45)"], blur: 70 },
  violet: { colors: ["rgba(168,85,247,0.55)", "rgba(56,189,248,0.35)"], blur: 75 },
  projects: { colors: ["rgba(21,237,237,0.6)", "rgba(4,178,233,0.45)"], blur: 80 },
};

const BASE_BUBBLES: BubbleDefinition[] = [
  { size: 280, top: "6%", left: "12%", duration: "18s", delay: "0s", opacity: 0.28 },
  { size: 220, top: "30%", left: "68%", duration: "16s", delay: "-4s", opacity: 0.24 },
  { size: 160, top: "55%", left: "45%", duration: "20s", delay: "-2s", opacity: 0.2 },
  { size: 190, top: "70%", left: "18%", duration: "22s", delay: "-6s", opacity: 0.26 },
  { size: 140, top: "15%", left: "78%", duration: "17s", delay: "-1s", opacity: 0.18 },
  { size: 320, top: "-8%", left: "60%", duration: "26s", delay: "-8s", opacity: 0.35 },
  { size: 260, top: "40%", left: "-10%", duration: "24s", delay: "-10s", opacity: 0.22 },
  { size: 200, top: "80%", left: "65%", duration: "20s", delay: "-12s", opacity: 0.25 },
];

function buildGradient([colorA, colorB]: [string, string]) {
  return `radial-gradient(circle at 25% 25%, ${colorA}, transparent 65%), radial-gradient(circle at 60% 60%, ${colorB}, transparent 75%)`;
}

export function Bubbles({ variant = "cyan" }: { variant?: BubbleVariant }) {
  const config = VARIANTS[variant] ?? VARIANTS.cyan;

  return (
    <div className="bubble-layer">
      {BASE_BUBBLES.map((bubble, index) => (
        <span
          key={`${variant}-${index}`}
          className="bubble-particle"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            insetInlineStart: bubble.left,
            insetBlockStart: bubble.top,
            opacity: bubble.opacity,
            background: buildGradient(config.colors),
            filter: `blur(${config.blur}px)`, 
            animationDuration: bubble.duration,
            animationDelay: bubble.delay,
          }}
        />
      ))}
    </div>
  );
}
