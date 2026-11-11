"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Remember from "@/components/card/remember/Remember";
import styles from "./CookieDialog.module.css";
import { clearCookies, createCookie } from "@/libs/cookies/cookies";
import { invalid } from "@/libs/cookies/cookieHandler";
import { Props } from "./types";
import { getTranslations } from "@/libs/i18n/translations/translations";

export default function CookieDialog({ cookie }: Props) {
  const [, setRemember] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  const lang = cookie?.code === "NOT_EQUAL" ? cookie.languageValue : "en";
  const t = getTranslations(lang);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }, [cookie.code]);

  return (
    <dialog
      ref={dialogRef}
      className={`${styles.dialog} ${
        cookie.code === invalid ? styles.invalid : styles.warning
      }`}
    >
      {cookie.code === invalid ? (
        <>
          <p>Your saved language is invalid or the cookie is corrupted.</p>
          <button
            onClick={() => {
              clearCookies("lang", "warn");
              router.refresh();
              router.push("/");
            }}
          >
            Go to home
          </button>
        </>
      ) : (
        <>
          <p>
            {t.dialogFirst ||
              "Your saved language differs from the current page language."}
          </p>
          <p>
            {t.dialogSecond ||
              "Would you like to continue or go to your preferred language?"}
          </p>
          <p>{t.dontWarn || "Don&apos;t warn me again"}</p>
          <Remember langProp={cookie.languageValue} onChange={setRemember} />
          <div>
            <button onClick={() => router.push(`/${cookie.languageValue}`)}>
              {t.goTo || "Go to"} {cookie.languageName}
            </button>
            <button
              onClick={() => {
                createCookie("warn", "true", 300);

                dialogRef.current?.close();
                router.refresh();
              }}
            >
              {t.continue || "Continue"}
            </button>
          </div>
        </>
      )}
    </dialog>
  );
}
