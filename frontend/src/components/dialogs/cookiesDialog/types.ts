import { LanguageCode, LanguageName } from "@/libs/i18n/locales/countries";

export type WarningProps = {
  val: {
    langVal: LanguageCode;
    langName: LanguageName;
  };
};
