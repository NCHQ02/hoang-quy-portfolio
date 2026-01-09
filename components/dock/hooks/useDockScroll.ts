import { useState, useEffect } from "react";
import type { DockItemData } from "../types";

/**
 * Custom hook to detect active section based on scroll position
 * @param items - Array of dock items to track
 * @returns activeSection - ID of the currently active section
 */
export const useDockScroll = (items: DockItemData[]) => {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = "hero";

      for (const item of items) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = item.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  return activeSection;
};

/**
 * Utility function to scroll to a specific section
 * @param id - Section ID to scroll to
 */
export const scrollToSection = (id: string) => {
  if (id === "hero") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 50,
      behavior: "smooth",
    });
  }
};
