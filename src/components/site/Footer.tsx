import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-header.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[color:var(--brand-forest)]/20 bg-[color:var(--brand-forest)] text-cream">
      <div className="mx-auto max-w-6xl px-5 py-12 grid gap-8 md:grid-cols-3">
        <div className="flex items-start gap-3">
          <img src={logo} alt="Arcadia Feeder Co. logo — gecko silhouette on green badge" width={56} height={56} className="h-14 w-14 rounded-full ring-1 ring-cream/20 shrink-0" />
          <div>
            <p className="font-serif text-2xl">Arcadia Feeder Co.</p>
            <p className="smallcaps text-xs mt-2 text-cream/70">Humane · Healthy · Ethical · Reptile-loving</p>
          </div>
        </div>
        <p className="font-serif italic text-cream/90 max-w-xs">
          "Every reptile, captive or wild, deserves respect and understanding."
        </p>
        <div className="text-sm space-y-2 text-cream/80">
          <p>Arcadia, CA</p>
          <Link to="/join" className="block hover:text-cream underline-offset-4 hover:underline">Join the list →</Link>
          <Link to="/faq" className="block hover:text-cream underline-offset-4 hover:underline">FAQ</Link>
          <Link to="/reptile-101" className="block hover:text-cream underline-offset-4 hover:underline">Reptile 101</Link>
          <Link to="/club" className="block hover:text-cream underline-offset-4 hover:underline">Reptile Club</Link>
          <a href="https://instagram.com/arcadiafeederco" className="block hover:text-cream underline-offset-4 hover:underline">@arcadiafeederco</a>
          <p className="pt-4 text-xs text-cream/50">© 2026 Arcadia Feeder Co. Made by three middle schoolers.</p>
        </div>
      </div>
    </footer>
  );
}
