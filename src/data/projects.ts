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