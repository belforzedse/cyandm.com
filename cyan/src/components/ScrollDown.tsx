"use client";

import type { CSSProperties, KeyboardEvent } from "react";

type ScrollDownStyle = CSSProperties & {
  "--scroll-color"?: string;
};

type ScrollDownProps = {
  label?: string;
  onClick?: () => void;
  scroll_color?: string;
};

export function ScrollDown({ label, onClick, scroll_color }: ScrollDownProps) {
  const style: ScrollDownStyle | undefined = scroll_color
    ? { "--scroll-color": scroll_color }
    : undefined;

  const handleKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (!onClick) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <span
      className="scroll-down cursor-pointer"
      style={style}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={label}
    >
      <div>
        <i className="icon-arrow" />
        <i className="icon-arrow" />
      </div>
    </span>
  );
}
