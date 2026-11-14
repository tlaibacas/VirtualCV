import type { Props } from "./types";
export default async function Page({ params }: Props) {
  const { lang, slug } = await params;

  return (
    <main>
      <h1>
        Page: {slug}, with lang: {lang}
      </h1>
    </main>
  );
}
