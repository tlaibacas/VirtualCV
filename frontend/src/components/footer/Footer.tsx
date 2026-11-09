import type { FooterProps } from "./types";
import styles from "./Footer.module.css";
import { allRightsReserved } from "@/libs/i18n/translations/translations";

export default function Footer({ langProp }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()}{" "}
        {allRightsReserved[langProp] || "All rights reserved"}
      </p>
      <p>My VirtualCV</p>
    </footer>
  );
}
