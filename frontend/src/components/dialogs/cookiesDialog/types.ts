import { LanguageCode, LanguageName } from "@/libs/i18n/locales/countries";

export type Props = {
  val: {
    code: "INVALID" | "NOT_EQUAL";
    langVal: LanguageCode;
    langName: LanguageName;
  };
};
