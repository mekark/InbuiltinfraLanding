"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const y = Math.max(
        window.scrollY,
        document.documentElement.scrollTop,
        document.body.scrollTop
      );
      setVisible(y > 200);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    document.addEventListener("scroll", update, { passive: true, capture: true });

    return () => {
      window.removeEventListener("scroll", update);
      document.removeEventListener("scroll", update, true);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    document.body.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#FFAC03] text-[#0A2A4A] shadow-[0_20px_42px_-20px_rgba(255,172,3,0.72)] transition-all duration-300 hover:scale-105 hover:bg-[#ffb82e] focus:outline-none focus:ring-4 focus:ring-[#FFAC03]/40 ${
        visible
          ? "pointer-events-auto scale-100 opacity-100"
          : "pointer-events-none h-0 w-0 scale-75 opacity-0 overflow-hidden shadow-none"
      }`}
    >
      <ArrowUp className="h-6 w-6" strokeWidth={2.75} />
    </button>
  );
}
