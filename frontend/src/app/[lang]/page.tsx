import Load from "@/components/pages/content/Load";
import type { PageProps } from "./types";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ThemeType } from "@/components/header/themeButton/types";
import { cookies } from "next/headers";
import { getTheme, isSupportedLanguage } from "@/libs/cookies/cookieHandler";
import { notFound } from "next/navigation";
import { WrongCookie } from "@/components/dialogs/cookiesDialog/CookieDialog";

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  if (!isSupportedLanguage(lang)) notFound();
  const cookieStore = await cookies();
  const langVal: string | undefined = cookieStore.get("lang")?.value;

  const theme = getTheme(
    cookieStore.get("theme")?.value as ThemeType | undefined,
  );

  if (!isSupportedLanguage(langVal)) {
    return <WrongCookie />;
  } else {
    return (
      <>
        <Header initialTheme={theme} langProp={lang} />
        <Load lang={lang} />
        <Footer langProp={lang} />
      </>
    );
  }
}
