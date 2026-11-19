"use client";

import { useRouter } from "next/navigation";
import { clearCookies } from "@/libs/cookies/cookies";
import type { Props } from "./types";

export default function ClearCookies({ label }: Props) {
  const router = useRouter();

  function handleClick() {
    clearCookies("lang");
    router.push("/");
  }

  return (
    <button type="button" onClick={handleClick}>
      {label}
    </button>
  );
}
