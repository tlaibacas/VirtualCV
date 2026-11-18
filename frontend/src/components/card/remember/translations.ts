const affirmative = ["Sim", "Yes", "Sí", "Oui"] as const;

const negative = ["Não", "No", "No", "Non"] as const;

const answers = {
  affirmative,
  negative,
};

export const common = {
  answers,
} as const;
