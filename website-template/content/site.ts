export const site = {
  meta: {
    title: "Jon-Michael Evans",
    description:
      "Founder, builder, and software consulting firm owner. Architect of Alphanuity. Fully alive.",
    url: "https://jonmichaelevans.com",
  },

  nav: {
    name: "Jon-Michael Evans",
    links: [
      { label: "Work", href: "#what-i-build" },
      { label: "About", href: "#identity" },
      { label: "Life", href: "#the-life" },
    ],
    cta: { label: "Contact", href: "#contact" },
  },

  hero: {
    name: "Jon-Michael Evans",
    identityLine: "Founder. Builder. Fully alive.",
    subLine:
      "I run Alphanuity, a software consulting firm for companies that need senior technical leverage across architecture, automation, AI tooling, and execution. The rest of the time, I'm somewhere interesting.",
    cta: { label: "Work with me", href: "#contact" },
    image: {
      src: "/images/hero.webp",
      alt: "Cinematic portrait of a software consulting founder in a dark technical workspace",
    },
  },

  identity: {
    heading: "Who I am",
    bio: [
      "I founded Alphanuity to do the kind of work I actually wanted to do — hard technical problems, real business stakes, no bureaucratic buffer.",
      "Before that, I spent years building the skills to earn that right. I've reinvented myself more than once and I'm not done.",
      "In person, people usually say I'm easy to get along with. They also say I mean business. Both things are true.",
    ],
    pullQuote: "Easy to get along with. Means business.",
    pillars: [
      {
        label: "Builder",
        description:
          "I founded a software consulting firm from scratch and wore every hat to make it work.",
      },
      {
        label: "Adventurer",
        description:
          "Skydiving, bungee jumping, surfing, jungles — I don't save the risk for work.",
      },
      {
        label: "Learner",
        description:
          "Tech, business, philosophy, history. I read and learn across domains because I think it compounds.",
      },
    ],
    image: {
      src: "/images/identity.webp",
      alt: "Candid editorial portrait of Jon-Michael Evans",
    },
  },

  whatIBuild: {
    heading: "Alphanuity",
    descriptor:
      "A software consulting firm for companies that need more than code. We bring senior technical leverage to architecture, automation, AI workflows, developer experience, and the operating problems hiding inside the stack.",
    capabilities: [
      {
        title: "System Modernization",
        body: "Your legacy system is slowing you down. We untangle it, rebuild what needs rebuilding, and make the architecture work for the business it's serving now.",
      },
      {
        title: "DevExperience & Operations",
        body: "Slow deployments, broken tooling, frustrated engineers. We find the friction and build the kind of environment where great work actually happens.",
      },
      {
        title: "Technical Leadership",
        body: "Sometimes the problem isn't the code — it's the strategy, the communication, or the missing bridge between engineering and the people it serves. That's where I work.",
      },
    ],
    cta: { label: "See the work", href: "#signature-work" },
  },

  signatureWork: {
    heading: "Work that mattered",
    items: [
      {
        title: "Architecture clarity for a growing product team",
        context: "Software organization with a product moving faster than its systems",
        problem:
          "The team had accumulated technical decisions that made every new feature slower to plan, harder to ship, and more expensive to support. The real problem was not one bad service. It was the missing architectural path forward.",
        role: "Architect and lead consultant",
        outcome:
          "Created a practical modernization plan, clarified ownership boundaries, and gave leadership a technical roadmap they could actually execute without pausing product momentum.",
      },
      {
        title: "Developer experience and delivery systems",
        context: "Engineering team losing time to friction instead of product work",
        problem:
          "Local setup, deployment paths, operational habits, and unclear tooling were creating drag across the team. Engineers were spending too much time fighting the system around the work.",
        role: "Consultant and embedded technical lead",
        outcome:
          "Improved the delivery workflow, reduced ambiguity around engineering operations, and helped the team establish practices that made technical progress easier to repeat.",
      },
      {
        title: "Technical leadership when the stakes were business-level",
        context: "Company deciding how to turn technical complexity into forward motion",
        problem:
          "The technical issues were inseparable from product priorities, team communication, and business risk. The work required more than implementation. It required judgment across engineering and leadership.",
        role: "Technical advisor and strategic partner",
        outcome:
          "Helped translate technical tradeoffs into executive decisions, shaped a clearer execution plan, and brought the engineering conversation closer to the business outcome.",
      },
    ],
    linkedInCta: {
      label: "Full history on LinkedIn →",
      href: "https://www.linkedin.com/in/jon-michael-evans/",
    },
  },

  howIOperate: {
    heading: "How I operate",
    principles: [
      {
        number: "01",
        title: "Lean into the fear.",
        body: "The best decisions I've made were the ones I was most nervous to make. I've learned to treat that feeling as a signal, not a warning.",
      },
      {
        number: "02",
        title: "Own it or don't.",
        body: "I don't optimize for safe outcomes. I chose to build something instead of waiting for permission to be exceptional.",
      },
      {
        number: "03",
        title: "Bridge the gap.",
        body: "Technical excellence alone doesn't move businesses. I work at the intersection of engineering, product, and human judgment — because that's where the real problems live.",
      },
      {
        number: "04",
        title: "Keep compounding.",
        body: "I'm still learning. New technology, business strategy, how to write better, how to lead better. I don't plateau by choice.",
      },
    ],
  },

  theLife: {
    heading: "The rest of it.",
    intro: "Risk isn't a metaphor for me. It's a practice.",
    adventures: [
      { label: "Skydiving", image: "/images/skydiving.webp" },
      { label: "Bungee Jumping", image: "/images/bungee-jumping.webp" },
      { label: "Bridge Swinging", image: "/images/bridge-swinging.webp" },
      { label: "White Water Rafting", image: "/images/white-water-rafting.webp" },
      { label: "ATV Through Jungles", image: "/images/jungle-atv.webp" },
      { label: "Surfing", image: "/images/surfing.webp" },
      { label: "Hiking", image: "/images/hiking.webp" },
      { label: "Running", image: "/images/running.webp" },
    ],
    callouts: [
      {
        label: "Daily training.",
        body: "Health and fitness aren't a phase — they're infrastructure.",
      },
      {
        label: "Mostly non-fiction.",
        body: "History, business, philosophy, systems. Bring me a fiction recommendation and I'll take you up on it.",
      },
    ],
    closing: "Life is short. Why ride the pine when you can build the team?",
  },

  ventures: {
    heading: "What I'm building.",
    cards: [
      {
        name: "Alphanuity",
        description: "Software consulting for companies with hard problems.",
        cta: { label: "Work with us →", href: "#contact" },
        status: "Active",
      },
      {
        name: "Something new.",
        description:
          "A health and fitness product that rethinks something everyone takes for granted. More soon.",
        cta: null as null | { label: string; href: string },
        status: "In development.",
      },
    ],
  },

  contact: {
    heading: "Let's build something.",
    subLine:
      "If you have a hard problem and want someone who will actually engage with it, I'd like to hear from you.",
    email: "contact@jonmichaelevans.com",
    linkedIn: "https://www.linkedin.com/in/jon-michael-evans/",
    formCta: "Send it",
  },
};
