export interface TeamMember {
  name: string
  roles: string[]
}

export interface Screenshot {
  src: string
  alt: string
}

export interface ExternalLink {
  label: string
  url: string
}

export interface Project {
  slug: string
  title: string
  shortDescription: string

  // "archived" marks completed games; they get detail pages like active
  // projects and are listed in the Project Archive section. Omitted = active.
  status?: "active" | "archived"

  image?: string
  imageAlt?: string
  imageOffsetY?: number

  tagline?: string

  links?: ExternalLink[]

  about?: string[]

  team?: TeamMember[]

  screenshots?: Screenshot[]
}

export const projects: Project[] = [
  {
    slug: "sunfall",
    title: "Sunfall",
    shortDescription:
      "Hack and slash through the shadows in this dark rogue-lite as you battle your way to free the sun.",
    image: "/images/projects/sunfall-cover.png",
    imageAlt: "Sunfall Cover Art",
    imageOffsetY: 15,

    tagline:
      "Hack and slash through the shadows in this dark rogue-lite as you battle your way to free the sun.",

    about: [
      "Sunfall is a dark hack-n-slash rogue-lite where you play as the paladin of the sun god, who has been captured by the shadows. Taking inspiration from games like Hades, Enter the Gungeon, and Echo: Defy Death, you will fight your way through three distinct areas (farmland, city, and temple) in order to free the sun god from the heart of their temple. Shadowy monsters wait at every corner, their bodies and minds transformed by the darkness. Your light is what gives you your power, and is also what allows you to see through the darkness.",
      "In this game, light is perceived as color, and areas where your light does not reach are in greyscale. Every run is different as your character gains different power ups via enemy drops, and unlocks different weapons and abilities as the game progresses. But as you progress, so too does the darkness grow, and its monsters grow more desperate to stop you."
    ],

    team: [
      {
        name: "Teddy Starynski",
        roles: ["Team Lead", "Art", "Programming"]
      },
      {
        name: "Brady Bock",
        roles: ["Team Lead", "Programming"]
      },
      {
        name: "Diana Murtaugh",
        roles: ["Team Lead", "Art", "Writing"]
      },
      {
        name: "Michael Chase",
        roles: ["Music and Sound Design"]
      },
      {
        name: "Jonah Sauve",
        roles: ["Music and Sound Design"]
      },
      {
        name: "Soo Hyun Bahn",
        roles: ["Music and Sound Design", "Art"]
      },
      {
        name: "Samantha Wang",
        roles: ["Writing", "Art"]
      },
      {
        name: "Avi Krishnan",
        roles: ["Art"]
      },
      {
        name: "Yiming Chen",
        roles: ["Programming"]
      }
    ],

    screenshots: [
      {
        src: "/images/projects/sunfall-shot-1.png",
        alt: "Sunfall shadow creature concept art"
      },
      {
        src: "/images/projects/sunfall-shot-2.png",
        alt: "Sunfall weapon concept art"
      },
      {
        src: "/images/projects/sunfall-shot-3.png",
        alt: "Sunfall knight concept art"
      }
    ]
  },
  {
    slug: "immunoblast",
    title: "Immunoblast",
    shortDescription:
      "A 2D action game that combines combat with a unique journey through the microscopic battleground of the human immune system.",
    image: "/images/projects/immunoblast-cover.png",
    imageAlt: "Immunoblast Cover Art",

    tagline:
      "An innovative 2D action game that combines combat with a unique journey through the microscopic battleground of the human immune system.",

    about: [
      "Unlike traditional \"edutainment\" titles, which often feel more like chores than entertainment, Immunoblast blends fast-paced, skill-based combat and immersive storytelling with real-world biological accuracy. The game draws inspiration from titles like Armored Core VI, Dead Cells, and Risk of Rain, delivering 2D action elements, powerful build making, and mission-based combat levels, while secretly teaching players about the immune system.",
      "Players take on the role of AC-018 \"Panacea,\" an adaptive bio-robot tasked with protecting a human host from infections, cancer, and autoimmune conditions. Core mechanics include acquiring and upgrading \"genetic abilities,\" each inspired by real-world biology, such as cytokine pathways, viral gene suppression, and antibody weaponry. Panacea deploys for missions all across the body, but sometimes you must choose where to deploy, impacting the story. In a combat perspective, the game's Inflammation system offers players a risk-reward balance, with inflammation making them stronger but at the cost of destabilizing the host.",
      "Immunoblast merges authentic scientific concepts with deep gameplay and emotional storytelling. Interact with the intricate network of characters that is our immune system. Learn about the science behind your powerful weaponry. Explore the shadows and ethics of the Adaptive Cell project. Are you prepared to uncover the truth, face impossible choices, and..."
    ],

    team: [
      {
        name: "Samuel Huang",
        roles: ["Lead Developer"]
      },
      {
        name: "Daniel Huang",
        roles: ["Unity Lead"]
      },
      {
        name: "Jonah Sauve",
        roles: ["Music"]
      },
      {
        name: "Zheyu Chen",
        roles: ["Programming"]
      },
      {
        name: "FNU Prakhar",
        roles: ["Programming"]
      },
      {
        name: "Theodore Chen",
        roles: ["Art"]
      },
      {
        name: "Yifei Long",
        roles: ["Narrative"]
      }
    ],

    links: [
      {
        label: "Wiki",
        url: "https://intriguing-profit-513.notion.site/Immunoblast-Wiki-1543b16a52f88068a012ff7ed516eb6c"
      },
      {
        label: "Genetic Library",
        url: "https://intriguing-profit-513.notion.site/Genetic-Library-1543b16a52f880979734cc7c6777e22b"
      }
    ],

    screenshots: [
      {
        src: "/images/projects/immunoblast-shot-1.png",
        alt: "Immunoblast splash art"
      },
      {
        src: "/images/projects/immunoblast-shot-2.png",
        alt: "Immunoblast emblem designs 1"
      },
      {
        src: "/images/projects/immunoblast-shot-3.png",
        alt: "Immunoblast emblem designs 2"
      }
    ]
  },
  {
    slug: "vesuvius",
    title: "Vesuvius",
    shortDescription:
      "A surreal metroidvania where you uncover the secrets of a snowy Mt. Vesuvius and the strange forces twisting its depths.",
    image: "/images/projects/vesuvius-cover.png",
    imageAlt: "Vesuvius Cover Art",

    tagline:
      "A surreal metroidvania where you uncover the secrets of a snowy Mt. Vesuvius, its mysterious cult, and the strange forces twisting its depths.",

    links: [
      {
        label: "Play Demo",
        url: "https://l1ryx.itch.io/vesuvius"
      },
      {
        label: "Visit Website",
        url: "https://vesuviusgame.com"
      },
      {
        label: "Steam Page",
        url: "https://store.steampowered.com/app/4557830/Vesuvius/"
      }
    ],

    about: [
      "Set on a reimagined Mt. Vesuvius, you are to uncover the mystery of a vanished cult that disappeared into the mountain years ago. Within its depths, you will traverse a series of biomes that defy logic — lush forests, icy caves, tranquil lakes, and more — all hidden beneath the snow. Reality often bends, leaving questions on what is real as you navigate shifting landscapes and uncover the mountain’s secrets.",
      "You will navigate the world through precise platforming, engage in combat with mysterious foes, embark on quests with enigmatic NPCs, and uncover the story woven into the mountain’s surreal environments. Along the way, you’ll discover new abilities that allow you to explore further, unlocking secrets hidden in every corner of this sprawling, interconnected world."
    ],

    team: [
      {
        name: "Shawn Guo",
        roles: ["Creative Lead", "Programming", "Audio", "Art"]
      },
      {
        name: "Brett Wolfinger",
        roles: ["Technical Lead", "Programming", "Art"]
      }
    ],

    screenshots: [
      {
        src: "/images/projects/vesuvius-shot-1.png",
        alt: "Vesuvius gameplay screenshot 1"
      },
      {
        src: "/images/projects/vesuvius-shot-2.png",
        alt: "Vesuvius gameplay screenshot 2"
      },
      {
        src: "/images/projects/vesuvius-shot-3.png",
        alt: "Vesuvius gameplay screenshot 3"
      }
    ]
  },
  {
    slug: "merchant-squabble",
    title: "Merchant Squabble",
    status: "archived",
    shortDescription:
      "A long-term strategy card game where players build paths to collect resources and outmaneuver rivals.",
    image: "/images/projects/merchant-cover.png",
    imageAlt: "Merchant Squabble Cover Art",
    tagline: "A long-term strategy card game where players build paths to collect resources and outmaneuver rivals.",
    about: [
      "This long-term strategy card game puts you in the shoes of a merchant navigating a new territory, where you must expand your business and outsmart competitors. The game blends strategic card play with resource management, as you carve paths across the land to collect valuable resources. Each path you lay gives you control over surrounding resource tiles, which can be spent on useful cards and actions. However, expanding your path comes at a cost, requiring you to sacrifice sections of it for greater rewards.",
      "Players face both friendly and aggressive visitors, paying in resources to hire ally cards to defend the business while also disrupting the business of rivals. Engage in combat by sending fighter cards against opponents to weaken their operations, and ultimately, take over the land to force your competitors out of business. The game offers solo play or competitive multiplayer for up to three players.",
      "Inspired by a variety of strategy card games, this digital board game combines depth and tactical decision-making, offering a unique blend of strategic resource management and combat. Playable directly in your browser, the game is designed to be accessible yet challenging, providing a satisfying experience for strategy lovers and fans of complex board games."
    ],

    team: [
      {
        name: "Maria M. Movsheva",
        roles: ["Programming", "Art"]
      }
    ],

    screenshots: [
      {
        src: "/images/projects/squabble-shot-1.png",
        alt: "Merchant Squabble gameplay screenshot 1"
      },
      {
        src: "/images/projects/squabble-shot-2.png",
        alt: "Merchant Squabble gameplay screenshot 2"
      },
      {
        src: "/images/projects/squabble-shot-3.png",
        alt: "Merchant Squabble gameplay screenshot 3"
      }
    ]
  },
  {
    slug: "project-greyclaw",
    title: "Project Greyclaw",
    shortDescription:
      "A dystopian sci-fi horror game inspired by Five Nights at Freddy's where you work as a technician inside a massive entertainment center.",
    image: "/images/projects/greyclaw-cover.png",
    imageAlt: "Project Greyclaw Cover Art",

    tagline:
      "A Horror-FPS where you return to Freddy Fazbear's Pizzaplex as a technician to fix what's broken and uncover a disturbing government conspiracy.",

    about: [
      "In the 2030s, the United States was losing the global AI race after a series of devastating cyberattacks.",
      "Desperate, the US government looked to the mysterious technology of the late William Afton, a genius roboticist and serial killer from the previous century.",
      "Soon after, the newly-founded Department of Leisure began erecting Federal Entertainment Centers (FEC) across the country.",
      "These FECs were used to covertly harvest Remnant from millions of citizens, who would live in these boundless facilities indefinitely.",
      "The first of these locations was named Freddy Fazbear's Pizza Plex."
    ],

    team: [
      {
        name: "Marcus King",
        roles: ["Project Lead", "3D Artist"]
      },
      {
        name: "Michael Kim",
        roles: ["Programmer"]
      },
      {
        name: "Mehr Khosla",
        roles: ["Programmer"]
      },
      {
        name: "Samuel Muzac",
        roles: ["Programmer"]
      },
      {
        name: "MacPhearson Strassberg",
        roles: ["Programmer"]
      },
      {
        name: "Sudh Kalaga",
        roles: ["Composer", "Sound Designer"]
      },
      {
        name: "Shawn Guo",
        roles: ["Review Board"]
      },
      {
        name: "Johnny Shen",
        roles: ["Review Board"]
      }
    ],

    links: [
      {
        label: "Game Jolt Page",
        url: "https://gamejolt.com/games/SBPG/864618"
      }
    ],

    screenshots: [
      {
        src: "/images/projects/greyclaw-shot-1.png",
        alt: "Project Greyclaw Chica infection concept art"
      },
      {
        src: "/images/projects/greyclaw-shot-2.png",
        alt: "Project Greyclaw Fazwrench tool concept art"
      },
      {
        src: "/images/projects/greyclaw-shot-3.png",
        alt: "Project Greyclaw coilbow weapon concept art"
      }
    ]
  },

  // --- Project Archive -----------------------------------------------------
  // Completed games. Fill in shortDescription / tagline / about / image /
  // screenshots as info is gathered, and per-game roles on team members
  // (empty roles render as just the name).
  {
    slug: "adsomnia",
    title: "ADSOMNIA!",
    status: "archived",
    shortDescription: "",
    team: [
      { name: "Shang (Shawn) Guo", roles: [] },
      { name: "Patrick Sullivan", roles: [] },
      { name: "Prakhar Prakhar", roles: [] }
    ]
  },
  {
    slug: "deja-you",
    title: "Deja You",
    status: "archived",
    shortDescription: "",
    team: [
      { name: "Shang (Shawn) Guo", roles: [] },
      { name: "Samuel Huang", roles: [] },
      { name: "Jiaming (Johnny) Shen", roles: [] }
    ]
  },
  {
    slug: "ducks-afar",
    title: "Ducks Afar",
    status: "archived",
    shortDescription: "",
    team: [
      { name: "Shang (Shawn) Guo", roles: [] }
    ]
  },
  {
    slug: "evershore",
    title: "Evershore",
    status: "archived",
    shortDescription: "",
    team: [
      { name: "Samuel Huang", roles: [] },
      { name: "Marcus King", roles: [] }
    ]
  },
  {
    slug: "gridlock",
    title: "Gridlock",
    status: "archived",
    shortDescription: "",
    team: [
      { name: "Kenneth Elsman", roles: [] }
    ]
  },
  {
    slug: "hijax",
    title: "Hijax",
    status: "archived",
    shortDescription: "",
    team: [
      { name: "Megan Lincicum", roles: [] }
    ]
  },
  {
    slug: "love-language",
    title: "Love Language",
    status: "archived",
    shortDescription: "",
    team: [
      { name: "Shang (Shawn) Guo", roles: [] },
      { name: "Brett Wolfinger", roles: [] },
      { name: "Samuel Huang", roles: [] },
      { name: "Jiaming (Johnny) Shen", roles: [] },
      { name: "Patrick Sullivan", roles: [] },
      { name: "Trevor Black", roles: [] },
      { name: "Prakhar Prakhar", roles: [] }
    ]
  },
  {
    slug: "project-ingenuity",
    title: "Project Ingenuity",
    status: "archived",
    shortDescription: "",
    team: [
      { name: "Jiaming (Johnny) Shen", roles: [] }
    ]
  },
  {
    slug: "rain-doctor",
    title: "Rain Doctor",
    status: "archived",
    shortDescription: "",
    team: [
      { name: "Shang (Shawn) Guo", roles: [] },
      { name: "Benjamin Albeyta", roles: [] },
      { name: "Teddy Starynski", roles: [] },
      { name: "Jiaming (Johnny) Shen", roles: [] },
      { name: "Megan Lincicum", roles: [] },
      { name: "Patrick Sullivan", roles: [] },
      { name: "Trevor Black", roles: [] },
      { name: "Prakhar Prakhar", roles: [] }
    ]
  },
  {
    slug: "red-gold",
    title: "Red Gold",
    status: "archived",
    shortDescription: "",
    team: [
      { name: "Teddy Starynski", roles: [] },
      { name: "Brady Bock", roles: [] }
    ]
  },
  {
    slug: "rogue-ricochet",
    title: "Rogue Ricochet",
    status: "archived",
    shortDescription: "",
    team: [
      { name: "Teddy Starynski", roles: [] },
      { name: "Brady Bock", roles: [] }
    ]
  },
  {
    slug: "shelling-out",
    title: "Shelling Out",
    status: "archived",
    shortDescription: "",
    team: [
      { name: "Teddy Starynski", roles: [] },
      { name: "Brady Bock", roles: [] }
    ]
  },
  {
    slug: "shepherd-of-dreams",
    title: "Shepherd of Dreams",
    status: "archived",
    shortDescription: "",
    team: [
      { name: "Benjamin Albeyta", roles: [] }
    ]
  },
  {
    slug: "taco-and-bleu",
    title: "Taco and Bleu",
    status: "archived",
    shortDescription: "",
    team: [
      { name: "Andreas Jaramillo", roles: [] }
    ]
  },
]