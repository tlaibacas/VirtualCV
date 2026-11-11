import { codes, LanguageCode } from "../locales/countries";

const translationData = {
  loading: ["A carregar...", "Loading...", "Cargando...", "Chargement..."],
  yes: ["Sim", "Yes", "Sí", "Oui"],
  no: ["Não", "No", "No", "Non"],
  rights: [
    "Todos os direitos reservados.",
    "All rights reserved.",
    "Todos los derechos reservados.",
    "Tous droits réservés.",
  ],
  dontWarn: [
    "Não me avise novamente",
    "Don't warn me again",
    "No me vuelvas a avisar",
    "Ne plus m'avertir",
  ],
  goTo: ["Ir para", "Go to", "Ir a", "Aller à"],
  continue: ["Continuar", "Continue", "Continuar", "Continuer"],
  dialogFirst: [
    "O seu idioma guardado difere do idioma atual da página.",
    "Your saved language differs from the current page language.",
    "Su idioma guardado difiere del idioma actual de la página.",
    "Votre langue enregistrée diffère de la langue actuelle de la page.",
  ],
  dialogSecond: [
    "Deseja continuar ou ir para o seu idioma preferido?",
    "Would you like to continue or go to your preferred language?",
    "¿Desea continuar o ir a su idioma preferido?",
    "Voulez-vous continuer ou aller à votre langue préférée?",
  ],
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

export { getTranslations };
