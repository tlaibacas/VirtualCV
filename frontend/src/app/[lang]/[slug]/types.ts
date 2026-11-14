import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};
type PageProps = {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
};

export type { LayoutProps, PageProps };
