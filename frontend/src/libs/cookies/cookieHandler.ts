import { ThemeType } from "@/components/header/themeButton/types";
import { codes, LanguageCode } from "../i18n/locales/countries";

const invalid = "INVALID";
const notValid = "NOT_EQUAL";

type Invalid = typeof invalid;
type NotValid = typeof notValid;

function getInitialPreferences(
  themeVal: ThemeType | undefined,
  langVal: LanguageCode | undefined,
): {
  themeVal: ThemeType | undefined;
  languageVal: LanguageCode | undefined;
} {
  return {
    themeVal,
    languageVal: langVal,
  };
}

function isSupportedLanguage(value: string): value is LanguageCode {
  return codes.includes(value as LanguageCode);
}

function redirectToSavedLanguage(
  languageVal: LanguageCode | undefined,
): LanguageCode | undefined {
  return languageVal;
}

function getTheme(themeVal: string | undefined): ThemeType | undefined {
  return themeVal === "light" || themeVal === "dark" ? themeVal : undefined;
}

export {
  redirectToSavedLanguage,
  getInitialPreferences,
  isSupportedLanguage,
  getTheme,
  invalid,
};

export type { Invalid, NotValid };
