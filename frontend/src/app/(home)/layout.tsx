import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import {
  metadata as siteMetadata,
  viewport as siteViewport,
} from "@/app/metadata/metadata";
import { redirect } from "next/navigation";
import { getInitialPreferences } from "@/libs/cookies/cookieHandler";
import Header from "@/components/header/Header";
import { cookies } from "next/headers";
import { ThemeType } from "@/components/header/themeButton/types";
import { LanguageCode } from "@/libs/i18n/locales/countries";

export const metadata: Metadata = siteMetadata;
export const viewport: Viewport = siteViewport;

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const val = await cookies();
  const themeVal = val.get("theme")?.value as ThemeType | undefined;
  const languageVal = val.get("lang")?.value as LanguageCode | undefined;
  const preferences = getInitialPreferences(themeVal, languageVal);

  if (preferences.languageVal) {
    redirect(`/${preferences.languageVal}`);
  }

  return (
    <html lang="en" data-theme={preferences.themeVal}>
      <body>
        <Header
          initialTheme={preferences.themeVal}
          langProp={undefined}
          pathProp="/"
        />
        {children}
      </body>
    </html>
  );
}
