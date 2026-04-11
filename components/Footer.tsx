import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="help" className="scroll-mt-28 border-t border-white/10 bg-gradient-to-b from-wi-navy to-[#061f33] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="relative mb-4 block h-16 w-56 sm:h-[4.5rem] sm:w-64 lg:h-20 lg:w-72">
              <Image
                src="/logo.png"
                alt="WI CONNECT"
                fill
                className="object-contain object-left drop-shadow-lg"
                sizes="(max-width: 640px) 224px, 288px"
              />
            </Link>
            <p className="mt-3 max-w-sm text-sm text-white/70">
              Multinational online marketplace: fixed-price and offer-based listings alongside verified business
              sellers — discovery, trust, and checkout in one place.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-white/90">Buy</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>
                <a href="#browse" className="transition hover:text-wi-teal">
                  All listings
                </a>
              </li>
              <li>
                <a href="#deals" className="transition hover:text-wi-teal">
                  Daily Deals
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
                <a href="#sell" className="transition hover:text-wi-teal">
                  List an item
                </a>
              </li>
              <li>
                <a href="#business" className="transition hover:text-wi-teal">
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
