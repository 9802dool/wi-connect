import { CurrencySelector } from "@/components/CurrencySelector";

export function PromoBar() {
  return (
    <div className="border-b border-slate-200/80 bg-slate-100 text-xs text-slate-700">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-1.5 sm:px-6 lg:px-8">
        <span>
          <strong className="text-wi-navy">Ship to:</strong> Worldwide · Multi-currency checkout
        </span>
        <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2">
          <div className="flex flex-wrap gap-4">
            <a href="#deals" className="hover:text-wi-blue">
              Daily Deals
            </a>
            <a href="#auctions" className="hover:text-wi-blue">
              Auctions ending
            </a>
            <a href="#business" className="hover:text-wi-blue">
              Business sellers
            </a>
          </div>
          <CurrencySelector />
        </div>
      </div>
      <p className="mx-auto max-w-7xl border-t border-slate-200/80 px-4 py-1 text-[10px] text-slate-500 sm:px-6 lg:px-8">
        FX: TTD and XCD amounts are indicative (USD base). TTD rate is approximate; XCD follows the ECCB USD peg.
      </p>
    </div>
  );
}
