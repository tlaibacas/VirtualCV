import "@/app/(home)/globals.css";
import { getTranslations } from "@/libs/i18n/translations/translations";
import { Props } from "./types";
import Image from "next/image";
import styles from "./page.module.css";
import Loading from "@/components/main/loading/Loading";
import type { LanguageCode } from "@/libs/i18n/locales/countries";

export default async function Page({ params }: Props) {
  const { lang } = await params;
  const t = getTranslations(lang);

  const language = lang as LanguageCode;
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
          <span>{t.loading || "Loading..."}</span>
          <Loading />
        </div>
      </div>
    </main>
  );
}
