import Link from "next/link";

import { SearchForm } from "@/components/SearchForm";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-wi-navy shadow-md">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
          <div className="flex items-center justify-between gap-4 lg:justify-start">
            <Link href="/" className="font-display shrink-0 text-xl font-bold tracking-tight text-white">
              WI <span className="text-wi-accent">CONNECT</span>
            </Link>
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                className="rounded-md border border-white/25 px-2 py-1 text-xs text-white/90"
                aria-label="Cart"
              >
                Cart
              </button>
              <button
                type="button"
                className="rounded-md bg-wi-accent px-2 py-1 text-xs font-semibold text-wi-navy"
              >
                Sell
              </button>
            </div>
          </div>
          <SearchForm />
          <nav className="hidden flex-wrap items-center justify-end gap-2 text-sm lg:flex">
            <button
              type="button"
              className="rounded-md px-2 py-1.5 text-white/85 hover:bg-white/10 hover:text-white"
            >
              Watch list
            </button>
            <button
              type="button"
              className="rounded-md px-2 py-1.5 text-white/85 hover:bg-white/10 hover:text-white"
            >
              Cart <span className="text-wi-accent">(0)</span>
            </button>
            <button
              type="button"
              className="rounded-md border border-white/25 px-3 py-1.5 text-white hover:bg-white/10"
            >
              My WI CONNECT
            </button>
            <button
              type="button"
              className="rounded-md border border-white/25 px-3 py-1.5 text-white hover:bg-white/10"
            >
              Sign in
            </button>
            <button
              type="button"
              className="rounded-md bg-wi-accent px-3 py-1.5 font-semibold text-wi-navy hover:bg-sky-400"
            >
              Sell
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
