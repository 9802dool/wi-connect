export function Footer() {
  return (
    <footer id="help" className="scroll-mt-24 border-t border-slate-200 bg-wi-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-bold">
              WI <span className="text-wi-accent">CONNECT</span>
            </p>
            <p className="mt-2 text-sm text-white/65">
              A multinational e-commerce marketplace connecting buyers and sellers across C2C and B2C.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/90">Buy</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>
                <a href="#categories" className="hover:text-wi-accent">
                  Categories
                </a>
              </li>
              <li>
                <a href="#featured" className="hover:text-wi-accent">
                  Deals
                </a>
              </li>
              <li>
                <a href="#help" className="hover:text-wi-accent">
                  Buyer protection
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/90">Sell</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>
                <a href="#sell" className="hover:text-wi-accent">
                  Start selling
                </a>
              </li>
              <li>
                <a href="#business" className="hover:text-wi-accent">
                  Business sellers
                </a>
              </li>
              <li>
                <span className="cursor-default">Fees & policies</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/90">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>
                <span className="cursor-default">About WI CONNECT</span>
              </li>
              <li>
                <span className="cursor-default">Careers</span>
              </li>
              <li>
                <span className="cursor-default">Investors</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} WI CONNECT. Demo marketing site — not affiliated with any third-party
          marketplace.
        </p>
      </div>
    </footer>
  );
}
