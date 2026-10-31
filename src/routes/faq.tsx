import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { faqSections, allFAQs } from "@/data/faq";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Pickup, Delivery & Orders | Arcadia Feeder Co." },
      {
        name: "description",
        content:
          "How pickup and delivery work, what we sell, payment, subscriptions, AUSD school drop-offs, and live arrival guarantees. Locally bred Dubia roaches, superworms, hornworms in the San Gabriel Valley.",
      },
      { property: "og:title", content: "FAQ — Arcadia Feeder Co." },
      {
        property: "og:description",
        content:
          "Pickup, AUSD school drop-offs, subscription details, payment, and live arrival guarantees.",
      },
      { property: "og:url", content: "https://arcadiafeeder.com/faq" },
    ],
    links: [{ rel: "canonical", href: "https://arcadiafeeder.com/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: allFAQs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mx-auto max-w-4xl w-full px-5 py-12 md:py-16">
        <span className="smallcaps text-xs text-brown">Field Manual</span>
        <h1 className="font-serif text-4xl md:text-5xl text-forest mt-2">
          Frequently asked questions
        </h1>
        <p className="mt-4 text-charcoal/75 leading-relaxed max-w-2xl">
          Everything you'd want to know before joining the list — pickup, delivery,
          subscriptions, payment, and how three middle schoolers actually run a
          feeder business.
        </p>

        <nav aria-label="FAQ sections" className="mt-8 flex flex-wrap gap-2">
          {faqSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-[color:var(--brand-forest)]/25 bg-cream/70 text-forest px-4 py-1.5 text-sm hover:bg-cream transition"
            >
              {s.title}
            </a>
          ))}
        </nav>

        <div className="mt-12 space-y-12">
          {faqSections.map((section, sIdx) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <span className="smallcaps text-xs text-brown">
                Chapter {String(sIdx + 1).padStart(2, "0")}
              </span>
              <h2 className="font-serif text-3xl text-forest mt-1">{section.title}</h2>
              <div className="mt-6 space-y-4">
                {section.items.map((item, i) => (
                  <article
                    key={i}
                    className="paper-card rounded-2xl p-6"
                  >
                    <h3 className="font-serif text-xl text-forest leading-snug">
                      {item.q}
                    </h3>
                    <p className="mt-3 text-charcoal/85 leading-relaxed">{item.a}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 paper-card rounded-2xl p-8 text-center">
          <h2 className="font-serif text-2xl text-forest">Still have a question?</h2>
          <p className="mt-3 text-charcoal/80">
            Join the list and tell us. We read every message.
          </p>
          <Link
            to="/join"
            className="inline-block mt-5 rounded-full bg-forest text-cream px-6 py-3 font-medium hover:bg-[color:var(--brand-forest)]/90"
          >
            Get on Our List →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
