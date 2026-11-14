"use client";
import { useRef } from "react";
export default function BlueScreen() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  <dialog ref={dialogRef}>
    <p>Teste</p>
  </dialog>;
}
