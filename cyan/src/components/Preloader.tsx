"use client";

import { useEffect } from "react";

export function Preloader() {
  useEffect(() => {
    const preloader = document.querySelector(".preloader-div");
    if (!preloader) return;

    const handleLoad = () => {
      preloader.classList.add("hide");
      setTimeout(() => {
        preloader.remove();
      }, 700);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Fallback timeout to ensure preloader always hides
    const timer = setTimeout(handleLoad, 3000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return null;
}
