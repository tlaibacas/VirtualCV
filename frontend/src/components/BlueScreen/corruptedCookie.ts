const title = [
  "Cookie incorreto ou corrompido.",
  "Wrong or corrupted cookie.",
  "Cookie incorrecto o corrupto.",
  "Cookie incorrect ou corrompu.",
] as const;

const subtitle = [
  "O cookie armazenado não é válido.",
  "The stored cookie is not valid.",
  "La cookie almacenada no es válida.",
  "Le cookie enregistré n'est pas valide.",
] as const;

const cause = [
  "O conteúdo do cookie está incorreto, foi alterado ou está corrompido.",
  "The cookie content is incorrect, has been altered, or is corrupted.",
  "El contenido de la cookie es incorrecto, ha sido alterado o está corrupto.",
  "Le contenu du cookie est incorrect, a été modifié ou est corrompu.",
] as const;

const explanation = [
  "Limpe os cookies do site e tente novamente.",
  "Clear this site's cookies and try again.",
  "Borre las cookies del sitio e inténtelo de nuevo.",
  "Effacez les cookies du site et réessayez.",
] as const;

const technicalInfo = [
  "Informações técnicas:",
  "Technical information:",
  "Información técnica:",
  "Informations techniques :",
] as const;

const errorType = [
  "TIPO DE ERRO: Cookie incorreto ou corrompido",
  "ERROR TYPE: Wrong or corrupted cookie",
  "TIPO DE ERROR: Cookie incorrecto o corrupto",
  "TYPE D'ERREUR : Cookie incorrect ou corrompu",
] as const;

const errorStatus = [
  "ESTADO: O valor do cookie é inválido ou não pode ser lido.",
  "STATUS: The cookie value is invalid or unreadable.",
  "ESTADO: El valor de la cookie no es válido o no se puede leer.",
  "STATUT : La valeur du cookie est invalide ou illisible.",
] as const;

const footer = [
  "VirtualCV — Gerenciamento seguro de sessão",
  "VirtualCV — Secure session management",
  "VirtualCV — Gestión segura de sesiones",
  "VirtualCV — Gestion sécurisée des sessions",
] as const;

export const corruptedCookie = {
  title,
  subtitle,
  cause,
  explanation,
  technicalInfo,
  errorType,
  errorStatus,
  footer,
} as const;
