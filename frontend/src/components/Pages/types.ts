import { pages } from "./pages";

type PageSlug = (typeof pages)[keyof typeof pages][number];
type PageKey = keyof typeof pages;

export type { PageSlug, PageKey };
