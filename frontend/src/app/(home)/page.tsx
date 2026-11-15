import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import "./page.css";
import { getTheme, isSupportedLanguage } from "@/libs/cookies/cookieHandler";
import type { ThemeType } from "@/components/header/themeButton/types";
import type { LanguageCode } from "@/libs/i18n/locales/countries";

import Header from "@/components/header/Header";
import LangCards from "@/components/card/LangCards";

export default async function Home() {
  const cookieStore = await cookies();

  const themeVal = cookieStore.get("theme")?.value as ThemeType | undefined;

  const theme: ThemeType | undefined = getTheme(themeVal);

  const langVal: LanguageCode | undefined = cookieStore.get("lang")?.value as
    | LanguageCode
    | undefined;
  if (isSupportedLanguage(langVal as LanguageCode)) {
    redirect(`/${langVal}`);
  }
  return (
    <>
      <Header initialTheme={theme} langProp={undefined} pathProp="/" />

      <main>
        <LangCards />
      </main>
    </>
  );
}
