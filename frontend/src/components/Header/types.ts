import type { LanguageCode } from "@/libs/i18n/locales/countries";
import { ThemeType } from "./ThemeButton/types";

export type HeaderProps = {
  initialTheme?: ThemeType;
  langProp?: LanguageCode;
  pathProp?: string | undefined;
};
