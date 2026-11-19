import { codes, LanguageCode } from "../locales/countries";
import { dialog } from "@/components/dialogs/cookiesDialog/translations";
import { common } from "@/components/card/remember/translations";
import { footer } from "@/components/footer/translations";
import { loading } from "@/components/pages/content/load/translations";
import { TranslationTree } from "./types";

const translationData = {
  loading,
  footer,
  common,
  dialog,
  bluescreenTitle: [
    "O VirtualCV encontrou um problema.",
    "VirtualCV encountered a problem.",
    "VirtualCV encontró un problema.",
    "VirtualCV a rencontré un problème.",
  ],
  bluescreenSubtitle: [
    "Ocorreu um erro inesperado e não foi possível continuar.",
    "An unexpected error occurred and we couldn't continue.",
    "Se ha producido un error inesperado y no ha sido posible continuar.",
    "Une erreur inattendue s'est produite et nous n'avons pas pu continuer.",
  ],
  bluescreenMessage1: [
    "O backend do VirtualCV poderá estar offline ou a base de dados indisponível.",
    "The VirtualCV backend may be offline or the database may be unavailable.",
    "El backend de VirtualCV podría estar desconectado o la base de datos no estar disponible.",
    "Le backend de VirtualCV est peut-être hors ligne ou la base de données indisponible.",
  ],
  bluescreenMessage2: [
    "Para proteger os seus dados e garantir a segurança do sistema, esta operação foi interrompida.",
    "To protect your data and maintain system security, this operation has been interrupted.",
    "Para proteger sus datos y garantizar la seguridad del sistema, esta operación se ha interrumpido.",
    "Pour protéger vos données et garantir la sécurité du système, cette opération a été interrompue.",
  ],
  bluescreenMessage3: [
    "Por favor, tente novamente dentro de alguns instantes.",
    "Please try again in a little while.",
    "Por favor, inténtelo de nuevo dentro de unos instantes.",
    "Veuillez réessayer dans quelques instants.",
  ],
  bluescreenTechnical: [
    "Informações técnicas:",
    "Technical information:",
    "Información técnica:",
    "Informations techniques :",
  ],
  bluescreenService: [
    "SERVIÇO: Backend / Base de dados",
    "SERVICE: Backend / Database",
    "SERVICIO: Backend / Base de datos",
    "SERVICE : Backend / Base de données",
  ],
  bluescreenStatus: [
    "ESTADO: Pedido interrompido por motivos de segurança.",
    "STATUS: Request interrupted for security reasons.",
    "ESTADO: Solicitud interrumpida por motivos de seguridad.",
    "STATUT : Requête interrompue pour des raisons de sécurité.",
  ],
  bluescreenFooter: [
    "Proteção do sistema VirtualCV",
    "VirtualCV System Protection",
    "Protección del sistema VirtualCV",
    "Protection du système VirtualCV",
  ],
} as const;

export function getTranslations(lang: LanguageCode) {
  const index = codes.indexOf(lang);

  function translate(data: Record<string, unknown>): Record<string, unknown> {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key,
        Array.isArray(value)
          ? value[index]
          : translate(value as Record<string, unknown>),
      ]),
    );
  }

  return translate(translationData) as TranslationTree<typeof translationData>;
}
