import styles from "./BlueScreen.module.css";
import { getTranslations } from "@/libs/i18n/translations/translationsHandler";
import { langNotFoundError } from "@/libs/i18n/translations/errors";
import type { BluescreenProp } from "./types";

export default function Bluescreen({ lang, error }: BluescreenProp) {
  const t = getTranslations(lang, error);

  return (
    <main className={styles.screen}>
      <section className={styles.content}>
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
          {error === langNotFoundError && <p>{t.availableLanguages}</p>}
        </div>

        <div className={styles.technical}>
          <p>{t.technicalInfo}</p>

          <p>{t.errorType}</p>

          <p>{t.errorStatus}</p>
        </div>

        <footer className={styles.footer}>
          <span>{t.footer}</span>
          <span>ERROR: VCV_NOT_FOUND</span>
        </footer>
      </section>
    </main>
  );
}
