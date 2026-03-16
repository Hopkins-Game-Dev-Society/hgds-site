export interface TeamMember {
  name: string
  roles: string[]
}

export interface Screenshot {
  src: string
  alt: string
}

export interface Project {
  slug: string
  title: string
  shortDescription: string

  image?: string
  imageAlt?: string
  imageOffsetY?: number

  tagline?: string

  playDemoUrl?: string
  websiteUrl?: string

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
  },
  {
    slug: "immunoblast",
    title: "Immunoblast",
    shortDescription:
      "A 2D action game that combines combat with a unique journey through the microscopic battleground of the human immune system.",
    image: "/images/projects/immunoblast-cover.png",
    imageAlt: "Immunoblast Cover Art",
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

    playDemoUrl: "https://l1ryx.itch.io/vesuvius",
    websiteUrl: "https://vesuviusgame.com",

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
  },
]