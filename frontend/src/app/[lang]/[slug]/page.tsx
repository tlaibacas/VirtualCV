import type { PageProps } from "./types";

export default async function Page({ params }: PageProps) {
  const { lang, slug } = await params;

  return (
    <p>
      {lang}, {slug}
    </p>
  );
}
