import type { ReactNode } from "react";

export type Props = {
  params: Promise<{
    lang: string;
  }>;
  children: ReactNode;
};
