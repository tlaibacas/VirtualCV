import { codes, type LanguageCode } from "../../libs/i18n/locales/countries";
import type { PageKey, PageSlug } from "./types";

const pages = {
  bluescreen: ["tela-azul", "bluescreen", "pantalla-azul", "ecran-bleu"],
} as const;

const components = {
  bluescreen: () => import("@/components/pages/content/Bluescreen"),
} satisfies Record<PageKey, () => Promise<unknown>>;

const slugData = Object.fromEntries(codes.map((code) => [code, code]));

const translationData = Object.fromEntries(
  Object.entries(pages).map(([key, values]) => {
    const translations = Object.fromEntries(
      values.map((value, index) => {
        const code = codes[index];

        return [code, value];
      }),
    );

    return [key, translations];
  }),
);

const createPages = {
  slug: slugData,
  ...translationData,
  component: components,
} as {
  [K in PageKey]: Record<LanguageCode, string>;
} & {
  slug: Record<LanguageCode, LanguageCode>;
  component: typeof components;
};

function getTranslations(slug: PageSlug) {
  const page = Object.entries(pages).find(([, values]) => {
    return (values as readonly string[]).includes(slug);
  });

  if (!page) {
    return null;
  }

  const key = page[0] as PageKey;

  const translations = createPages[key];

  const component = createPages.component[key];

  const result = {
    key,
    ...translations,
    component,
  };

  return result;
}

export { getTranslations, pages };
