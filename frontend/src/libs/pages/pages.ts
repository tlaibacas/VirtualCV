import { codes, LanguageCode } from "../i18n/locales/countries";

const pages = {
  about: ["sobre", "about", "sobre", "a-propos"],
} as const;

const createPages = Object.fromEntries(
  Object.entries(pages).map(([key, values]) => [
    key,
    Object.fromEntries(values.map((value, index) => [codes[index], value])),
  ]),
);

export function getTranslations(lang: LanguageCode, slug: string) {
  const page = Object.values(createPages).find((values) =>
    (Object.values(values) as string[]).includes(slug),
  );

  return page?.[lang] ?? null;
}
