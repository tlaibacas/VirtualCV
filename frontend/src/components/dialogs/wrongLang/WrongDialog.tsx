import { useRef } from "react";
import type { Props } from "./types";
export default function WrongLang({ val }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <dialog>
      <p>teste </p>
    </dialog>
  );
}
