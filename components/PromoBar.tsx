export function PromoBar() {
  return (
    <div className="border-b border-sky-200/60 bg-gradient-to-r from-sky-50 via-cyan-50/80 to-amber-50/50 text-xs text-slate-700">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <span>
          <strong className="text-wi-navy">Ship to:</strong> Trinidad &amp; Tobago · All prices in TTD
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
    </div>
  );
}
