import { getTranslations } from "@/libs/i18n/translations/translationsHandler";
import Image from "next/image";
import styles from "./Load.module.css";
import Loading from "@/components/main/loading/Loading";
import { LoadingProps } from "./types";

export default function Load({ lang }: LoadingProps) {
  const t = getTranslations(lang);

  return (
    <main className={styles.main}>
      <div>
        <div className={styles.brand}>
          <div className={styles.name}>
            <span className={styles.My}>My</span>
            <Image src="/assets/icon.svg" alt="Icon" width={65} height={50} />
          </div>

          <div className={styles.title}>
            <span className={styles.Virtual}>Virtual</span>
            <span className={styles.CV}>CV</span>
          </div>
        </div>

        <div className={styles.loading}>
          <span>{t.loading.loadingText}</span>
          <Loading />
        </div>
      </div>
    </main>
  );
}
