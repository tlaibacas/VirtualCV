import { codes, LanguageCode } from "../i18n/locales/countries";

const pages = {
  about: ["sobre", "about", "sobre", "a-propos"],
} as const;

const createPages = {
  slug: Object.fromEntries(codes.map((code) => [code, code])),
  ...Object.fromEntries(
    Object.entries(pages).map(([key, values]) => [
      key,
      Object.fromEntries(values.map((value, index) => [codes[index], value])),
    ]),
  ),
  component: Object.fromEntries(
    Object.keys(pages).map((key) => [
      key,
      () => import(`@/components/pages/${key}`),
    ]),
  ),
};

export function getTranslations(lang: LanguageCode, slug: string) {
  const page = Object.values(createPages).find((values) =>
    (Object.values(values) as string[]).includes(slug),
  );
}
