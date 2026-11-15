import { notFound } from "next/navigation";
import { isSupportedLanguage } from "@/libs/cookies/cookieHandler";
import type { LayoutProps } from "./types";

export default async function Layout({ children, params }: LayoutProps) {
  const { lang } = await params;

  if (!isSupportedLanguage(lang)) notFound();

  return children;
}
