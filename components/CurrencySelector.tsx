"use client";

import type { CurrencyCode } from "@/lib/currency";
import { CURRENCY_LABELS } from "@/lib/currency";
import { useCurrency } from "@/components/CurrencyProvider";

const OPTIONS: CurrencyCode[] = ["USD", "TTD", "XCD"];

type Variant = "light" | "dark";

export function CurrencySelector({ variant = "light" }: { variant?: Variant }) {
  const { currency, setCurrency } = useCurrency();

  const isDark = variant === "dark";

  return (
    <div
      className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2"
      role="group"
      aria-label="Choose currency to view prices"
    >
      <span
        className={`text-[10px] font-semibold uppercase tracking-wide sm:text-xs ${
          isDark ? "text-white/70" : "text-slate-500"
        }`}
      >
        View prices in
      </span>
      <div
        className={`inline-flex flex-wrap rounded-lg p-0.5 ${
          isDark ? "bg-black/25 ring-1 ring-white/15" : "bg-white ring-1 ring-slate-200"
        }`}
      >
        {OPTIONS.map((code) => {
          const active = currency === code;
          return (
            <button
              key={code}
              type="button"
              onClick={() => setCurrency(code)}
              aria-pressed={active}
              title={CURRENCY_LABELS[code]}
              className={`min-h-[32px] rounded-md px-2.5 py-1 text-xs font-bold transition sm:min-h-[34px] sm:px-3 sm:text-sm ${
                active
                  ? isDark
                    ? "bg-wi-accent text-wi-navy shadow"
                    : "bg-wi-navy text-white shadow-sm"
                  : isDark
                    ? "text-white/90 hover:bg-white/10"
                    : "text-wi-navy hover:bg-slate-100"
              }`}
            >
              <span className="tabular-nums">{code}</span>
              <span className={`ml-1 hidden font-normal sm:inline ${active ? "opacity-90" : "opacity-70"}`}>
                {code === "USD" && "($)"}
                {code === "TTD" && "(TT$)"}
                {code === "XCD" && "(EC$)"}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
