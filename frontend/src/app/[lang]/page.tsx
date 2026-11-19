import Load from "@/components/Load/Load";
import type { PageProps } from "./types";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ThemeType } from "@/components/Header/themeButton/types";
import { cookies } from "next/headers";
import { getTheme, isSupportedLanguage } from "@/libs/cookies/cookieHandler";
import {
  DifCookie,
  WrongCookie,
} from "@/components/Dialogs/cookiesDialog/CookieDialog";
import { LanguageCode } from "@/libs/i18n/locales/countries";
import Bluescreen from "@/components/BlueScreen/Bluescreen";
import {
  defaultLangError,
  langNotFoundError,
} from "@/libs/i18n/translations/errors";

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const cookieStore = await cookies();
  const langVal: string | undefined = cookieStore.get("lang")
    ?.value as LanguageCode;
  const warn = cookieStore.get("warn")?.value;
  const theme = getTheme(
    cookieStore.get("theme")?.value as ThemeType | undefined,
  );

  if (!isSupportedLanguage(lang))
    return <Bluescreen lang={defaultLangError} error={langNotFoundError} />;

  if (!isSupportedLanguage(langVal)) {
    if (langVal !== undefined) {
      return <WrongCookie />;
    }
  }

  if (!warn && isSupportedLanguage(langVal) && langVal !== lang) {
    return <DifCookie val={{ langVal }} />;
  }

  return (
    <>
      <Header initialTheme={theme} langProp={lang} />
      <Load lang={lang} />
      <Footer langProp={lang} />
    </>
  );
}
