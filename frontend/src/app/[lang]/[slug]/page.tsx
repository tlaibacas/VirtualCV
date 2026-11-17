import { redirect } from "next/navigation";
import { codes, type LanguageCode } from "@/libs/i18n/locales/countries";
import type { PageComponent, PageProps } from "./types";
import { getTranslations } from "@/components/pages/pages";
import type { PageSlug } from "@/components/pages/types";

export default async function Page({ params }: PageProps) {
  const { lang, slug } = await params;

  if (!codes.includes(lang as LanguageCode)) redirect(`/`);

  const value = getTranslations(slug as PageSlug);

  if (!value) redirect(`/${lang}`);

  const translatedSlug = value[lang as LanguageCode];

  if (!translatedSlug) redirect(`/${lang}`);

  if (slug !== translatedSlug) {
    redirect(`/${lang}/${translatedSlug}`);
  }

  const { default: Component } = (await value.component()) as {
    default: PageComponent;
  };
  return <Component lang={lang as LanguageCode} />;
}
