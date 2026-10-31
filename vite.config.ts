// @lovable.dev/vite-tanstack-config bundles tanstackStart, viteReact, tailwindcss, tsConfigPaths,
// VITE_* env injection and the @ path alias — do NOT add them manually.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Hosted on Netlify as a static site, so the Cloudflare Workers build target is turned off.
  cloudflare: false,
  tanstackStart: {
    server: { entry: "server" },
    // Render every page to static HTML at build time (output: dist/client).
    prerender: { enabled: true, crawlLinks: true, failOnError: true },
  },
  // The prerender step runs a short-lived local preview server; keep it on IPv4 localhost.
  vite: { preview: { host: "127.0.0.1" } },
});
