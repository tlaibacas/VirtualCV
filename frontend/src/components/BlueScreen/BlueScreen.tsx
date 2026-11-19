import styles from "./BlueScreen.module.css";
import { getTranslations } from "@/libs/i18n/translations/translationsHandler";
import {
  corruptedCookieError,
  langNotFoundError,
} from "@/libs/errors/errorHandling";
import type { BluescreenProp } from "./types";
import ClearCookies from "../ClearCookies/ClearCookies";
import LangBar from "../Header/LangBar/LangBar";

export default function Bluescreen({ lang, error }: BluescreenProp) {
  const t = getTranslations(lang, error);

  return (
    <main className={styles.screen}>
      <section className={styles.content}>
        <div className={`${styles.technicalAditional} ${styles.center}`}>
          <p>{t.changeLanguageNow}</p>
          {(error === corruptedCookieError || error === langNotFoundError) && (
            <LangBar dropDown={true} langProp={lang} />
          )}
        </div>
        <header className={styles.header}>
          <div className={styles.icon}>:(</div>

          <div>
            <h1>{t.title}</h1>
            <p className={styles.subtitle}>{t.subtitle}</p>
          </div>
        </header>

        <div className={styles.message}>
          <p>{t.cause}</p>
          <p>{t.explanation}</p>
          {error === langNotFoundError && (
            <div className={styles.technicalAditional}>
              <p>{t.availableLanguages}</p>
              <LangBar error={true} />
            </div>
          )}
          {error === corruptedCookieError && (
            <div className={`${styles.technicalAditional} ${styles.center}`}>
              <p>{t.clickOnButtonToFixThat}</p>
              <ClearCookies label={t.removeCookies} />
            </div>
          )}
        </div>

        <div className={styles.technical}>
          <p>{t.technicalInfo}</p>

          <p>{t.errorType}</p>

          <p>{t.errorStatus}</p>
        </div>

        <footer className={styles.footer}>
          <span>{t.footer}</span>
          <span>ERROR: {error}</span>
        </footer>
      </section>
    </main>
  );
}
