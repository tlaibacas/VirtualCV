import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { getInitialPreferences } from "@/libs/cookies/cookieHandler";
import type { ThemeType } from "@/components/header/themeButton/types";
import type { LanguageCode } from "@/libs/i18n/locales/countries";

import Header from "@/components/header/Header";
import LangCards from "@/components/card/LangCards";

import "./page.css";

export default async function Home() {
  const cookieStore = await cookies();

  const themeVal = cookieStore.get("theme")?.value as ThemeType | undefined;
  const languageVal = cookieStore.get("lang")?.value as
    | LanguageCode
    | undefined;

  const preferences = getInitialPreferences(themeVal, languageVal);

  if (preferences.languageVal) {
    redirect(`/${preferences.languageVal}`);
  }

  return (
    <>
      <Header
        initialTheme={preferences.themeVal}
        langProp={undefined}
        pathProp="/"
      />

      <main>
        <LangCards />
      </main>
    </>
  );
}
