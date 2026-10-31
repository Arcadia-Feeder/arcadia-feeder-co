export type Article = {
  slug: string;
  title: string;
  short: string; // original card answer
  description: string; // meta description
  body: string[]; // paragraphs
};

export const articles: Article[] = [
  {
    slug: "is-that-snake-in-my-backyard-dangerous",
    title: "Is that snake in my backyard dangerous?",
    short:
      "Almost every snake in the SGV is harmless. Gopher snakes look scary but they actually eat rats. The only venomous native snake in our area is the rattlesnake — and rattlesnakes don't chase people.",
    description:
      "Almost every snake you'll find in the San Gabriel Valley is harmless. Here's how to tell what you're looking at — and why most snakes are good neighbors.",
    body: [
      "Almost every snake you'll see in a San Gabriel Valley backyard is harmless. The big one people see most often is the gopher snake — it can grow to 5 feet, has a blotchy brown pattern, and will sometimes flatten its head and shake its tail in dry leaves to imitate a rattlesnake. It's bluffing. Gopher snakes are non-venomous and they actually do you a favor by eating rats, gophers, and mice that would otherwise chew through your garden hose or get into your garage.",
      "The other common ones around here are the California kingsnake (black-and-white or brown-and-cream banded — they eat other snakes, including young rattlers), the racer, and tiny ring-necked snakes that you'll mostly find under flowerpots. None are dangerous to people.",
      "The only venomous native snake in our area is the southern Pacific rattlesnake. They have a triangular head, a thick body relative to their length, and obviously a rattle. Here's the thing nobody tells you: rattlesnakes do not chase people. They want to be left alone. Almost every rattlesnake bite happens because someone tried to pick one up, kill it, or stepped on one they didn't see. If you see a rattlesnake, back away slowly and give it space. It will leave.",
      "What we tell our friends: don't grab any snake you can't ID. Take a photo from a safe distance and look it up, or ask us — we're happy to help. Killing every snake you see is bad for the local ecosystem and usually unnecessary. The snakes are eating the things you don't want in your yard anyway.",
    ],
  },
  {
    slug: "whats-that-lizard-on-my-fence",
    title: "What's that lizard on my fence?",
    short:
      "Probably a Western Fence Lizard or an alligator lizard. Both are good neighbors. Fence lizards may even help reduce Lyme disease risk in California — pretty cool for a backyard buddy.",
    description:
      "The two lizards you'll see most often in SGV backyards are the Western Fence Lizard and the Southern Alligator Lizard. Here's how to tell them apart — and why both are good neighbors.",
    body: [
      "If something just darted across your block wall and froze, it's probably a Western Fence Lizard. They're small (3–8 inches counting tail), brown or gray with a pattern, and the males flash bright blue patches on their bellies — that's where the nickname \"blue-belly\" comes from. They love sunny fences, rock walls, and the tops of cinder blocks. They eat ants, beetles, and spiders.",
      "Here's the cool science: Western Fence Lizards carry a protein in their blood that kills the bacteria that causes Lyme disease. When a tick that's carrying Lyme bites a fence lizard, the lizard's blood cleans the tick out. So fewer Lyme-infected ticks means lower Lyme rates in California compared to states without these lizards. A backyard friend with a built-in disease-fighting superpower.",
      "The other one you might see is the Southern Alligator Lizard — longer, snake-like body, short legs, and a tail that's often longer than its body. They look intimidating because they're bigger and they will absolutely bite if you grab them, but they're not venomous and they're not aggressive. We have one as a pet and he's great. Alligator lizards eat slugs, crickets, and even small mice — they're tougher than they look.",
      "Both species are protected to some degree in California and shouldn't be collected from the wild. If you find one in your house, the kind move is to gently usher it back outside. It was probably hunting something that you also didn't want in your house.",
    ],
  },
  {
    slug: "reptile-myths-busted",
    title: "Reptile myths, busted",
    short:
      "Snakes aren't slimy (they're dry). Reptiles aren't dumb (they recognize their keepers). They aren't all dangerous — most are harmless and helpful.",
    description:
      "The most common reptile myths we hear from friends, family, and grown-ups — and what's actually true. From three kids who keep them.",
    body: [
      "Myth #1: Snakes are slimy. Nope. Snake skin is dry, smooth, and kind of feels like a really nice leather wallet. The slimy thing comes from people confusing snakes with eels or worms. If you've never touched a snake, ask a keeper at a reptile expo — most of us are happy to let you feel the scales of a friendly ball python.",
      "Myth #2: Reptiles are dumb. Reptiles aren't dogs, but they are way smarter than people give them credit for. Our ball pythons recognize the difference between us and a stranger. Bearded dragons can learn to come to a specific spot for food, recognize their name, and some studies show they can even imitate behavior. Monitor lizards solve puzzles. Tortoises remember the route to their favorite basking rock for decades.",
      "Myth #3: All reptiles are dangerous. The vast majority of reptiles are harmless to humans. Of the roughly 12,000 reptile species worldwide, only a small fraction are venomous, and even fewer are dangerous to people. Almost every snake, lizard, and turtle you'll meet in the SGV is harmless and would rather run from you than bite.",
      "Myth #4: They don't have personalities. Anyone who's kept reptiles for more than a month will tell you they absolutely do. We have one bearded dragon who's a complete diva, one ball python who's basically a noodle, and an alligator lizard with serious opinions about being picked up. They're not mammals — they're not going to wag a tail — but they're individuals.",
      "Myth #5: They're easy pets that don't need much care. This is the most damaging myth. Reptiles need specific temperatures, lighting (UVB for many species), humidity, and a proper diet. The reason so many end up in rescues is because people thought a leopard gecko was \"low-maintenance.\" It's low-mess, not low-care. Big difference.",
    ],
  },
  {
    slug: "thinking-of-getting-a-reptile",
    title: "Thinking of getting a reptile?",
    short:
      "Beginner-friendly: leopard gecko, bearded dragon, corn snake. NOT beginner-friendly: green iguana, monitor lizards, hatchling tortoises. Do your homework first.",
    description:
      "Beginner-friendly reptiles vs. ones to avoid. Honest advice from three kids who actually keep ball pythons, bearded dragons, and an alligator lizard.",
    body: [
      "If this is your first reptile, three species we'd actually recommend: leopard gecko, crested gecko, or corn snake. Bearded dragons are great too but they need more space, brighter lighting, and a more varied diet, so we'd put them in the \"beginner-with-research\" tier.",
      "Leopard geckos: 20-gallon tank, no UVB strictly required (though it helps), eat insects, live 15–20 years. Calm, easy to handle, come in beautiful colors.",
      "Crested geckos: even simpler — they eat a powdered fruit-based diet you mix with water, they don't need heat lamps in most homes, and they're very docile. A great first reptile if you live somewhere with mild temperatures.",
      "Corn snakes: 20–40 gallon tank, eat one frozen-thawed mouse every 1–2 weeks, very calm, almost never bite. Live 15–20 years.",
      "What NOT to start with: green iguanas (get 6 feet long, need a whole room, can be aggressive), monitor lizards (powerful, need huge enclosures, expensive to feed), hatchling tortoises (live 50–100 years, get big, need outdoor space), chameleons (extremely sensitive to husbandry mistakes), and any wild-caught animal.",
      "Before you buy, do this: read at least two full care guides from reputable sources (Reptifiles, ReptiFiles, ReptileGuide, university extension sites — not random YouTube videos). Build the enclosure FIRST and run it for a week to make sure temperatures and humidity are stable. Then get the animal. The number one cause of reptile death in new keepers is bringing the animal home before the enclosure is ready.",
      "And budget honestly. A leopard gecko is a $30 animal that needs $300+ in setup before it comes home. That math is normal. If the setup feels expensive, that's the right setup.",
    ],
  },
  {
    slug: "why-we-care",
    title: "Why we care",
    short:
      "Every reptile, captive or wild, deserves respect and understanding. They were here long before us — and we want to be the kind of keepers they deserve.",
    description:
      "Why three middle schoolers in Arcadia decided to spend their savings raising the cleanest reptile feeders in the SGV.",
    body: [
      "Reptiles have been on Earth for over 300 million years. Mammals are toddlers in comparison. Every snake, lizard, and tortoise around today is the result of an absurdly long line of survival. We think that earns them respect.",
      "We didn't start this business for the money — three kids, $600 in piggy-bank cash, no one's getting rich on Dubia roaches. We started it because the reptile community in our area was missing something. The local store that sold feeders closed. Our parents weren't going to drive 45 minutes for a cup of bugs. Online shipping was killing the bugs and the price was insane for the size of order our reptiles actually needed.",
      "But it's bigger than that. The local store wasn't just a place to buy crickets — it was a place where reptile keepers actually met each other. New keepers got real advice from experienced ones. Kids saw animals they'd never seen before. People shared what worked and what didn't. None of that happens through a cardboard box on your doorstep.",
      "And honestly, reptiles get a bad rap. People fear them, kill snakes in their backyards that were eating the rats they didn't want, and treat them like dinosaurs to be afraid of instead of animals to learn about. We grew up loving reptiles, and we want other kids to get the chance to love them too. That's why we run the free Reptile Club. That's why we share what we learn. That's why we take this seriously even though we're 11 and 12.",
      "Every reptile, captive or wild, deserves respect and understanding. They were here long before us — and we want to be the kind of keepers they deserve.",
    ],
  },
  {
    slug: "what-do-feeders-actually-eat",
    title: "What do feeders actually eat?",
    short:
      "Garbage in, garbage out. Our Dubias and superworms get fresh carrots, sweet potato, leafy greens, and oats every day — so when your reptile eats them, it's actually getting nutrients, not empty calories.",
    description:
      "Why we feed our Dubia roaches, superworms, and hornworms fresh produce daily — and why \"gut-loading powder\" isn't enough for your reptile.",
    body: [
      "There's a saying in the reptile world: \"You're not feeding your reptile — you're feeding what your reptile ate.\" If a feeder insect is empty calories, your reptile gets empty calories. If a feeder is loaded with vitamins, calcium, and moisture, your reptile gets all of that too.",
      "Most feeders sold in big stores are shipped from huge breeding facilities. They sit in shipping boxes for days with nothing to eat. By the time they get to your reptile, they're stressed, dehydrated, and basically empty shells. That's why so many keepers have to dust EVERY feeder with vitamin powder — they're trying to make up for what should already be in the bug.",
      "Our Dubia roaches and superworms eat fresh produce every single day: carrots (high in beta carotene), sweet potato (vitamin A), collard greens, mustard greens, and dandelion greens (calcium), plus oats and dry grain mix for fiber. The hornworms eat a special hornworm chow that we keep going on a steady cycle.",
      "We don't use \"gut-load powder.\" Gut-load powder is a dry mix you can buy in a jar, and it's not bad — but real fresh produce is way better. Bugs eat more of it, hold more moisture, and pass more nutrients to your reptile. Powder is what you do when you can't get fresh food in front of the bugs every day. We're a few feet from the kitchen. We can.",
      "This is also why we still recommend dusting feeders with calcium (that's what the Calcium Care Kit is for) — even the best gut-loaded bug doesn't have quite enough calcium for most growing reptiles. But the difference between a properly gut-loaded Dubia and a shipped-in dehydrated one is huge. Your reptile will look better, shed cleaner, and eat with more energy.",
    ],
  },
];

export const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
