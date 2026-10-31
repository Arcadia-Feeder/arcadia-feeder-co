import { Link, createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingGecko } from "@/components/site/FloatingGecko";
import { Reptile101Cards } from "@/components/site/Reptile101Cards";
import logo from "@/assets/logo.png";
import avatarEd from "@/assets/avatar-ed.png";
import avatarRyan from "@/assets/avatar-ryan.png";
import avatarMaxyne from "@/assets/avatar-maxyne.png";
import { useState } from "react";

const productSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Dubia Roaches",
      description:
        "Locally bred Dubia roaches gut-loaded daily on fresh produce. Available in small, medium, and large sizes.",
      brand: { "@type": "Brand", name: "Arcadia Feeder Co." },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        price: "10",
      },
    },
    {
      "@type": "Product",
      name: "Superworms",
      description:
        "High-protein superworms for bearded dragons and other reptiles. 25/50/100 ct cups, bulk bags available.",
      brand: { "@type": "Brand", name: "Arcadia Feeder Co." },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        price: "10",
      },
    },
    {
      "@type": "Product",
      name: "Hornworms",
      description:
        "Hydrating, high-calcium hornworms. Perfect for picky eaters, chameleons, and bearded dragons.",
      brand: { "@type": "Brand", name: "Arcadia Feeder Co." },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        price: "12",
      },
    },
    {
      "@type": "Product",
      name: "Arcadia Calcium Care Kit",
      description:
        "Food-grade USP/FCC precipitated calcium carbonate for dusting feeders. Free with subscriptions, $5 add-on for one-off orders.",
      brand: { "@type": "Brand", name: "Arcadia Feeder Co." },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        price: "5",
      },
    },
    {
      "@type": "Product",
      name: "The Feeder Crate — Starter",
      description: "Weekly subscription: one feeder size, free Calcium Care Kit included.",
      brand: { "@type": "Brand", name: "Arcadia Feeder Co." },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        price: "22",
      },
    },
    {
      "@type": "Product",
      name: "The Feeder Crate — Standard",
      description: "Weekly subscription: two sizes plus variety, free Calcium Care Kit included.",
      brand: { "@type": "Brand", name: "Arcadia Feeder Co." },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        price: "38",
      },
    },
    {
      "@type": "Product",
      name: "The Feeder Crate — Family",
      description: "Weekly subscription for multi-reptile households, free Calcium Care Kit included.",
      brand: { "@type": "Brand", name: "Arcadia Feeder Co." },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        price: "68",
      },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arcadia Feeder Co. — Locally Bred Dubia, Superworms & Hornworms in Arcadia, CA" },
      {
        name: "description",
        content:
          "Three middle-school co-founders in Arcadia raising the cleanest live reptile feeders in the San Gabriel Valley. Same-day pickup, no shipping stress, free Calcium Care Kit with every subscription.",
      },
      { property: "og:title", content: "Arcadia Feeder Co." },
      {
        property: "og:description",
        content: "Locally bred reptile feeders. Same-day Arcadia pickup. No shipping stress.",
      },
      { property: "og:url", content: "https://arcadiafeeder.com" },
    ],
    links: [{ rel: "canonical", href: "https://arcadiafeeder.com/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(productSchema) },
    ],
  }),
  component: Index,
});

const founders = [
  {
    name: "Ed",
    age: 12,
    role: "Runs the colonies. Decides what the bugs eat and when they're ready to sell.",
    color: "var(--brand-forest)",
    avatar: avatarEd,
  },
  {
    name: "Ryan",
    age: 11,
    role: "Keeps everything clean, walks the neighborhood spreading the word, takes most of our photos.",
    color: "var(--brand-brown)",
    avatar: avatarRyan,
  },
  {
    name: "Maxyne",
    age: 12,
    role: "Runs the money side, talks to customers, and grows the hornworms.",
    color: "var(--brand-sage)",
    avatar: avatarMaxyne,
  },
];

const products = [
  {
    name: "Dubia Roaches",
    tag: "The staple",
    desc: "Quiet, clean, can't climb glass. Gut-loaded daily on fresh produce. Small, medium, large.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="32" cy="34" rx="18" ry="22" />
        <path d="M14 28h36M14 38h36M22 14l-4-6M42 14l4-6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Superworms",
    tag: "High-protein treat",
    desc: "Bearded dragons go absolutely nuts for these. Lively, meaty, satisfying crunch.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 32c4 0 4-6 8-6s4 6 8 6 4-6 8-6 4 6 8 6 4-6 8-6 4 6 8 6" strokeLinecap="round" />
        <circle cx="56" cy="30" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Hornworms",
    tag: "The premium one",
    desc: "Bright blue-green, super hydrating. Perfect for picky eaters and chameleons.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 36c6-6 14-6 20 0s14 6 20 0c4-4 4-10 0-14" strokeLinecap="round" />
        <path d="M50 22l-2-6M50 22l4-4" strokeLinecap="round" />
      </svg>
    ),
  },
];

const tiers = [
  { name: "Starter", price: "$22", details: "1 size · weekly" },
  { name: "Standard", price: "$38", details: "2 sizes + variety · weekly" },
  { name: "Family", price: "$68", details: "Multi-reptile household · weekly" },
];

const milestones = [
  { done: true, date: "March 2026", text: "Three kids, $600 in piggy bank money, one big idea." },
  { done: false, date: "Soon", text: "First Dubia colony stable for 14 days." },
  { done: false, date: "Soon", text: "First customer." },
  { done: false, date: "Soon", text: "First $100 revenue month." },
  { done: false, date: "Soon", text: "First Feeder Crate subscriber." },
  { done: false, date: "Someday", text: "Booth at our first reptile expo." },
];

function FounderAvatar({ color, src, name }: { color: string; src: string; name: string }) {
  return (
    <div
      className="h-24 w-24 rounded-full overflow-hidden flex items-center justify-center"
      style={{ background: `color-mix(in oklab, ${color} 18%, var(--brand-cream))`, border: `2px solid ${color}` }}
    >
      <img src={src} alt={`${name} cartoon portrait`} width={96} height={96} loading="lazy" className="h-full w-full object-cover" />
    </div>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.includes("@")) setDone(true);
      }}
      className="flex flex-col gap-2 mt-4"
    >
      <input
        type="email"
        required
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-full border border-cream/30 bg-cream/95 px-5 py-3 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-cream/60"
      />
      <button className="w-full rounded-full bg-cream text-[color:var(--brand-brown)] px-5 py-3 font-medium hover:bg-cream/90 transition">
        {done ? "Thanks! ✓" : "Subscribe →"}
      </button>
    </form>
  );
}

function Index() {
  return (
    <div className="min-h-screen text-charcoal">
      <Header />
      <FloatingGecko />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
          <Reveal>
            <span className="smallcaps text-xs text-brown">Est. 2026 · Arcadia, CA</span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] mt-3 text-forest">
              We're three middle schoolers raising the cleanest feeders in the SGV.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-charcoal/80 max-w-xl leading-relaxed">
              Locally bred. Fed on fresh fruits and vegetables. Same-day pickup in Arcadia.
              No shipping stress because we live here too.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/join" className="rounded-full bg-forest text-cream px-6 py-3 font-medium hover:bg-[color:var(--brand-forest)]/90 transition shadow-sm">
                Get on Our List →
              </Link>
              <a href="#reptile101" className="rounded-full border border-[color:var(--brand-forest)]/30 bg-cream/60 text-forest px-6 py-3 font-medium hover:bg-cream transition">
                Read Reptile 101
              </a>
            </div>
          </Reveal>
          <Reveal delay={150} className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-full blur-3xl opacity-50" style={{ background: "radial-gradient(circle, var(--brand-sage), transparent 70%)" }} />
              <img src={logo} alt="Arcadia Feeder Co. badge — gecko silhouette on a forest-green circle" width={420} height={420} className="w-72 md:w-[26rem] drop-shadow-xl" />
            </div>
          </Reveal>
        </div>
        <div className="ink-divider mx-auto max-w-5xl" />
      </section>

      {/* WHO */}
      <section id="who" className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <span className="smallcaps text-xs text-brown">Chapter One</span>
          <h2 className="font-serif text-4xl md:text-5xl text-forest mt-2">Who we are</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 100}>
              <article className="paper-card rounded-2xl p-6 h-full flex flex-col gap-4">
                <div className="flex flex-col items-center text-center gap-3">
                  <FounderAvatar color={f.color} src={f.avatar} name={f.name} />
                  <h3 className="font-serif text-2xl text-forest">{f.name} <span className="text-base text-brown font-sans">({f.age})</span></h3>
                </div>
                <p className="text-charcoal/80 leading-relaxed">{f.role}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="paper-card rounded-2xl p-8 mt-10">
            <span className="smallcaps text-xs text-brown">How it started</span>
            <p className="mt-3 text-charcoal/80 leading-relaxed">
              When the local pet store that sold feeders closed, the only option left was ordering online. That meant huge bulk quantities our reptiles couldn't eat fast enough, shipping delays, and bugs that arrived stressed — or dead. Our parents weren't about to drive 45 minutes for a cup of roaches either.
            </p>
            <p className="mt-4 text-charcoal/80 leading-relaxed">
              We have ball pythons, bearded dragons, and an alligator lizard between us. They eat. A lot.
            </p>
            <p className="mt-4 text-charcoal/80 leading-relaxed">
              But honestly, the missing thing wasn't just the feeders. It was the <em>people</em>. The local store was where reptile keepers actually met each other and traded notes. You can't get that from a cardboard box on your doorstep.
            </p>
            <p className="mt-4 text-charcoal/80 leading-relaxed">
              So we pooled our piggy banks — <em>$200 each</em> — and decided to bring it all back ourselves.
            </p>
          </div>
        </Reveal>
      </section>

      {/* OFFER */}
      <section id="offer" className="bg-[color:var(--brand-forest)] text-cream py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <span className="smallcaps text-xs text-cream/60">Chapter Two</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-2">What we offer</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {products.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <article className="rounded-2xl p-6 h-full bg-cream/5 border border-cream/15 backdrop-blur-sm">
                  <div className="text-cream">{p.icon}</div>
                  <span className="smallcaps text-xs text-cream/60 mt-4 block">{p.tag}</span>
                  <h3 className="font-serif text-2xl mt-1">{p.name}</h3>
                  <p className="mt-3 text-cream/80 leading-relaxed">{p.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 rounded-2xl bg-cream text-charcoal p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
              <div>
                <span className="smallcaps text-xs text-brown">Add-on</span>
                <h3 className="font-serif text-2xl text-forest mt-1">Arcadia Calcium Care Kit</h3>
                <p className="text-charcoal/80 mt-1">Food-grade calcium carbonate for dusting feeders. Free with subscriptions, $5 add-on for one-off orders.</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-12">
              <h3 className="font-serif text-3xl">Subscribe to The Feeder Crate</h3>
              <p className="text-cream/70 mt-2 max-w-xl">Each tier includes a free Calcium Care Kit. Pause anytime — we're flexible.</p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                {tiers.map((t) => (
                  <div key={t.name} className="rounded-2xl bg-cream/10 border border-cream/20 p-6">
                    <h4 className="font-serif text-2xl">{t.name}</h4>
                    <p className="font-serif text-4xl mt-2">{t.price}<span className="text-base text-cream/60">/wk</span></p>
                    <p className="text-sm text-cream/70 mt-2">{t.details}</p>
                    <p className="text-xs text-cream/60 mt-4">+ free Calcium Care Kit</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-cream/70 italic">
                We don't do online checkout yet — just join our list and we'll arrange pickup in Arcadia.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* REPTILE 101 */}
      <section id="reptile101" className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <span className="smallcaps text-xs text-brown">Chapter Three</span>
          <h2 className="font-serif text-4xl md:text-5xl text-forest mt-2">Reptile 101 — The Knowledge Corner</h2>
          <p className="text-charcoal/70 mt-3 max-w-2xl">Tap a card to flip it. Field notes from three kids who actually pay attention to what's crawling around the SGV.</p>
        </Reveal>
        <div className="mt-10">
          <Reptile101Cards />
        </div>
        <Reveal>
          <div className="mt-8 rounded-full bg-[color:var(--brand-sage)]/25 px-6 py-3 inline-block text-sm text-forest">
            📬 More articles coming every week in our newsletter.
          </div>
        </Reveal>
      </section>

      {/* REPTILE CLUB */}
      <section id="club" className="bg-[color:var(--brand-cream)] py-20 border-y border-[color:var(--brand-forest)]/10">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <span className="smallcaps text-xs text-brown">Chapter Four</span>
            <h2 className="font-serif text-4xl md:text-5xl text-forest mt-2">The Reptile Club</h2>
            <p className="mt-4 text-lg text-charcoal/80 max-w-2xl leading-relaxed">
              A free monthly club for kids who think reptiles are cool — whether you have one or not. Open to any student at a nearby school.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                tag: "What we do",
                title: "Show-and-tell + hands-on",
                desc: "Show-and-tell with a member's reptile, a \"Reptile of the Month\" short presentation, and hands-on activities (SGV species ID, owl pellet dissection, bioactive setups).",
              },
              {
                tag: "When & where",
                title: "Saturdays, ~90 min",
                desc: "Monthly meetings on Saturdays, around 90 minutes. Could be virtual or at a public park. We're working toward an official school sponsorship in Year 2.",
              },
              {
                tag: "Who can join",
                title: "Any nearby student",
                desc: "Any student actively enrolled at a nearby school — elementary, middle, or high school. You don't need to own a reptile. You just need to be curious and respectful — of the animals and of each other.",
              },
            ].map((c, i) => (
              <Reveal key={c.tag} delay={i * 100}>
                <article className="paper-card rounded-2xl p-6 h-full">
                  <span className="smallcaps text-xs text-brown">{c.tag}</span>
                  <h3 className="font-serif text-2xl text-forest mt-1">{c.title}</h3>
                  <p className="mt-3 text-charcoal/80 leading-relaxed">{c.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="mt-10 rounded-2xl bg-[color:var(--brand-forest)] text-cream p-8 md:p-10 text-center max-w-3xl mx-auto">
              <div className="mx-auto h-14 w-14 rounded-full bg-cream/15 border border-cream/30 flex items-center justify-center text-2xl">🦎</div>
              <span className="smallcaps text-xs text-cream/70 mt-4 block">Limited</span>
              <h3 className="font-serif text-3xl mt-1">Founding Members</h3>
              <p className="mt-3 text-cream/85 leading-relaxed max-w-xl mx-auto">
                First 10 members get a Founding Member patch and lifetime club status. We're still kids — the first 10 of you actually shape what this becomes.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex flex-col items-center text-center">
              <Link to="/club" className="rounded-full bg-forest text-cream px-7 py-3.5 font-medium hover:bg-[color:var(--brand-forest)]/90 transition shadow-sm">
                Join the Reptile Club →
              </Link>
              <p className="mt-4 text-sm italic text-charcoal/65 max-w-xl">
                Sponsored by Arcadia Feeder Co. but run by and for kids. The club isn't about selling feeders — it's about loving reptiles.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="bg-[color:var(--brand-sage)]/15 py-20">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <span className="smallcaps text-xs text-brown">Chapter Five</span>
            <h2 className="font-serif text-4xl md:text-5xl text-forest mt-2">Our journey</h2>
          </Reveal>
          <ol className="mt-10 relative border-l-2 border-[color:var(--brand-forest)]/25 pl-8 space-y-6">
            {milestones.map((m, i) => (
              <Reveal key={i} delay={i * 80}>
                <li className="relative">
                  <span
                    className={`absolute -left-[42px] top-1 w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                      m.done ? "bg-forest text-cream" : "bg-cream border-2 border-dashed border-[color:var(--brand-forest)]/40 text-[color:var(--brand-forest)]/50"
                    }`}
                  >
                    {m.done ? "✓" : "·"}
                  </span>
                  <span className="smallcaps text-xs text-brown">{m.date}</span>
                  <p className="font-serif text-lg text-charcoal mt-1">{m.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal>
            <p className="mt-10 text-sm italic text-charcoal/70 max-w-xl">
              Follow our story as we figure this out in public. We share the wins AND the hard parts —
              including the hatchling tortoise we lost at month 2.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT'S NEXT */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <span className="smallcaps text-xs text-brown">Chapter Six</span>
          <h2 className="font-serif text-4xl md:text-5xl text-forest mt-2">What's next</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <Reveal>
            <div className="paper-card rounded-2xl p-8 h-full">
              <h3 className="font-serif text-2xl text-forest">Year 1 Goals</h3>
              <ul className="mt-4 space-y-2 text-charcoal/85">
                <li>· 50+ customers</li>
                <li>· 20+ subscribers</li>
                <li>· Weekly newsletter</li>
                <li>· First profitable month</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="paper-card rounded-2xl p-8 h-full">
              <h3 className="font-serif text-2xl text-forest">Year 2 Dreams</h3>
              <ul className="mt-4 space-y-2 text-charcoal/85">
                <li>· Add isopods</li>
                <li>· Attend a reptile expo with our own booth</li>
                <li>· Close the hornworm breeding loop</li>
                <li>· Convert to LLC</li>
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <p className="mt-10 font-serif text-xl text-center text-forest italic">
            We're in it for the long run. We made a 12-month minimum commitment to each other.
          </p>
        </Reveal>
      </section>

      {/* FOLLOW */}
      <section id="follow" className="bg-[color:var(--brand-brown)] text-cream py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <span className="smallcaps text-xs text-cream/60">Chapter Seven</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-2">Follow us</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <Reveal>
              <a href="https://instagram.com/arcadiafeederco" className="block rounded-2xl bg-cream/10 border border-cream/20 p-6 hover:bg-cream/15 transition">
                <span className="smallcaps text-xs text-cream/60">Instagram</span>
                <p className="font-serif text-2xl mt-1">@arcadiafeederco</p>
                <p className="text-sm text-cream/70 mt-2">Photos, colony updates, weird bug close-ups.</p>
              </a>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl bg-cream/10 border border-cream/20 p-6">
                <span className="smallcaps text-xs text-cream/60">Newsletter</span>
                <p className="font-serif text-2xl mt-1">From the Colony</p>
                <p className="text-sm text-cream/70 mt-1">Weekly. Free. No spam.</p>
                <Newsletter />
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="rounded-2xl bg-cream text-charcoal p-6 border-2 border-cream/20">
                <span className="smallcaps text-xs text-brown">For AUSD students</span>
                <p className="font-serif text-2xl mt-1 text-forest">Go to an AUSD school?</p>
                <p className="text-sm text-charcoal/80 mt-2">Have a reptile? We especially want to meet you. Join our list and tell us your school.</p>
                <Link to="/join" className="inline-block mt-4 rounded-full bg-forest text-cream px-5 py-2 text-sm font-medium hover:bg-[color:var(--brand-forest)]/90">
                  Tell us about your reptile →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
