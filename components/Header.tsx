import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-wi-navy/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-xl font-bold tracking-tight text-white">
          WI <span className="text-wi-accent">CONNECT</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-white/85">
          <a href="#categories" className="hover:text-wi-accent">
            Shop
          </a>
          <a href="#sell" className="hover:text-wi-accent">
            Sell
          </a>
          <a href="#business" className="hover:text-wi-accent">
            Business
          </a>
          <a href="#help" className="hover:text-wi-accent">
            Help
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-lg border border-white/20 px-3 py-1.5 text-sm text-white hover:bg-white/10"
          >
            Sign in
          </button>
          <button
            type="button"
            className="rounded-lg bg-wi-accent px-3 py-1.5 text-sm font-medium text-wi-navy hover:bg-sky-400"
          >
            Register
          </button>
        </div>
      </div>
    </header>
  );
}
