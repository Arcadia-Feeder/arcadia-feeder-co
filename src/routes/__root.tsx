import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
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
      { property: "og:site_name", content: "Arcadia Feeder Co." },
      { property: "og:url", content: "https://arcadiafeeder.com" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://arcadiafeeder.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Arcadia Feeder Co." },
      {
        name: "twitter:description",
        content: "Locally bred reptile feeders. Same-day Arcadia pickup. No shipping stress.",
      },
      { name: "twitter:image", content: "https://arcadiafeeder.com/og-image.png" },
    ],
    links: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/favicon.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Arcadia Feeder Co.",
          description:
            "Three middle-school co-founders in Arcadia, CA raising humane, locally bred Dubia roaches, superworms, and hornworms for reptile keepers in the San Gabriel Valley.",
          url: "https://arcadiafeeder.com",
          logo: "https://arcadiafeeder.com/favicon.png",
          image: "https://arcadiafeeder.com/og-image.png",
          founder: [
            { "@type": "Person", name: "Ed Shao" },
            { "@type": "Person", name: "Ryan Shao" },
            { "@type": "Person", name: "Maxyne Cho" },
          ],
          foundingDate: "2026",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Arcadia",
            addressRegion: "CA",
            addressCountry: "US",
          },
          areaServed: [
            { "@type": "City", name: "Arcadia" },
            { "@type": "City", name: "Temple City" },
            { "@type": "City", name: "Pasadena" },
            { "@type": "City", name: "San Gabriel" },
            { "@type": "City", name: "Alhambra" },
            { "@type": "City", name: "Monrovia" },
            { "@type": "City", name: "San Marino" },
            { "@type": "City", name: "South Pasadena" },
          ],
          sameAs: ["https://instagram.com/arcadiafeederco"],
          priceRange: "$",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
