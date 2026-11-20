import type { LanguageCode } from "@/libs/i18n/locales/countries";
import type { ErrorCode } from "@/libs/errors/errorHandling";

export type Props = {
  lang: LanguageCode;
  error: ErrorCode;
};
