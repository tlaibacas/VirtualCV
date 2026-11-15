import type { LayoutProps } from "./types";
import { cookies } from "next/headers";
import { getTheme } from "@/libs/cookies/cookieHandler";

export default async function Layout({ children, params }: LayoutProps) {
  const { lang } = await params;

  const cookieStore = await cookies();
  const theme = getTheme(cookieStore.get("theme")?.value);

  return (
    <html lang={lang} data-theme={theme}>
      <body>{children}</body>
    </html>
  );
}
