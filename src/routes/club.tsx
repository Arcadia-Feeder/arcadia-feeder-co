import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { submitNetlifyForm } from "@/lib/netlify-form";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/club")({
  head: () => ({
    meta: [
      { title: "The Reptile Club — Free Monthly Meetups for Nearby Students | Arcadia Feeder Co." },
      {
        name: "description",
        content:
          "Free monthly Reptile Club for any nearby student in the SGV. Show-and-tell, hands-on activities, founding member patches for the first 10.",
      },
      { property: "og:title", content: "The Reptile Club — Arcadia Feeder Co." },
      {
        property: "og:description",
        content: "Free monthly meetings for kids who love reptiles. Open to any nearby student.",
      },
      { property: "og:url", content: "https://arcadiafeeder.com/club" },
    ],
    links: [{ rel: "canonical", href: "https://arcadiafeeder.com/club" }],
  }),
  component: ClubPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  grade: z.string().trim().min(1, "Required").max(50),
  school: z.string().trim().min(1, "Required").max(150),
  email: z.string().trim().email("Invalid email").max(255).optional().or(z.literal("")),
  parent_email: z.string().trim().email("Invalid email").max(255),
  has_reptile: z.enum(["Yes", "Not yet", "Just reptile-curious!"]),
  reptile_details: z.string().max(1000).optional().or(z.literal("")),
  notes: z.string().max(2000).optional().or(z.literal("")),
});

function ClubPage() {
  const [hasReptile, setHasReptile] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: fd.get("name"),
      grade: fd.get("grade"),
      school: fd.get("school"),
      email: fd.get("email") ?? "",
      parent_email: fd.get("parent_email"),
      has_reptile: hasReptile,
      reptile_details: fd.get("reptile_details") ?? "",
      notes: fd.get("notes") ?? "",
    };
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    const ok = await submitNetlifyForm("club", {
      name: parsed.data.name,
      grade: parsed.data.grade,
      school: parsed.data.school,
      email: parsed.data.email || "",
      parent_email: parsed.data.parent_email,
      has_reptile: parsed.data.has_reptile,
      reptile_details: parsed.data.reptile_details || "",
      notes: parsed.data.notes || "",
    });
    setSubmitting(false);
    if (!ok) {
      setError("Something went wrong. Try again in a moment?");
      return;
    }
    setDone(true);
  }

  if (done) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center px-5 py-20">
          <div className="paper-card rounded-3xl p-10 max-w-xl text-center">
            <span className="smallcaps text-xs text-brown">Submitted</span>
            <h1 className="font-serif text-4xl text-forest mt-3">You're in!</h1>
            <p className="mt-4 text-charcoal/80 text-lg leading-relaxed">
              We'll email your parent within a few days about the next meeting.
            </p>
            <p className="mt-6 font-serif italic text-forest">— Ed, Ryan & Maxyne</p>
            <Link to="/" className="inline-block mt-8 rounded-full bg-forest text-cream px-6 py-3 font-medium hover:bg-[color:var(--brand-forest)]/90">
              Back to home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mx-auto max-w-2xl w-full px-5 py-12 md:py-16">
        <span className="smallcaps text-xs text-brown">Reptile Club intake</span>
        <h1 className="font-serif text-4xl md:text-5xl text-forest mt-2">Join the Reptile Club</h1>
        <p className="mt-4 text-charcoal/75 leading-relaxed">
          Tell us a little about you. We'll email your parent within a few days about the next meeting.
        </p>

        <form onSubmit={onSubmit} className="mt-10 space-y-6 paper-card rounded-2xl p-6 md:p-8">
          <Field label="Your name" name="name" error={errors.name} />
          <Field label="What grade are you in?" name="grade" placeholder="e.g., 5th, 8th, 10th" error={errors.grade} />
          <Field label="What school do you go to?" name="school" placeholder="Your school name" error={errors.school} />
          <Field label="Your email" name="email" type="email" hint="Optional — we mostly contact your parent." error={errors.email} />
          <Field label="Parent or guardian email" name="parent_email" type="email" hint="We'll loop them in for meetings." error={errors.parent_email} />

          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">Do you have a reptile?</label>
            <div className="grid sm:grid-cols-3 gap-2">
              {["Yes", "Not yet", "Just reptile-curious!"].map((opt) => {
                const checked = hasReptile === opt;
                return (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => setHasReptile(opt)}
                    className={`text-left rounded-xl border px-4 py-3 text-sm transition ${
                      checked
                        ? "bg-forest text-cream border-forest"
                        : "bg-cream text-charcoal border-[color:var(--brand-forest)]/25 hover:border-[color:var(--brand-forest)]/50"
                    }`}
                  >
                    <span className="mr-2">{checked ? "●" : "○"}</span>{opt}
                  </button>
                );
              })}
            </div>
            {errors.has_reptile && <p className="text-sm text-red-700 mt-1">{errors.has_reptile}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal mb-1.5">If yes, tell us about them <span className="text-charcoal/50">(optional)</span></label>
            <textarea
              name="reptile_details"
              rows={3}
              placeholder="e.g., one bearded dragon named Toothless..."
              className="w-full rounded-xl border border-[color:var(--brand-forest)]/25 bg-cream px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-forest)]/40"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal mb-1.5">Anything else you want us to know? <span className="text-charcoal/50">(optional)</span></label>
            <textarea
              name="notes"
              rows={3}
              className="w-full rounded-xl border border-[color:var(--brand-forest)]/25 bg-cream px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-forest)]/40"
            />
          </div>

          {error && <p className="text-sm text-red-700">{error}</p>}

          <button
            disabled={submitting}
            className="w-full rounded-full bg-forest text-cream px-6 py-3.5 font-medium hover:bg-[color:var(--brand-forest)]/90 disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Count me in →"}
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

function Field({ label, name, type = "text", error, hint, placeholder }: { label: string; name: string; type?: string; error?: string; hint?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-charcoal mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[color:var(--brand-forest)]/25 bg-cream px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-forest)]/40"
      />
      {hint && <p className="text-xs text-charcoal/60 mt-1">{hint}</p>}
      {error && <p className="text-sm text-red-700 mt-1">{error}</p>}
    </div>
  );
}
