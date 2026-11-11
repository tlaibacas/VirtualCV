import { LanguageCode } from "@/libs/i18n/locales/countries";
import type { ReactNode } from "react";

export type Props = {
  params: Promise<{
    lang: LanguageCode;
  }>;
  children: ReactNode;
};
