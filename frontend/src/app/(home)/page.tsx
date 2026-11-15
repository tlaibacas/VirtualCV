import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import "./page.css";
import { getInitialPreferences } from "@/libs/cookies/cookieHandler";
import type { ThemeType } from "@/components/header/themeButton/types";
import type { LanguageCode } from "@/libs/i18n/locales/countries";

import Header from "@/components/header/Header";
import LangCards from "@/components/card/LangCards";

export default async function Home() {
  const cookieStore = await cookies();

  const themeVal = cookieStore.get("theme")?.value as ThemeType | undefined;
  const langVal = cookieStore.get("lang")?.value as LanguageCode | undefined;

  const pref = getInitialPreferences(themeVal, langVal);

  if (pref.languageVal) {
    redirect(`/${pref.languageVal}`);
  }

  return (
    <>
      <Header initialTheme={pref.themeVal} langProp={undefined} pathProp="/" />

      <main>
        <LangCards />
      </main>
    </>
  );
}
