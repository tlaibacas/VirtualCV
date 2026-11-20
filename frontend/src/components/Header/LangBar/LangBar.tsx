"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { locales } from "@/libs/i18n/locales/countries";
import type { LanguageCode } from "@/libs/i18n/locales/countries";
import styles from "./LangBar.module.css";
import type { Props } from "./types";

export default function LangBar({
  langProp,
  error,
  change,
  onLanguageChange,
}: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<LanguageCode>(langProp ?? "en");

  const navRef = useRef<HTMLElement>(null);
  const router = useRouter();

  const current = locales[selected];

  const languageEntries = Object.entries(locales) as [
    LanguageCode,
    (typeof locales)[LanguageCode],
  ][];

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

  function handleLanguageChange(code: LanguageCode) {
    setSelected(code);
    setOpen(false);
    onLanguageChange?.(code);

    if (change) return;

    router.push(`/${code}`);
  }

  return (
    <nav
      ref={navRef}
      className={[!error && styles.langBar, change && styles.changeLanguage]
        .filter(Boolean)
        .join(" ")}
      aria-label="Language selection"
    >
      {error ? (
        <ul className={styles.availableLanguages}>
          {languageEntries.map(([code, { language, flagPath }]) => (
            <li key={code}>
              <button
                type="button"
                onClick={() => handleLanguageChange(code)}
                aria-current={selected === code ? "page" : undefined}
              >
                <Image src={flagPath} alt="" width={120} height={80} />
                {language}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <>
          <button
            type="button"
            className={styles.trigger}
            aria-expanded={open}
            onClick={() => setOpen((previous) => !previous)}
          >
            <Image
              className={styles.flag}
              src={current.flagPath}
              alt=""
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
            {languageEntries.map(([code, { language, flagPath }]) => (
              <li key={code}>
                <button
                  type="button"
                  onClick={() => handleLanguageChange(code)}
                  aria-current={selected === code ? "page" : undefined}
                >
                  <Image
                    className={styles.flag}
                    src={flagPath}
                    alt=""
                    width={120}
                    height={80}
                  />

                  {language}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </nav>
  );
}
