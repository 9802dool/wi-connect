import Image from "next/image";
import Link from "next/link";

import { CurrencySelector } from "@/components/CurrencySelector";
import { SearchForm } from "@/components/SearchForm";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-wi-navy shadow-md">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
          <div className="flex items-center justify-between gap-4 lg:justify-start">
            <Link
              href="/"
              className="relative block h-8 w-[min(200px,55vw)] shrink-0 sm:h-9 sm:w-[180px]"
            >
              <Image
                src="/logo.png"
                alt="WI CONNECT"
                fill
                className="object-contain object-left"
                priority
                sizes="(max-width: 640px) 55vw, 180px"
              />
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
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-end lg:ml-auto lg:max-w-none lg:flex-1 lg:gap-4">
            <CurrencySelector variant="dark" />
            <nav className="flex flex-wrap items-center justify-end gap-2 text-sm">
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
      </div>
    </header>
  );
}
