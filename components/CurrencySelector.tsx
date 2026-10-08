"use client";

import { CURRENCY_CODES, CURRENCY_LABELS, CURRENCY_SYMBOLS, isCurrencyCode } from "@/lib/currency";
import { useCurrency } from "@/components/CurrencyProvider";

type Variant = "light" | "dark";

export function CurrencySelector({ variant = "light" }: { variant?: Variant }) {
  const { currency, setCurrency } = useCurrency();

  const isDark = variant === "dark";

  return (
    <label className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
      <span
        className={`text-[10px] font-semibold uppercase tracking-wide sm:text-xs ${
          isDark ? "text-white/70" : "text-slate-500"
        }`}
      >
        View prices in
      </span>
      <select
        value={currency}
        onChange={(e) => {
          if (isCurrencyCode(e.target.value)) setCurrency(e.target.value);
        }}
        aria-label="Choose currency to view prices"
        title={CURRENCY_LABELS[currency]}
        className={`min-h-[34px] cursor-pointer rounded-lg px-2.5 py-1 text-xs font-bold outline-none transition sm:text-sm ${
          isDark
            ? "bg-black/25 text-white ring-1 ring-white/15 hover:ring-white/30 focus:ring-wi-teal"
            : "bg-white text-wi-navy ring-1 ring-slate-200 hover:ring-slate-300 focus:ring-wi-navy"
        }`}
      >
        {CURRENCY_CODES.map((code) => (
          <option key={code} value={code} title={CURRENCY_LABELS[code]} className="text-wi-navy">
            {code} ({CURRENCY_SYMBOLS[code]})
          </option>
        ))}
      </select>
    </label>
  );
}
