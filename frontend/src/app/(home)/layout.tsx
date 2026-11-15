import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { cookies } from "next/headers";

import "./globals.css";

import {
  metadata as siteMetadata,
  viewport as siteViewport,
} from "@/app/metadata/metadata";

import { getTheme } from "@/libs/cookies/cookieHandler";

export const metadata: Metadata = siteMetadata;
export const viewport: Viewport = siteViewport;

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();
  const theme = getTheme(cookieStore.get("theme")?.value);

  return (
    <html lang="en" data-theme={theme}>
      <body>{children}</body>
    </html>
  );
}
