import type { LanguageCode } from "@/libs/i18n/locales/countries";

export type Props = {
  langProp?: LanguageCode;
  error?: boolean;
  change?: boolean;
  onLanguageChange?: (code: LanguageCode) => void;
};
