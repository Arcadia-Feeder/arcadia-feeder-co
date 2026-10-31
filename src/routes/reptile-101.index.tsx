import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { articles } from "@/data/reptile101";

export const Route = createFileRoute("/reptile-101/")({
  head: () => ({
    meta: [
      { title: "Reptile 101 — Field Notes from the SGV | Arcadia Feeder Co." },
      {
        name: "description",
        content:
          "Honest, kid-narrated field notes about reptiles in the San Gabriel Valley — backyard snakes, fence lizards, beginner pets, and what feeders actually eat.",
      },
      { property: "og:title", content: "Reptile 101 — Field Notes" },
      {
        property: "og:description",
        content:
          "Field notes from three kids in Arcadia who actually keep reptiles and pay attention to what's crawling around the SGV.",
      },
      { property: "og:url", content: "https://arcadiafeeder.com/reptile-101" },
    ],
    links: [{ rel: "canonical", href: "https://arcadiafeeder.com/reptile-101" }],
  }),
  component: Reptile101Index,
});

function Reptile101Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mx-auto max-w-5xl w-full px-5 py-12 md:py-16">
        <span className="smallcaps text-xs text-brown">The Knowledge Corner</span>
        <h1 className="font-serif text-4xl md:text-5xl text-forest mt-2">
          Reptile 101 — Field Notes
        </h1>
        <p className="mt-4 text-charcoal/75 leading-relaxed max-w-2xl">
          Honest field notes from three kids in Arcadia who actually keep reptiles —
          ball pythons, bearded dragons, and an alligator lizard between us. New
          articles weekly.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 mt-10">
          {articles.map((a, i) => (
            <Link
              key={a.slug}
              to="/reptile-101/$slug"
              params={{ slug: a.slug }}
              className="paper-card rounded-2xl p-6 hover:border-[color:var(--brand-forest)]/40 transition"
            >
              <span className="smallcaps text-xs text-brown">
                Field Note №{String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-serif text-2xl text-forest mt-2 leading-snug">
                {a.title}
              </h2>
              <p className="mt-3 text-charcoal/80 leading-relaxed line-clamp-3">
                {a.short}
              </p>
              <span className="text-sm text-forest mt-4 inline-block">
                Read article →
              </span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
