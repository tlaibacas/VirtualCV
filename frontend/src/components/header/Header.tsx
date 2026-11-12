"use client";

import Theme from "./themeButton/Theme";
import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import LangBar from "./langBar/LangBar";
import { HeaderProps } from "./types";

const HIDE_DELAY = 1500;

export default function Header({
  initialTheme,
  langProp,
  pathProp,
}: HeaderProps) {
  const [hidden, setHidden] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function clearHideTimeout() {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }

  function hideAfterDelay() {
    clearHideTimeout();

    timeoutRef.current = setTimeout(() => {
      setHidden(true);
      timeoutRef.current = null;
    }, HIDE_DELAY);
  }

  function handleToggle() {
    clearHideTimeout();

    setHidden((previous) => {
      if (!previous) {
        return true;
      }

      return false;
    });
  }

  useEffect(() => {
    hideAfterDelay();

    return clearHideTimeout;
  }, []);

  useEffect(() => {
    function handleWheel(event: WheelEvent) {
      if (event.deltaY > 0) {
        clearHideTimeout();
        setHidden(true);
      } else if (event.deltaY < 0) {
        clearHideTimeout();
        setHidden(false);
      }
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node) &&
        !hidden
      ) {
        hideAfterDelay();
      }
    }

    function handleMouseMove(event: MouseEvent) {
      if (event.clientY <= 10) {
        clearHideTimeout();
        setHidden(false);
        return;
      }

      if (!headerRef.current) return;

      if (headerRef.current.contains(event.target as Node)) {
        clearHideTimeout();
      } else if (!hidden) {
        hideAfterDelay();
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: true });
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("mousemove", handleMouseMove);
      clearHideTimeout();
    };
  }, [hidden]);

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${hidden ? styles.hidden : ""}`}
    >
      {pathProp !== "/" && <LangBar langProp={langProp} />}
      <Theme initialTheme={initialTheme} />

      <button
        type="button"
        className={styles.toggle}
        onClick={handleToggle}
        aria-label={hidden ? "Show header" : "Hide header"}
        aria-expanded={!hidden}
      >
        {hidden ? "▼" : "▲"}
      </button>
    </header>
  );
}
