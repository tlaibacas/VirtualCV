import Load from "@/components/pages/content/Load";
import type { PageProps } from "./types";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ThemeType } from "@/components/header/themeButton/types";
import { cookies } from "next/headers";
import { getInitialPreferences } from "@/libs/cookies/cookieHandler";
import { LanguageCode } from "@/libs/i18n/locales/countries";

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const cookieStore = await cookies();
  const themeVal = cookieStore.get("theme")?.value as ThemeType | undefined;
  const langVal = cookieStore.get("lang")?.value as LanguageCode | undefined;

  const pref = getInitialPreferences(themeVal, langVal);

  return (
    <>
      <Header initialTheme={pref.themeVal} langProp={lang} />
      <Load lang={lang} />
      <Footer langProp={lang} />
    </>
  );
}
