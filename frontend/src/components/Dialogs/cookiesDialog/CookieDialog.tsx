"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Remember from "@/components/Card/remember/Remember";
import styles from "./CookieDialog.module.css";
import { clearCookies, createCookie } from "@/libs/cookies/cookies";
import { getTranslations } from "@/libs/i18n/translations/translationsHandler";
import { WarningProps } from "./types";
import { localeData } from "@/libs/i18n/locales/countries";

function WrongCookie() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    const dialog = dialogRef.current;

    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }, []);

  return (
    <dialog ref={dialogRef} className={`${styles.dialog} ${styles.invalid}`}>
      <p>Your saved language is invalid or the cookie is corrupted.</p>

      <button
        onClick={() => {
          clearCookies("lang", "warn");
          router.push("/");
        }}
      >
        Go to home
      </button>
    </dialog>
  );
}

function DifCookie({ val }: WarningProps) {
  const [remember, setRemember] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  const lang = val.langVal ?? "en";
  const langName = localeData.find(([code]) => code === lang)?.[2];
  const t = getTranslations(lang);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }, []);

  return (
    <dialog ref={dialogRef} className={`${styles.dialog} ${styles.warning}`}>
      <p>{t.dialog.cookie.first}</p>

      <p>{t.dialog.cookie.second}</p>

      <p>{t.dialog.cookie.dontWarn}</p>

      <Remember langProp={val.langVal} onChange={setRemember} />

      <div>
        <button
          onClick={() => {
            createCookie("warn", "true", remember ? 604800 : 60);
            dialogRef.current?.close();
            router.push(`/${val.langVal}`);
          }}
        >
          {t.dialog.cookie.goTo} {langName}
        </button>

        <button
          onClick={() => {
            createCookie("warn", "true", remember ? 604800 : 60);
            dialogRef.current?.close();
            router.refresh();
          }}
        >
          {t.dialog.cookie.continue}
        </button>
      </div>
    </dialog>
  );
}

export { DifCookie, WrongCookie };
