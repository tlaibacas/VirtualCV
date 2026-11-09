import type { LanguageCode } from "@/libs/i18n/locales/countries";
import { ThemeType } from "./themeButton/types";

export type HeaderProps = {
  initialTheme?: ThemeType;
  langProp?: LanguageCode;
  pathProp?: string | undefined;
};
