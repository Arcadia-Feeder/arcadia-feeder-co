import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-header.png";

const nav = [
  { href: "/#who", label: "Our Story" },
  { href: "/#offer", label: "Feeders" },
  { href: "/#reptile101", label: "Reptile 101" },
  { href: "/#club", label: "Reptile Club" },
  { href: "/faq", label: "FAQ" },
  { href: "/#journey", label: "Journey" },
  { href: "/#follow", label: "Follow" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-[color:var(--brand-forest)]/95 border-b border-[color:var(--brand-forest)]/40 text-cream">
      <div className="mx-auto max-w-6xl px-5 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="Arcadia Feeder Co. logo — gecko silhouette on green badge" width={44} height={44} className="h-11 w-11 rounded-full ring-1 ring-cream/20" />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-serif text-base font-semibold text-cream">Arcadia Feeder Co.</span>
            <span className="smallcaps text-[10px] text-cream/70">Est. 2026 · Arcadia, CA</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-cream/80 hover:text-cream transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/join"
            className="inline-flex items-center rounded-full bg-cream text-forest px-4 py-2 text-sm font-medium hover:bg-cream/90 transition-colors"
            onClick={() => setOpen(false)}
          >
            Get on Our List
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full text-cream hover:bg-cream/10 transition-colors"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden border-t border-cream/15 bg-[color:var(--brand-forest)]/98 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-5 py-3 flex flex-col">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-cream/90 hover:text-cream border-b border-cream/10 last:border-b-0 text-sm"
              >
                {n.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
