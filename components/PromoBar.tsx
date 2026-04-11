export function PromoBar() {
  return (
    <div className="border-b border-sky-200/60 bg-gradient-to-r from-sky-50 via-cyan-50/80 to-amber-50/50 text-xs text-slate-700">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <span>
          <strong className="text-wi-navy">Ship to:</strong> Worldwide · Use the header to switch USD / TTD / XCD
        </span>
        <div className="flex flex-wrap gap-4">
          <a href="#deals" className="font-medium transition hover:text-wi-ocean">
            Daily Deals
          </a>
          <a href="#business" className="font-medium transition hover:text-wi-ocean">
            Business sellers
          </a>
        </div>
      </div>
      <p className="mx-auto max-w-7xl border-t border-sky-200/50 px-4 py-1.5 text-[10px] text-slate-500 sm:px-6 lg:px-8">
        FX: TTD and XCD amounts are indicative (USD base). TTD rate is approximate; XCD follows the ECCB USD peg.
      </p>
    </div>
  );
}
