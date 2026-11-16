import { ThemeType } from "@/components/header/themeButton/types";
import { codes, LanguageCode } from "../i18n/locales/countries";

function isSupportedLanguage(value: string | undefined): value is LanguageCode {
  return codes.includes(value as LanguageCode);
}

function getTheme(themeVal: string | undefined): ThemeType | undefined {
  return themeVal === "light" || themeVal === "dark" ? themeVal : undefined;
}

export { isSupportedLanguage, getTheme };
