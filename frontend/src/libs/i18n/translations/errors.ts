import { langNotFound } from "@/components/BlueScreen/langNotFound";
import { LanguageCode } from "../locales/countries";

export const errorData = {
  langNotFound,
} as const;

export type ErrorCode = keyof typeof errorData;

export const langNotFoundError = "langNotFound" satisfies ErrorCode;
export const defaultLangError = "en" satisfies LanguageCode;
