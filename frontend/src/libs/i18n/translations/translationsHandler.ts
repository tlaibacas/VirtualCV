import { codes, LanguageCode } from "../locales/countries";
import { ErrorCode, errorData } from "./errors";
import { translationData } from "./translations";
import { TranslationTree } from "./types";

export function getTranslations(lang: LanguageCode, error?: ErrorCode) {
  const index = codes.indexOf(lang);

  function translate(data: Record<string, unknown>): Record<string, unknown> {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key,
        Array.isArray(value)
          ? value[index]
          : translate(value as Record<string, unknown>),
      ]),
    );
  }

  if (error) {
    return translate(errorData[error]) as TranslationTree<
      (typeof errorData)[typeof error]
    >;
  }

  return translate(translationData) as TranslationTree<typeof translationData>;
}
