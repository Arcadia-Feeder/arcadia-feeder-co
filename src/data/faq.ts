export type FAQItem = { q: string; a: string };
export type FAQSection = { id: string; title: string; items: FAQItem[] };

export const faqSections: FAQSection[] = [
  {
    id: "pickup-delivery",
    title: "Pickup & Delivery",
    items: [
      { q: "Where are you located?", a: "We operate out of Arcadia, CA, in the San Gabriel Valley. We don't have a storefront — we're a kid-run home operation, so pickup is by appointment." },
      { q: "How does pickup work?", a: "Once you join our list and place an order, we'll text or email you to set a time. We do warm hand-offs in safe public spots: Arcadia Public Library, a local park, or — if you're an AUSD student or parent — we can meet at your school during pickup/drop-off hours." },
      { q: "Do you deliver?", a: "For AUSD students, yes — we can drop your order at your school (coordinated with you so we know which teacher or office to leave it with, or to hand it to you directly). For local SGV customers within about 15 minutes of Arcadia, we can sometimes do a short-radius drop with a parent driving. Anything farther is pickup only for now." },
      { q: "What cities do you serve?", a: "Primarily Arcadia, Temple City, Pasadena, San Gabriel, Alhambra, Monrovia, San Marino, and South Pasadena. If you're farther out and willing to come to us, we'll happily set up a pickup." },
      { q: "How fast can I get an order?", a: "Most orders are ready same-day or next-day. Because we breed locally, there's no shipping wait. If we have the size you want in stock, we can often meet you within 24 hours." },
      { q: "What if I can't make my pickup time?", a: "Just text us. We'll reschedule. We're flexible — we're middle schoolers, we get it." },
    ],
  },
  {
    id: "products",
    title: "Products",
    items: [
      { q: "What do you sell?", a: "Three live feeders we raise ourselves: Dubia roaches (small, medium, large), superworms (25/50/100 ct cups), and hornworms (12 or 25 ct). We also offer an Arcadia Calcium Care Kit — food-grade calcium carbonate for dusting feeders." },
      { q: "Why don't you sell crickets, mealworms, or mice?", a: "We only sell what we can raise or grow ourselves with quality we can stand behind. Crickets are smelly and loud. Mealworms have low nutritional value. Frozen mice are a year-2 conversation if we get properly set up for it." },
      { q: "What do you feed your feeders?", a: "Fresh fruits and vegetables — carrots, sweet potato, leafy greens, oats — every single day. Garbage in, garbage out. When your reptile eats one of our feeders, it's getting real nutrients." },
      { q: "What sizes do you carry?", a: "Dubia: small (~1/4\"), medium (~1/2\"), large/adult. Superworms: standard count cups, bulk bags available. Hornworms: small, medium, large." },
      { q: "What's the Calcium Care Kit?", a: "A small jar of food-grade USP/FCC precipitated calcium carbonate (plain calcium, no D3 or multivitamin blend), with a printed care card on how to dust feeders. Free with every Feeder Crate subscription. $5 add-on for one-off orders." },
    ],
  },
  {
    id: "subscriptions",
    title: "Subscriptions (The Feeder Crate)",
    items: [
      { q: "How does The Feeder Crate work?", a: "Pick a tier (Starter, Standard, or Family), and we set up a recurring weekly pickup or drop-off. Every crate includes a free Calcium Care Kit." },
      { q: "Can I pause or cancel?", a: "Yes, anytime. Text us. No contract, no fees." },
      { q: "Can I customize my crate?", a: "Within reason, yes. If your bearded dragon hates hornworms or you need extra mediums this week, just tell us." },
      { q: "Do you offer hornworm add-ons?", a: "Yes — any tier can add 12 hornworms for +$8 or 25 for +$15 per delivery. You can toggle this on/off month-to-month." },
    ],
  },
  {
    id: "payment",
    title: "Payment & Orders",
    items: [
      { q: "How do I pay?", a: "We use Finli for payment processing. We can also do Venmo, Zelle, or cash on pickup. No credit card surcharges." },
      { q: "Do you have online checkout?", a: "Not yet. For now, you join our list, we'll reach out to confirm your order and pickup, and you pay at handoff or via Finli." },
      { q: "What's your minimum order?", a: "One cup. We're happy to sell a single 50-ct cup of mediums if that's what your dragon needs." },
    ],
  },
  {
    id: "live-arrival",
    title: "Live Arrival & Quality",
    items: [
      { q: "What if some feeders arrive dead or weak?", a: "Tell us within 24 hours of pickup and we'll replace them, free. Because we hand-count and you're picking up locally, this is rare — but we stand behind every cup." },
      { q: "Are your feeders gut-loaded?", a: "Yes, daily, on fresh produce — not dry \"gut-load powder.\"" },
    ],
  },
  {
    id: "about",
    title: "About Us",
    items: [
      { q: "Are you really middle schoolers?", a: "Yes. Ed (12), Ryan (11), and Maxyne (12). We each put $200 of our own piggy-bank money into starting this. Our parents handle banking and driving; we handle the business." },
      { q: "Why should I trust three kids with my reptile's food?", a: "We keep ball pythons, bearded dragons, and an American alligator lizard ourselves. We've been doing this for years. Our parents are involved in safety, legal, and food-handling oversight." },
      { q: "Can I visit the colonies?", a: "Eventually, yes — we're planning a \"Colony Open House\" event. For now, we share behind-the-scenes content on Instagram @arcadiafeederco." },
    ],
  },
  {
    id: "club",
    title: "Reptile Club",
    items: [
      { q: "What's the Reptile Club?", a: "A free monthly club for any nearby student — elementary through high school — who thinks reptiles are cool. You don't need to own one. Saturdays, about 90 minutes, at a park or library. First 10 members become Founding Members." },
      { q: "Do I need to buy feeders to join the club?", a: "No. The club is free and separate from the business." },
    ],
  },
];

export const allFAQs = faqSections.flatMap((s) => s.items);
