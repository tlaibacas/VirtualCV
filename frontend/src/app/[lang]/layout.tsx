import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { Props } from "./types";
import { metadata as siteMetadata } from "@/app/metadata/metadata";
import {
  isSupportedLanguage,
  getLanguageLayoutData,
  getTheme,
} from "@/libs/cookies/cookieHandler";

import CookieDialog from "@/components/popUp/CookieDialog";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import "@/app/(home)/globals.css";

export const metadata: Metadata = siteMetadata;

export default async function Layout({ children, params }: Props) {
  const { lang } = await params;

  if (!isSupportedLanguage(lang)) {
    notFound();
  }

  const cookieStore = await cookies();
  const langVal = cookieStore.get("lang")?.value;
  const warnVal = cookieStore.get("warn")?.value;
  const langLayoutData = getLanguageLayoutData(langVal, lang, warnVal);
  const themeVal = cookieStore.get("theme")?.value;
  const theme = getTheme(themeVal);
  const cookieResult = langLayoutData.cookieResult;

  return (
    <html lang={lang} data-theme={theme}>
      <body>
        {cookieResult ? (
          <CookieDialog cookie={cookieResult} />
        ) : (
          <>
            <Header initialTheme={theme} langProp={lang} />
            {children}
            <Footer langProp={lang} />
          </>
        )}
      </body>
    </html>
  );
}
