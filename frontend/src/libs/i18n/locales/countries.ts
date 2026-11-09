// Functions and variables related to country locales

const localeData = [
  ["pt", "Portuguese", "Português"],
  ["en", "English", "English"],
  ["es", "Spanish", "Español"],
  ["fr", "French", "Français"],
] as const;

const locales = Object.fromEntries(
  localeData.map(([code, alt, language]) => [
    code,
    {
      alt,
      language,
      flagPath: `/assets/${code}.svg`,
    },
  ]),
);

const codes = localeData.map(([code]) => code);

// Types //

type LanguageCode = (typeof localeData)[number][0];
type LanguageAlt = (typeof localeData)[number][1];
type LanguageName = (typeof localeData)[number][2];

// Exports
export type { LanguageCode, LanguageAlt, LanguageName };
export { locales, codes };
