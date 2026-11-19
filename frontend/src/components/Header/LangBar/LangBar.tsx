"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { locales } from "@/libs/i18n/locales/countries";
import styles from "./LangBar.module.css";

function LangBar({ langProp }: { langProp?: string }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(langProp || "en");

  const navRef = useRef<HTMLElement>(null);
  const router = useRouter();

  const current = locales[selected as keyof typeof locales];

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event: PointerEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [open]);

  return (
    <nav
      ref={navRef}
      className={styles.langBar}
      aria-label="Language selection"
    >
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <Image
          className={styles.flag}
          src={current.flagPath}
          alt={`${current.language} flag`}
          width={120}
          height={80}
          loading="eager"
        />
        {current.language}
        <span aria-hidden="true">{open ? "▲" : "▼"}</span>
      </button>

      <ul
        className={`${styles.dropdown} ${open ? styles.open : ""}`}
        aria-hidden={!open}
        inert={!open}
      >
        {Object.entries(locales).map(([code, { language, flagPath }]) => (
          <li key={code}>
            <button
              type="button"
              onClick={() => {
                setSelected(code);
                setOpen(false);
                router.push(`/${code}`);
              }}
              aria-current={selected === code ? "true" : undefined}
            >
              <Image
                className={styles.flag}
                src={flagPath}
                alt={`${language} flag`}
                width={120}
                height={80}
                loading="eager"
              />
              {language}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default LangBar;
