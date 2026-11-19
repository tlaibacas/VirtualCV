import { notFound } from "@/components/bluescreen/notFound";

export const errorData = {
  notFound,
} as const;

export type ErrorCode = keyof typeof errorData;

export const notFoundError = "notFound" satisfies ErrorCode;
