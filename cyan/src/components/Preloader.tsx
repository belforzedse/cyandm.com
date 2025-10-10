"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const shouldReduceMotion = useReducedMotion();
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsReady(true);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    const fallback = window.setTimeout(handleLoad, 3200);

    return () => {
      window.removeEventListener("load", handleLoad);
      window.clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (!isReady) return;
    const timer = window.setTimeout(() => setIsVisible(false), 480);
    return () => window.clearTimeout(timer);
  }, [isReady]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          role="status"
          aria-live="assertive"
          aria-busy={!isReady}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--background)]/95 backdrop-blur-sm"
          initial={{ opacity: 1 }}
          animate={{ opacity: isReady ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="relative flex h-40 w-40 items-center justify-center rounded-full border border-white/10 bg-[var(--surface)]/60 shadow-[0_20px_60px_rgba(21,237,237,0.18)]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative h-24 w-24">
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(21,237,237,0.28)] to-[rgba(4,178,233,0.45)] blur-xl"
                animate={
                  shouldReduceMotion
                    ? { opacity: 0.7 }
                    : { scale: [1, 1.12, 1], opacity: [0.5, 0.95, 0.5] }
                }
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.span
                aria-hidden
                className="absolute inset-6 rounded-full bg-gradient-to-tr from-[rgba(245,166,35,0.25)] via-transparent to-transparent"
                animate={
                  shouldReduceMotion
                    ? { opacity: 0.6 }
                    : { scale: [1, 0.92, 1], opacity: [0.4, 0.9, 0.4] }
                }
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.2 }}
              />
              <motion.span
                aria-hidden
                className="absolute left-1/2 top-1/2 h-12 w-[3px] origin-bottom -translate-x-1/2 -translate-y-full rounded-full bg-[var(--primary)]"
                animate={shouldReduceMotion ? { rotate: 0 } : { rotate: 360 }}
                transition={{ repeat: Infinity, ease: "linear", duration: 4 }}
              />
              <span className="absolute inset-0 rounded-full border border-white/10" aria-hidden />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
