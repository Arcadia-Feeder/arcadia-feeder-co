import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { articleBySlug, articles } from "@/data/reptile101";

export const Route = createFileRoute("/reptile-101/$slug")({
  loader: ({ params }) => {
    const article = articleBySlug(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    if (!a) return { meta: [{ title: "Article not found — Arcadia Feeder Co." }] };
    const url = `https://arcadiafeeder.com/reptile-101/${a.slug}`;
    return {
      meta: [
        { title: `${a.title} | Reptile 101 — Arcadia Feeder Co.` },
        { name: "description", content: a.description },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.title,
            description: a.description,
            author: {
              "@type": "Organization",
              name: "Arcadia Feeder Co. (Ed, Ryan, Maxyne)",
              url: "https://arcadiafeeder.com",
            },
            publisher: {
              "@type": "Organization",
              name: "Arcadia Feeder Co.",
              logo: {
                "@type": "ImageObject",
                url: "https://arcadiafeeder.com/favicon.png",
              },
            },
            mainEntityOfPage: url,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-5 py-20 text-center">
        <div>
          <h1 className="font-serif text-3xl text-forest">Article not found</h1>
          <Link to="/reptile-101" className="mt-6 inline-block rounded-full bg-forest text-cream px-6 py-3">
            Back to Reptile 101
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center px-5">
      <p className="text-charcoal/70">{error.message}</p>
    </div>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const idx = articles.findIndex((x) => x.slug === article.slug);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mx-auto max-w-3xl w-full px-5 py-12 md:py-16">
        <Link to="/reptile-101" className="text-sm text-forest hover:underline">
          ← Back to Reptile 101
        </Link>
        <span className="smallcaps text-xs text-brown mt-6 block">
          Field Note №{String(idx + 1).padStart(2, "0")}
        </span>
        <h1 className="font-serif text-4xl md:text-5xl text-forest mt-2 leading-tight">
          {article.title}
        </h1>
        <p className="mt-4 text-sm text-charcoal/60">
          By Arcadia Feeder Co. — Ed, Ryan & Maxyne
        </p>

        <article className="mt-8 space-y-5 text-lg text-charcoal/85 leading-relaxed">
          {article.body.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
        </article>

        <div className="mt-12 paper-card rounded-2xl p-6 text-center">
          <p className="font-serif italic text-forest">
            We share notes like these in our newsletter every week.
          </p>
          <Link
            to="/join"
            className="inline-block mt-4 rounded-full bg-forest text-cream px-6 py-3 font-medium hover:bg-[color:var(--brand-forest)]/90"
          >
            Get on Our List →
          </Link>
        </div>

        <div className="mt-12 border-t border-[color:var(--brand-forest)]/15 pt-8">
          <h2 className="font-serif text-xl text-forest mb-4">More field notes</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {articles
              .filter((a) => a.slug !== article.slug)
              .slice(0, 4)
              .map((a) => (
                <Link
                  key={a.slug}
                  to="/reptile-101/$slug"
                  params={{ slug: a.slug }}
                  className="paper-card rounded-xl p-4 hover:border-[color:var(--brand-forest)]/40 transition"
                >
                  <p className="font-serif text-base text-forest leading-snug">{a.title}</p>
                </Link>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
