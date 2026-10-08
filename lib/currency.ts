/** Supported display currencies (TTD base for Trinidad marketplace). */
export const CURRENCY_CODES = ["TTD", "USD", "XCD", "BBD", "GYD", "JMD"] as const;

export type CurrencyCode = (typeof CURRENCY_CODES)[number];

/** Approximate USD→local rates for demo display (TTD, GYD and JMD float; XCD and BBD are pegged to USD). */
export const USD_TO: Record<CurrencyCode, number> = {
  USD: 1,
  TTD: 6.78,
  XCD: 2.7,
  BBD: 2,
  GYD: 209.5,
  JMD: 157,
};

export const CURRENCY_LABELS: Record<CurrencyCode, string> = {
  USD: "US Dollar",
  TTD: "Trinidad & Tobago Dollar",
  XCD: "Eastern Caribbean Dollar",
  BBD: "Barbados Dollar",
  GYD: "Guyana Dollar",
  JMD: "Jamaica Dollar",
};

/** Every currency here is a "dollar", so each needs a distinct prefix rather than a bare "$". */
export const CURRENCY_SYMBOLS: Record<CurrencyCode, string> = {
  USD: "US$",
  TTD: "TT$",
  XCD: "EC$",
  BBD: "Bds$",
  GYD: "G$",
  JMD: "J$",
};

export function isCurrencyCode(value: unknown): value is CurrencyCode {
  return typeof value === "string" && (CURRENCY_CODES as readonly string[]).includes(value);
}

export function convertFromUsd(usd: number, code: CurrencyCode): number {
  return usd * USD_TO[code];
}

export function convertFromTtd(ttd: number, code: CurrencyCode): number {
  if (code === "TTD") return ttd;
  const usd = ttd / USD_TO.TTD;
  return usd * USD_TO[code];
}

const amountFormat = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatMoney(amount: number, code: CurrencyCode): string {
  return `${CURRENCY_SYMBOLS[code]}${amountFormat.format(amount)}`;
}
