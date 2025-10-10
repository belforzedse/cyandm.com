import type { CSSProperties } from "react";

type ScrollDownProps = {
  color?: string;
  label?: string;
  onClick?: () => void;
};

export function ScrollDown({ color, label = "اسکرول کن", onClick }: ScrollDownProps) {
  const style = color
    ? ({
        color,
      } satisfies CSSProperties)
    : undefined;

  return (
    <button type="button" className="scroll-indicator" style={style} onClick={onClick}>
      <span>{label}</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
  );
}
