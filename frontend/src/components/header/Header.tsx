"use client";

import Theme from "./themeButton/Theme";
import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import LangBar from "./langBar/LangBar";
import { HeaderProps } from "./types";

export default function Header({
  initialTheme,
  langProp,
  pathProp,
}: HeaderProps) {
  const [hidden, setHidden] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleWheel(event: WheelEvent) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      if (event.deltaY > 0) {
        setHidden(true);
      } else if (event.deltaY < 0) {
        setHidden(false);
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    if (!langProp) return;

    const timeout = setTimeout(() => {
      setHidden(true);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [langProp]);

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      if (event.clientY <= 10) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }

        setHidden(false);
        return;
      }

      if (timeoutRef.current) return;

      timeoutRef.current = setTimeout(() => {
        setHidden(true);
        timeoutRef.current = null;
      }, 1500);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className={`${styles.header} ${hidden ? styles.hidden : ""}`}>
      {pathProp !== "/" && <LangBar langProp={langProp} />}
      <Theme initialTheme={initialTheme} />

      <button
        type="button"
        className={styles.toggle}
        onClick={() => setHidden((previous) => !previous)}
        aria-label={hidden ? "Show header" : "Hide header"}
        aria-expanded={!hidden}
      >
        {hidden ? "▼" : "▲"}
      </button>
    </header>
  );
}
