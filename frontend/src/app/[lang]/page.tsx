import Load from "@/components/Load/Load";
import type { PageProps } from "./types";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ThemeType } from "@/components/Header/ThemeButton/types";
import { cookies } from "next/headers";
import { getTheme, isSupportedLanguage } from "@/libs/cookies/cookieHandler";
import { DifCookie } from "@/components/Dialogs/CookiesDialog/CookieDialog";
import { LanguageCode } from "@/libs/i18n/locales/countries";
import Bluescreen from "@/components/BlueScreen/BlueScreen";
import {
  corruptedCookieError,
  defaultLangError,
  langNotFoundError,
} from "@/libs/errors/errorHandling";

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const cookieStore = await cookies();
  const langVal: string | undefined = cookieStore.get("lang")
    ?.value as LanguageCode;
  const warn = cookieStore.get("warn")?.value;
  const theme = getTheme(
    cookieStore.get("theme")?.value as ThemeType | undefined,
  );

  if (!isSupportedLanguage(langVal) && langVal !== undefined) {
    return <Bluescreen lang={defaultLangError} error={corruptedCookieError} />;
  }

  if (!isSupportedLanguage(lang)) {
    return <Bluescreen lang={defaultLangError} error={langNotFoundError} />;
  }

  return (
    <>
      {!warn && isSupportedLanguage(langVal) && langVal !== lang && (
        <DifCookie val={{ langVal }} />
      )}

      <Header initialTheme={theme} langProp={lang} />
      <Load lang={lang} />
      <Footer langProp={lang} />
    </>
  );
}
