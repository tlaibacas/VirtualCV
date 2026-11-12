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

  return (
    <header className={`${styles.header} ${hidden ? styles.hidden : ""}`}>
      {pathProp !== "/" && <LangBar langProp={langProp} />}
      <Theme initialTheme={initialTheme} />

      <button
        type="button"
        className={styles.toggle}
        aria-label={hidden ? "Show header" : "Hide header"}
        aria-expanded={!hidden}
      >
        {hidden ? "▼" : "▲"}
      </button>
    </header>
  );
}
