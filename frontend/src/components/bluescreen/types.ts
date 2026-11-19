import { LanguageCode } from "@/libs/i18n/locales/countries";
import { ErrorCode } from "@/libs/i18n/translations/errors";

export type BluescreenProp = {
  lang: LanguageCode;
  error: ErrorCode;
};
