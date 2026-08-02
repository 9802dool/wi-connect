"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import type { CurrencyCode } from "@/lib/currency";

const STORAGE_KEY = "wi-connect-currency";

type Ctx = {
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
};

const CurrencyContext = createContext<Ctx | null>(null);

function readStored(): CurrencyCode {
  if (typeof window === "undefined") return "TTD";
  const v = window.localStorage.getItem(STORAGE_KEY);
  if (v === "USD" || v === "TTD" || v === "XCD") return v;
  return "TTD";
}

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("TTD");

  useEffect(() => {
    setCurrencyState(readStored());
  }, []);

  const setCurrency = useCallback((c: CurrencyCode) => {
    setCurrencyState(c);
    try {
      window.localStorage.setItem(STORAGE_KEY, c);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(() => ({ currency, setCurrency }), [currency, setCurrency]);

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency(): Ctx {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    throw new Error("useCurrency must be used within CurrencyProvider");
  }
  return ctx;
}
