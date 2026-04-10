export function Footer() {
  return (
    <footer id="help" className="scroll-mt-28 border-t border-slate-800 bg-wi-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="font-display text-xl font-bold">
              WI <span className="text-wi-accent">CONNECT</span>
            </p>
            <p className="mt-3 max-w-sm text-sm text-white/70">
              Multinational online marketplace: consumer auctions and fixed-price listings alongside verified
              business sellers — discovery, trust, and checkout in one place.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-white/90">Buy</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>
                <a href="#browse" className="hover:text-wi-accent">
                  All listings
                </a>
              </li>
              <li>
                <a href="#deals" className="hover:text-wi-accent">
                  Daily Deals
                </a>
              </li>
              <li>
                <a href="#auctions" className="hover:text-wi-accent">
                  Auctions
                </a>
              </li>
              <li>
                <span className="cursor-default">Buyer protection</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-white/90">Sell</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>
                <a href="#sell" className="hover:text-wi-accent">
                  List an item
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
            <h4 className="text-xs font-semibold uppercase tracking-wide text-white/90">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>
                <span className="cursor-default">About</span>
              </li>
              <li>
                <span className="cursor-default">Investors</span>
              </li>
              <li>
                <span className="cursor-default">Careers</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-8 text-center text-xs text-white/45">
          © {new Date().getFullYear()} WI CONNECT. Demo marketing experience — not affiliated with any
          third-party marketplace.
        </p>
      </div>
    </footer>
  );
}
