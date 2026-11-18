export type TranslationTree<T> = {
  [K in keyof T]: T[K] extends readonly string[]
    ? T[K][number]
    : TranslationTree<T[K]>;
};
