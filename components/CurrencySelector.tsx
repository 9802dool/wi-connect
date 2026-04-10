"use client";

import type { CurrencyCode } from "@/lib/currency";
import { CURRENCY_LABELS } from "@/lib/currency";
import { useCurrency } from "@/components/CurrencyProvider";

const OPTIONS: CurrencyCode[] = ["USD", "TTD", "XCD"];

export function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="wi-currency" className="sr-only">
        Currency
      </label>
      <span className="hidden text-slate-500 sm:inline" aria-hidden>
        Currency:
      </span>
      <select
        id="wi-currency"
        value={currency}
        onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
        className="max-w-[min(100%,14rem)] rounded-md border border-slate-300 bg-white px-2 py-1 text-xs font-medium text-wi-navy shadow-sm focus:border-wi-accent focus:outline-none focus:ring-2 focus:ring-wi-accent/30"
      >
        {OPTIONS.map((code) => (
          <option key={code} value={code}>
            {code} — {CURRENCY_LABELS[code]}
          </option>
        ))}
      </select>
    </div>
  );
}
