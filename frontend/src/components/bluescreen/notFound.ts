const title = [
  "O VirtualCV encontrou um problema.",
  "VirtualCV encountered a problem.",
  "VirtualCV encontró un problema.",
  "VirtualCV a rencontré un problème.",
] as const;

const subtitle = [
  "Ocorreu um erro inesperado e não foi possível continuar.",
  "An unexpected error occurred and we couldn't continue.",
  "Se ha producido un error inesperado y no ha sido posible continuar.",
  "Une erreur inattendue s'est produite et nous n'avons pas pu continuer.",
] as const;

const cause = [
  "A página que procura não existe ou deixou de estar disponível.",
  "The page you're looking for doesn't exist or is no longer available.",
  "La página que busca no existe o ya no está disponible.",
  "La page que vous recherchez n'existe pas ou n'est plus disponible.",
] as const;

const explanation = [
  "Verifique o endereço introduzido ou regresse à página inicial.",
  "Check the address you entered or return to the homepage.",
  "Compruebe la dirección introducida o vuelva a la página de inicio.",
  "Vérifiez l'adresse saisie ou retournez à la page d'accueil.",
] as const;

const technicalInfo = [
  "Informações técnicas:",
  "Technical information:",
  "Información técnica:",
  "Informations techniques :",
] as const;

const errorType = [
  "TIPO DE ERRO: Página não encontrada",
  "ERROR TYPE: Page not found",
  "TIPO DE ERROR: Página no encontrada",
  "TYPE D'ERREUR : Page introuvable",
] as const;

const errorStatus = [
  "ESTADO: O recurso solicitado não foi encontrado.",
  "STATUS: The requested resource was not found.",
  "ESTADO: No se encontró el recurso solicitado.",
  "STATUT : La ressource demandée est introuvable.",
] as const;

const footer = [
  "VirtualCV — Proteção e integridade do sistema",
  "VirtualCV — System protection and integrity",
  "VirtualCV — Protección e integridad del sistema",
  "VirtualCV — Protection et intégrité du système",
] as const;

export const notFound = {
  title,
  subtitle,
  cause,
  explanation,
  technicalInfo,
  errorType,
  errorStatus,
  footer,
} as const;
