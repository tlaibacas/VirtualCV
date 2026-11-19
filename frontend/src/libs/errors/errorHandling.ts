import { langNotFound } from "@/components/BlueScreen/langNotFound";
import { corruptedCookie } from "@/components/BlueScreen/corruptedCookie";

import { LanguageCode } from "../i18n/locales/countries";
import { errorCommon } from "@/components/BlueScreen/errorCommon";

export const errorData = {
  VCV_NOT_FOUND: { ...langNotFound, ...errorCommon },
  VCV_CORRUPTED_COOKIE: { ...corruptedCookie, ...errorCommon },
} as const;

export type ErrorCode = keyof typeof errorData;

export const langNotFoundError = "VCV_NOT_FOUND" satisfies ErrorCode;
export const corruptedCookieError = "VCV_CORRUPTED_COOKIE" satisfies ErrorCode;
export const defaultLangError = "en" satisfies LanguageCode;
