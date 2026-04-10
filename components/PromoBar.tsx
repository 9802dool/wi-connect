export function PromoBar() {
  return (
    <div className="border-b border-slate-200/80 bg-slate-100 text-xs text-slate-700">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 sm:px-6 lg:px-8">
        <span>
          <strong className="text-wi-navy">Ship to:</strong> Worldwide · Multi-currency checkout
        </span>
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
      </div>
    </div>
  );
}
