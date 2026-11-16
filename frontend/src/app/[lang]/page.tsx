import Load from "@/components/pages/content/Load";
import type { PageProps } from "./types";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ThemeType } from "@/components/header/themeButton/types";
import { cookies } from "next/headers";
import { getTheme, isSupportedLanguage } from "@/libs/cookies/cookieHandler";
import { notFound } from "next/navigation";
import {
  DifCookie,
  WrongCookie,
} from "@/components/dialogs/cookiesDialog/CookieDialog";
import { LanguageCode } from "@/libs/i18n/locales/countries";

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  if (!isSupportedLanguage(lang)) notFound();
  const cookieStore = await cookies();
  const langVal: string | undefined = cookieStore.get("lang")
    ?.value as LanguageCode;
  const warn = cookieStore.get("warn")?.value;
  const theme = getTheme(
    cookieStore.get("theme")?.value as ThemeType | undefined,
  );

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
