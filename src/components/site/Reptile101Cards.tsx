import { useState } from "react";

type Card = { q: string; a: string };

const cards: Card[] = [
  {
    q: "Is that snake in my backyard dangerous?",
    a: "Almost every snake in the SGV is harmless. Gopher snakes look scary but they actually eat rats. The only venomous native snake in our area is the rattlesnake — and rattlesnakes don't chase people.",
  },
  {
    q: "What's that lizard on my fence?",
    a: "Probably a Western Fence Lizard or an alligator lizard. Both are good neighbors. Fence lizards may even help reduce Lyme disease risk in California — pretty cool for a backyard buddy.",
  },
  {
    q: "Reptile myths, busted",
    a: "Snakes aren't slimy (they're dry). Reptiles aren't dumb (they recognize their keepers). They aren't all dangerous — most are harmless and helpful.",
  },
  {
    q: "Thinking of getting a reptile?",
    a: "Beginner-friendly: leopard gecko, bearded dragon, corn snake. NOT beginner-friendly: green iguana, monitor lizards, hatchling tortoises. Do your homework first.",
  },
  {
    q: "Why we care",
    a: "Every reptile, captive or wild, deserves respect and understanding. They were here long before us — and we want to be the kind of keepers they deserve.",
  },
  {
    q: "What do feeders actually eat?",
    a: "Garbage in, garbage out. Our Dubias and superworms get fresh carrots, sweet potato, leafy greens, and oats every day — so when your reptile eats them, it's actually getting nutrients, not empty calories.",
  },
];

export function Reptile101Cards() {
  const [flipped, setFlipped] = useState<number | null>(null);
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((c, i) => {
        const isFlipped = flipped === i;
        return (
          <button
            key={i}
            onClick={() => setFlipped(isFlipped ? null : i)}
            className={`flip-card text-left h-64 ${isFlipped ? "flipped" : ""}`}
            aria-label={c.q}
          >
            <div className="flip-card-inner">
              <div className="flip-face paper-card rounded-2xl p-6 flex flex-col justify-between">
                <span className="smallcaps text-xs text-brown">Field Note №{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-serif text-2xl text-forest leading-snug">{c.q}</h3>
                <span className="text-xs text-charcoal/60">Tap to flip →</span>
              </div>
              <div className="flip-face flip-back rounded-2xl p-6 bg-forest text-cream flex flex-col justify-between">
                <span className="smallcaps text-xs text-cream/60">The answer</span>
                <p className="font-serif text-lg leading-relaxed">{c.a}</p>
                <span className="text-xs text-cream/60">Tap to flip back ↺</span>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
