import type { FooterProps } from "./types";
import styles from "./Footer.module.css";
import { getTranslations } from "@/libs/i18n/translations/translations";

export default function Footer({ langProp }: FooterProps) {
  const t = getTranslations(langProp ?? "en");
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} {t.rights || "All rights reserved"}
      </p>
      <p>My VirtualCV</p>
    </footer>
  );
}
