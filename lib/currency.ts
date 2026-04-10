/** Supported display currencies (USD base for conversion). */
export type CurrencyCode = "USD" | "TTD" | "XCD";

/** Approximate USD→local rates for demo display (TTD floats; XCD is pegged to USD). */
export const USD_TO: Record<CurrencyCode, number> = {
  USD: 1,
  TTD: 6.78,
  XCD: 2.6882,
};

export const CURRENCY_LABELS: Record<CurrencyCode, string> = {
  USD: "US Dollar",
  TTD: "Trinidad & Tobago Dollar",
  XCD: "Eastern Caribbean Dollar",
};

export function convertFromUsd(usd: number, code: CurrencyCode): number {
  return usd * USD_TO[code];
}

export function formatMoney(amount: number, code: CurrencyCode): string {
  const locales: Record<CurrencyCode, string> = {
    USD: "en-US",
    TTD: "en-TT",
    XCD: "en-KN",
  };
  return new Intl.NumberFormat(locales[code], {
    style: "currency",
    currency: code,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
