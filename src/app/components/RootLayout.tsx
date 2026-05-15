import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { motion } from "motion/react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    let observer: IntersectionObserver | null = null;
    const animationFrame = window.requestAnimationFrame(() => {
      const sections = Array.from(document.querySelectorAll("main section"));
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("section-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.16, rootMargin: "0px 0px -80px 0px" },
      );

      sections.forEach((section, index) => {
        section.classList.add("section-reveal");
        if (section instanceof HTMLElement) {
          section.style.setProperty("--section-delay", `${Math.min(index * 90, 360)}ms`);
        }
        observer?.observe(section);
      });
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      observer?.disconnect();
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
}
