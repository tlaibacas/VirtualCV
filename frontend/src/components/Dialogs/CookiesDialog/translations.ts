const dontWarn = [
  "Não me avise novamente",
  "Don't warn me again",
  "No me vuelvas a avisar",
  "Ne plus m'avertir",
] as const;

const first = [
  "O idioma guardado é diferente do idioma da página atual.",
  "Your saved language differs from the current page language.",
  "El idioma guardado es diferente del idioma de la página actual.",
  "La langue enregistrée diffère de celle de la page actuelle.",
] as const;

const second = [
  "Pretende continuar ou ir para o seu idioma preferido?",
  "Would you like to continue or go to your preferred language?",
  "¿Quieres continuar o ir a tu idioma preferido?",
  "Souhaitez-vous continuer ou accéder à votre langue préférée ?",
] as const;

const goTo = ["Ir para", "Go to", "Ir a", "Aller à"] as const;

const continueText = [
  "Continuar",
  "Continue",
  "Continuar",
  "Continuer",
] as const;

const cookie = {
  dontWarn,
  first,
  second,
  goTo,
  continue: continueText,
};

export const dialog = {
  cookie,
} as const;
