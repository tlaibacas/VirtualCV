export const errorData = {
  notFound: {
    title: [
      "Página não encontrada",
      "Page not found",
      "Página no encontrada",
      "Page introuvable",
    ],
    description: [
      "A página que procura não existe.",
      "The page you are looking for does not exist.",
      "La página que buscas no existe.",
      "La page que vous recherchez n’existe pas.",
    ],
  },
} as const;

export type ErrorCode = keyof typeof errorData;

export const notFound = "notFound" satisfies ErrorCode;
