import Load from "@/components/pages/content/Load";
import type { PageProps } from "./types";

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  return <Load lang={lang} />;
}
