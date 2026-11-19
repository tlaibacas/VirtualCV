import { LanguageCode } from "@/libs/i18n/locales/countries";
import { ErrorCode } from "@/libs/errors/errorHandling";

export type BluescreenProp = {
  lang: LanguageCode;
  error: ErrorCode;
};
