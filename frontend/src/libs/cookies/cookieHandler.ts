import { ThemeType } from "@/components/header/themeButton/types";
import { locales, codes, LanguageCode } from "../i18n/locales/countries";
import { CookieResult } from "./types";

const inv = "INVALID";
const not = "NOT_EQUAL";

type Inv = typeof inv;
type Not = typeof not;

function getInitialPreferences(
  themeVal: ThemeType | undefined,
  languageVal: LanguageCode | undefined,
): {
  themeVal: ThemeType | undefined;
  languageVal: LanguageCode | undefined;
} {
  return {
    themeVal,
    languageVal,
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

function getLanguageLayoutData(
  langVal: string | undefined,
  lang: LanguageCode,
  warnVal: string | undefined,
): { cookieResult: CookieResult | undefined } {
  if (!langVal) return { cookieResult: undefined };

  if (!isSupportedLanguage(langVal)) {
    return { cookieResult: { code: inv } };
  }

  if (langVal !== lang && warnVal !== "true") {
    return {
      cookieResult: {
        code: not,
        languageValue: langVal,
        languageName: locales[langVal].language,
      },
    };
  }

  return { cookieResult: undefined };
}

function getTheme(themeVal: string | undefined): ThemeType | undefined {
  return themeVal === "light" || themeVal === "dark" ? themeVal : undefined;
}

export {
  redirectToSavedLanguage,
  getInitialPreferences,
  isSupportedLanguage,
  getLanguageLayoutData,
  getTheme,
  inv as invalid,
};

export type { Inv, Not };
