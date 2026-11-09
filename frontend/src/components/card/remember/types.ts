import { LanguageCode } from "@/libs/i18n/locales/countries";

export type Props = {
  onChange: (checked: boolean) => void;
  langProp?: LanguageCode;
};
