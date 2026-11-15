import Load from "@/components/pages/content/Load";
import type { PageProps } from "./types";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  return (
    <>
      <Header />
      <Load lang={lang} />
      <Footer langProp={lang} />
    </>
  );
}
