import { LanguageCode, LanguageName } from "../i18n/locales/countries";
import { Inv, Not } from "./cookieHandler";

export type CookieResult =
  | { code: Inv }
  | {
      code: Not;
      languageValue: LanguageCode;
      languageName: LanguageName;
    };
