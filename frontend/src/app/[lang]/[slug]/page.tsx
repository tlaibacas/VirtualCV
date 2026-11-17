import { notFound, redirect } from "next/navigation";
import type { LanguageCode } from "@/libs/i18n/locales/countries";
import type { PageProps } from "./types";
import { getTranslations } from "@/components/pages/pages";
import type { PageSlug } from "@/components/pages/types";
import type { ComponentType } from "react";

export default async function Page({ params }: PageProps) {
  const { lang, slug } = await params;

  const language = lang as LanguageCode;
  const value = getTranslations(slug as PageSlug);

  if (!value) notFound();

  if (slug !== value[language]) {
    redirect(`/${language}/${value[language]}`);
  }

  const { default: Component } = (await value.component()) as {
    default: ComponentType;
  };

  return <Component />;
}
