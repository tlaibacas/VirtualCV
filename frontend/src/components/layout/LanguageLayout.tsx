import { cookies } from "next/headers";

import { getLanguageLayoutData, getTheme } from "@/libs/cookies/cookieHandler";

import CookieDialog from "@/components/dialogs/cookiesDialog/CookieDialog";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Props } from "./types";
export default async function LanguageLayout({ children, lang }: Props) {
  const cookieStore = await cookies();

  const langVal = cookieStore.get("lang")?.value;
  const warnVal = cookieStore.get("warn")?.value;
  const themeVal = cookieStore.get("theme")?.value;

  const { cookieResult } = getLanguageLayoutData(langVal, lang, warnVal);
  const theme = getTheme(themeVal);

  return (
    <div data-theme={theme}>
      {cookieResult ? (
        <CookieDialog cookie={cookieResult} />
      ) : (
        <>
          <Header initialTheme={theme} langProp={lang} />
          {children}
          <Footer langProp={lang} />
        </>
      )}
    </div>
  );
}
