import { codes, type LanguageCode } from "../../libs/i18n/locales/countries";
import type { PageKey, PageSlug } from "./types";

const pages = {
  about: ["sobre", "about", "sobre", "a-propos"],
} as const;

const components = {
  about: () => import("@/components/pages/content/About"),
} satisfies Record<PageKey, () => Promise<unknown>>;

const createPages = {
  slug: Object.fromEntries(codes.map((code) => [code, code])),

  ...Object.fromEntries(
    Object.entries(pages).map(([key, values]) => [
      key,
      Object.fromEntries(values.map((value, index) => [codes[index], value])),
    ]),
  ),

  component: components,
} as {
  [K in PageKey]: Record<LanguageCode, string>;
} & {
  slug: Record<LanguageCode, LanguageCode>;
  component: typeof components;
};

function getTranslations(lang: LanguageCode, slug: PageSlug) {
  const page = Object.entries(pages).find(([, values]) =>
    (values as readonly string[]).includes(slug),
  );

  if (!page) return null;

  const key = page[0] as PageKey;

  return {
    key,
    ...createPages[key],
    component: createPages.component[key],
  };
}

export { getTranslations, pages };
