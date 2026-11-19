import { codes, LanguageCode } from "../locales/countries";
import { ErrorCode, errorData } from "../../errors/errorHandling";
import { translationData } from "./translations";
import { TranslationTree } from "./types";

function getTranslations(
  lang: LanguageCode,
): TranslationTree<typeof translationData>;

function getTranslations<E extends ErrorCode>(
  lang: LanguageCode,
  error: E,
): TranslationTree<(typeof errorData)[E]>;

function getTranslations(lang: LanguageCode, error?: ErrorCode) {
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
    return translate(errorData[error]);
  }

  return translate(translationData);
}

export { getTranslations };
