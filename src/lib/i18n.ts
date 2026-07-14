export type Locale = "ar" | "en";

export const isLocale = (value: string): value is Locale => value === "ar" || value === "en";

export const localizedPath = (locale: Locale, path = "") => {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return locale === "ar" ? clean || "/" : `/en${clean}`;
};

export const oppositeLocale = (locale: Locale): Locale => (locale === "ar" ? "en" : "ar");
