"use client";

import { useState } from "react";
import Theme from "./themeButton/Theme";
import LangBar from "./langBar/LangBar";
import styles from "./Header.module.css";
import { HeaderProps } from "./types";

export default function Header({
  initialTheme,
  langProp,
  pathProp,
}: HeaderProps) {
  const [hidden, setHidden] = useState(false);

  return (
    <div className={styles.headerArea}>
      <div className={styles.hoverZone} />

      <header className={`${styles.header} ${hidden ? styles.hidden : ""}`}>
        {pathProp !== "/" && <LangBar langProp={langProp} />}

        <Theme initialTheme={initialTheme} />

        <button
          type="button"
          className={styles.toggle}
          onClick={() => setHidden(!hidden)}
          aria-label={hidden ? "Show header" : "Hide header"}
          aria-expanded={!hidden}
        >
          {hidden ? "▼" : "▲"}
        </button>
      </header>
    </div>
  );
}
