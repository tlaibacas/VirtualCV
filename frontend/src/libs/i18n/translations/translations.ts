import { codes, LanguageCode } from "../locales/countries";

const dialog = {
  first: {
    pt: "O seu idioma guardado difere do idioma atual da página.",
    es: "Su idioma guardado difiere del idioma actual de la página.",
    en: "Your saved language differs from the current page language.",
    fr: "Votre langue enregistrée diffère de la langue actuelle de la page.",
  },
  second: {
    pt: "Deseja continuar ou ir para o seu idioma preferido?",
    es: "¿Desea continuar o ir a su idioma preferido?",
    en: "Would you like to continue or go to your preferred language?",
    fr: "Voulez-vous continuer ou aller à votre langue préférée?",
  },
};

const dontWarn = {
  pt: "Não me avise novamente",
  es: "No me vuelvas a avisar",
  en: "Don't warn me again",
  fr: "Ne plus m'avertir",
};

const goTo = {
  pt: "Ir para",
  es: "Ir a",
  en: "Go to",
  fr: "Aller à",
};

const continueText = {
  pt: "Continuar",
  es: "Continuar",
  en: "Continue",
  fr: "Continuer",
};

const allRightsReserved = {
  pt: "Todos os direitos reservados.",
  es: "Todos los derechos reservados.",
  en: "All rights reserved.",
  fr: "Tous droits réservés.",
};

const translationData = {
  loading: ["A carregar...", "Loading...", "Cargando...", "Chargement..."],
  yes: ["Sim", "Yes", "Si", "Oui"],
  no: ["Não", "No", "No", "Non"],
} as const;

const translations = Object.fromEntries(
  Object.entries(translationData).map(([key, values]) => [
    key,
    Object.fromEntries(values.map((value, index) => [codes[index], value])),
  ]),
);

function getTranslations(lang: LanguageCode) {
  return Object.fromEntries(
    Object.entries(translations).map(([key, values]) => [key, values[lang]]),
  );
}

export {
  getTranslations,
  dialog,
  dontWarn,
  goTo,
  continueText,
  allRightsReserved,
};
