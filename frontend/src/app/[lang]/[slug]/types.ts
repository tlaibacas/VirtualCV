import { LanguageCode } from "@/libs/i18n/locales/countries";
import { ComponentType, ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};
type PageProps = {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
};
type PageComponent = ComponentType<{ lang: LanguageCode }>;
export type { LayoutProps, PageProps, PageComponent };
