"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { locales } from "@/libs/i18n/locales/countries";
import styles from "./AvailableLanguages.module.css";

export default function AvailableLanguages() {
  const router = useRouter();

  return (
    <nav aria-label="Available languages">
      <ul className={styles.languages}>
        {Object.entries(locales).map(([code, { language, flagPath }]) => (
          <li key={code}>
            <button type="button" onClick={() => router.push(`/${code}`)}>
              <Image src={flagPath} alt="" width={24} height={16} />
              {language}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
