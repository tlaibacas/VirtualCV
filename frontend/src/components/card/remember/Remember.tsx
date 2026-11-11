"use client";

import { getTranslations } from "@/libs/i18n/translations/translations";
import type { Props } from "./types";
import styles from "./Remember.module.css";

export default function Remember({ onChange, langProp }: Props) {
  const t = getTranslations(langProp ?? "en");
  return (
    <label className={`${styles.switch} switch`}>
      <input
        type="checkbox"
        name="rememberLanguage"
        onChange={(event) => onChange(event.currentTarget.checked)}
      />
      <span className={`${styles.slider} slider`}>
        <span className={styles.yes}>{langProp ? t.yes : "Yes"}</span>
        <span className={styles.no}>{langProp ? t.no : "No"}</span>
      </span>
    </label>
  );
}
