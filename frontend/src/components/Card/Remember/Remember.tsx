"use client";

import { getTranslations } from "@/libs/i18n/translations/translationsHandler";
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
        <span className={styles.yes}>{t.common.answers.affirmative}</span>
        <span className={styles.no}>{t.common.answers.negative}</span>
      </span>
    </label>
  );
}
