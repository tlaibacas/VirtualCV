import { LanguageCode } from "@/libs/i18n/locales/countries";
import type { ReactNode } from "react";

type PageProps = {
  params: Promise<{
    lang: LanguageCode;
  }>;
  children: ReactNode;
};

type LayoutProps = {
  params: Promise<{
    lang: string;
  }>;
  children: ReactNode;
};

export type { LayoutProps, PageProps };
