"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Remember from "@/components/card/remember/Remember";
import styles from "./CookieDialog.module.css";
import { clearCookies, createCookie } from "@/libs/cookies/cookies";
import { getTranslations } from "@/libs/i18n/translations/translations";
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
  const codes = localeData.map(([code]) => code);
  const lang = val.langVal ?? "en";
  const index = codes.indexOf(lang);
  const t = getTranslations(lang);
  useEffect(() => {
    const dialog = dialogRef.current;

    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }, []);
  return (
    <dialog ref={dialogRef} className={`${styles.dialog} ${styles.warning}`}>
      <p>
        {t.dialogFirst ||
          "Your saved language differs from the current page language."}
      </p>

      <p>
        {t.dialogSecond ||
          "Would you like to continue or go to your preferred language?"}
      </p>

      <p>{t.dontWarn || "Don't warn me again"}</p>

      <Remember langProp={val.langVal} onChange={setRemember} />

      <div>
        <button
          onClick={() => {
            dialogRef.current?.close();
            router.push(`/${val.langVal}`);
          }}
        >
          {t.goTo || "Go to"} {localeData[index][2]}
        </button>

        <button
          onClick={() => {
            if (remember) {
              createCookie("warn", "true", 300);
            }

            dialogRef.current?.close();
            router.refresh();
          }}
        >
          {t.continue || "Continue"}
        </button>
      </div>
    </dialog>
  );
}

export { DifCookie, WrongCookie };
