import styles from "./Bluescreen.module.css";
import { getTranslations } from "@/libs/i18n/translations/translationsHandler";
import { BluescreenProp } from "./types";

export default async function Bluescreen({ lang }: BluescreenProp) {
  const t = getTranslations(lang);

  return (
    <main className={styles.screen}>
      <section className={styles.content}>
        <header className={styles.header}>
          <div className={styles.icon}>:(</div>

          <div>
            <h1>{t.bluescreenTitle}</h1>
            <p className={styles.subtitle}>{t.bluescreenSubtitle}</p>
          </div>
        </header>

        <div className={styles.message}>
          <p>{t.bluescreenMessage1}</p>
          <p>{t.bluescreenMessage2}</p>
          <p>{t.bluescreenMessage3}</p>
        </div>

        <div className={styles.technical}>
          <p>{t.bluescreenTechnical}</p>

          <p>
            <strong>ERROR:</strong> VCV_SERVICE_UNAVAILABLE
          </p>

          <p>{t.bluescreenService}</p>

          <p>{t.bluescreenStatus}</p>
        </div>

        <footer className={styles.footer}>
          <span>{t.bluescreenFooter}</span>
          <span>Error reference: VCV-503</span>
        </footer>
      </section>
    </main>
  );
}
