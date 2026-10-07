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
      "An immune system action game.",
    image: "/images/projects/immunoblast-cover.png",
    imageAlt: "Immunoblast Cover Art",

    tagline:
      "An immune system action game.",

    about: [
      "Winner of the Hopkins Game Dev Society 2024 Game Design Jam",
      "Unlike traditional \"edutainment\" titles, which often feel more like chores than entertainment, Immunoblast blends fast-paced, skill-based combat and immersive storytelling with real-world biological accuracy. The game draws inspiration from titles like Armored Core VI, Dead Cells, and Risk of Rain, delivering 2D action elements, powerful build making, and mission-based combat levels, while secretly teaching players about the immune system.",
      "Players take on the role of AC-018 \"Panacea,\" an adaptive bio-robot tasked with protecting a human host from infections, cancer, and autoimmune conditions. Core mechanics include acquiring and combining \"genetic abilities,\" each inspired by real-world biology, such as cytokine pathways, viral suppression, and antibody weaponry. Panacea deploys for missions all across the body, but sometimes you must choose where to deploy, impacting the story. In a combat perspective, the game’s Inflammation system offers players a risk-reward balance, with inflammation making Panacea stronger but at the cost of destabilizing itself.",
      "Immunoblast merges authentic scientific concepts with deep gameplay and emotional storytelling. Interact with the intricate network of characters that is our immune system. Learn about the science behind your powerful weaponry. Explore the shadows and ethics of the Adaptive Cell project. Are you prepared to uncover the truth, face impossible choices, and...",
      "...become the cure?"
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
        label: "Play",
        url: "https://citpyrk.itch.io/immunoblast"
      },
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
        alt: "Immunoblast screenshot 1"
      },
      {
        src: "/images/projects/immunoblast-shot-2.png",
        alt: "Immunoblast screenshot 2"
      },
      {
        src: "/images/projects/immunoblast-shot-3.png",
        alt: "Immunoblast screenshot 3"
      }
    ]
  },
  {
    slug: "vesuvius",
    title: "Vesuvius",
    shortDescription:
      "A surreal metroidvania where you uncover the secrets of a snowy Mt. Vesuvius and its mysterious cult.",
    image: "/images/projects/vesuvius-cover.png",
    imageAlt: "Vesuvius Cover Art",

    tagline:
      "A surreal metroidvania where you uncover the secrets of a snowy Mt. Vesuvius and its mysterious cult.",

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
      "Set on a reimagined Mt. Vesuvius, you are to uncover the mystery of a vanished cult that disappeared into the mountain years ago. Within its depths, you will traverse a series of biomes that defy logic — lush forests, icy caves, tranquil lakes, and more — all hidden beneath the snow. Reality will bend, leaving questions on what is real as you navigate shifting landscapes and uncover the mountain’s secrets.",
      "This is an early demo of Vesuvius! This version (v0.2.0) showcases core mechanics such as movement, combat, exploration, and early sound design. It serves as a testbed for gameplay features and doesn't fully represent the final game's world, visuals, or story.",
      "The objective is to explore the environment and interact with the systems while progressing to the designated endpoint. The expected playtime is ~15 minutes.",
      "This is a work-in-progress demo, and you may encounter bugs or incomplete features. You can report a bug from the main menu."
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
        alt: "Vesuvius screenshot 1"
      },
      {
        src: "/images/projects/vesuvius-shot-2.png",
        alt: "Vesuvius screenshot 2"
      },
      {
        src: "/images/projects/vesuvius-shot-3.png",
        alt: "Vesuvius screenshot 3"
      },
      {
        src: "/images/projects/vesuvius-shot-4.png",
        alt: "Vesuvius screenshot 4"
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
  // Completed games. shortDescription / tagline / about / image / screenshots
  // below were filled from itch.io pages.
  {
    slug: "adsomnia",
    title: "ADSOMNIA!",
    status: "archived",
    shortDescription:
      "Because even your dreams need monetization.",
    image: "/images/projects/adsomnia-cover.png",
    imageAlt: "ADSOMNIA! Cover Art",

    tagline:
      "Because even your dreams need monetization.",

    links: [
      {
        label: "Play",
        url: "https://yeetimameme.itch.io/adsomnia"
      }
    ],

    about: [
      "“Free tier includes ads during REM sleep.” — BrainaSync™ Support You can't afford to renew your Pro subscription, and now when you fall asleep, your BrainaSync™ chip monetizes your mind.",
      "In your dreams, hyper-personalized ads swarm your thoughts. They grow smarter and more invasive the longer they study you. Use ADBLOCK BOMBS to blast through the noise and protect what little (free trial) brain oxygen you have left.",
      "Survive the night and reclaim your mind."
    ],

    team: [
      {
        name: "Shang (Shawn) Guo",
        roles: [
          "Programming",
          "Design"
        ]
      },
      {
        name: "Carly Wang",
        roles: [
          "Design"
        ]
      },
      {
        name: "Patrick Sullivan",
        roles: [
          "Design"
        ]
      },
      {
        name: "Prakhar Prakhar",
        roles: [
          "Programming"
        ]
      }
    ],

    screenshots: [
      {
        src: "/images/projects/adsomnia-shot-1.png",
        alt: "ADSOMNIA! screenshot 1"
      },
      {
        src: "/images/projects/adsomnia-shot-2.png",
        alt: "ADSOMNIA! screenshot 2"
      },
      {
        src: "/images/projects/adsomnia-shot-3.png",
        alt: "ADSOMNIA! screenshot 3"
      },
      {
        src: "/images/projects/adsomnia-shot-4.png",
        alt: "ADSOMNIA! screenshot 4"
      },
      {
        src: "/images/projects/adsomnia-shot-5.png",
        alt: "ADSOMNIA! screenshot 5"
      }
    ]
  },
  {
    slug: "deja-you",
    title: "Deja You",
    status: "archived",
    shortDescription:
      "Set up the future. Stand on the past. A platformer with a time-travel twist.",
    image: "/images/projects/deja-you-cover.png",
    imageAlt: "Deja You Cover Art",

    tagline:
      "Set up the future. Stand on the past. A platformer with a time-travel twist.",

    links: [
      {
        label: "Play",
        url: "https://johnnieshen.itch.io/deja-you"
      }
    ],

    about: [
      "In any given moment we have two options: to step forward into growth or to step back into safety. -Abraham Maslow You exist in a fixed world timeline that loops every X seconds. Each time you rewind, a new Lifetime spawns, replaying your past actions.",
      "But there’s a twist: You have a limited Time Budget. Every second you use eats into it.",
      "Solve puzzles not by mastering movement, but by mastering cooperation across timelines. Across 15 levels inspired by Maslow’s Hierarchy, you'll rise from survival to self-actualization, one lifetime at a time."
    ],

    team: [
      {
        name: "Shang (Shawn) Guo",
        roles: [
          "Programming",
          "Audio"
        ]
      },
      {
        name: "Samuel Huang",
        roles: [
          "Design",
          "Programming"
        ]
      },
      {
        name: "Jiaming (Johnny) Shen",
        roles: [
          "Programming"
        ]
      },
      {
        name: "Megan Lincicum",
        roles: [
          "Art"
        ]
      },
      {
        name: "Jiyun Guo",
        roles: [
          "Art"
        ]
      },
      {
        name: "Mason Valentine",
        roles: [
          "Audio"
        ]
      }
    ],

    screenshots: [
      {
        src: "/images/projects/deja-you-shot-1.png",
        alt: "Deja You screenshot 1"
      },
      {
        src: "/images/projects/deja-you-shot-2.png",
        alt: "Deja You screenshot 2"
      },
      {
        src: "/images/projects/deja-you-shot-3.png",
        alt: "Deja You screenshot 3"
      },
      {
        src: "/images/projects/deja-you-shot-4.png",
        alt: "Deja You screenshot 4"
      }
    ]
  },
  {
    slug: "ducks-afar",
    title: "Ducks Afar",
    status: "archived",
    shortDescription:
      "Your ducks are lost among quiet planets.",
    image: "/images/projects/ducks-afar-cover.png",
    imageAlt: "Ducks Afar Cover Art",

    tagline:
      "Your ducks are lost among quiet planets.",

    links: [
      {
        label: "Play",
        url: "https://l1ryx.itch.io/ducks-afar"
      }
    ],

    about: [
      "“This is a short experience. It will be over before you know it.”",
      "— You, to yourself",
      "You are a planetary field researcher stationed far from home. The ducks in your care have wandered across a distant solar system.",
      "To bring them back, you’ll prepare meals from sealed packs of HARDWORMS, highly magnetic resources that can’t be split or combined by hand. Your ducks insist on eating exact portions: not any more, not any less.",
      "Ancient machines scattered across each planet are the only way to transform what you have into what you need. Learn how each mechanism changes your supply and lure each duck out, one quiet planet at a time."
    ],

    team: [
      {
        name: "Shang (Shawn) Guo",
        roles: [
          "Programming",
          "Design",
          "Art",
          "Music"
        ]
      },
      {
        name: "Carly Wang",
        roles: [
          "Writing",
          "Art"
        ]
      }
    ],

    screenshots: [
      {
        src: "/images/projects/ducks-afar-shot-1.png",
        alt: "Ducks Afar screenshot 1"
      },
      {
        src: "/images/projects/ducks-afar-shot-2.png",
        alt: "Ducks Afar screenshot 2"
      },
      {
        src: "/images/projects/ducks-afar-shot-3.png",
        alt: "Ducks Afar screenshot 3"
      },
      {
        src: "/images/projects/ducks-afar-shot-4.png",
        alt: "Ducks Afar screenshot 4"
      },
      {
        src: "/images/projects/ducks-afar-shot-5.png",
        alt: "Ducks Afar screenshot 5"
      },
      {
        src: "/images/projects/ducks-afar-shot-6.png",
        alt: "Ducks Afar screenshot 6"
      },
      {
        src: "/images/projects/ducks-afar-shot-7.png",
        alt: "Ducks Afar screenshot 7"
      },
      {
        src: "/images/projects/ducks-afar-shot-8.png",
        alt: "Ducks Afar screenshot 8"
      }
    ]
  },
  {
    slug: "evershore",
    title: "Evershore",
    status: "archived",
    shortDescription:
      "A peaceful island trip held together by ritual.",
    image: "/images/projects/evershore-cover.jpeg",
    imageAlt: "Evershore Cover Art",

    tagline:
      "A peaceful island trip held together by ritual.",

    links: [
      {
        label: "Play",
        url: "https://ha1f-dev.itch.io/evershore"
      }
    ],

    about: [
      "Lull, Wind, Flame, and Blood. Evershore is a quiet isometric island game about routines, rituals, and waiting for the sea to change.",
      "Explore a small village, break windmills, light lanterns, dispel annoyances, and help the locals prepare for departure.",
      "When the water finally stills, make sure you’re ready for what comes next."
    ],

    team: [
      {
        name: "Samuel Huang",
        roles: []
      },
      {
        name: "Marcus King",
        roles: []
      },
      {
        name: "Liam Housenbold",
        roles: []
      }
    ],

    screenshots: [
      {
        src: "/images/projects/evershore-shot-1.png",
        alt: "Evershore screenshot 1"
      },
      {
        src: "/images/projects/evershore-shot-2.png",
        alt: "Evershore screenshot 2"
      },
      {
        src: "/images/projects/evershore-shot-3.png",
        alt: "Evershore screenshot 3"
      }
    ]
  },
  {
    slug: "hijax",
    title: "Hijax",
    status: "archived",
    shortDescription:
      "spread to the brain",
    image: "/images/projects/hijax-cover.png",
    imageAlt: "Hijax Cover Art",

    tagline:
      "spread to the brain",

    links: [
      {
        label: "Play",
        url: "https://laserdice.itch.io/hijax"
      }
    ],

    about: [
      "Play a parasite attempting to reach its host's brain."
    ],

    team: [
      {
        name: "Megan Lincicum",
        roles: []
      },
      {
        name: "Seiya Lincicum",
        roles: []
      }
    ],
  },
  {
    slug: "love-language",
    title: "Love Language",
    status: "archived",
    shortDescription:
      "Your date is alright, but you are not...",
    image: "/images/projects/love-language-cover.png",
    imageAlt: "Love Language Cover Art",

    tagline:
      "Your date is alright, but you are not...",

    links: [
      {
        label: "Play",
        url: "https://hopkins-game-dev-society.itch.io/love-language"
      }
    ],

    about: [
      "You ever notice how coffee shops sound like the universe? Constant background noise, with little bursts of chaos.",
      "Time to break out of your shell! You've always struggled to put yourself out there, but your chance is finally there- you have a date!",
      "Talk with them! They seem like a good person, right...?",
      "...",
      "No?",
      "Why?",
      "N̶o̶,̵ ̶t̸h̷a̴t̴'̸s̶ ̸j̵u̷s̵t̵ ̶y̶o̷u̶.̴.̴.̸.̷",
      "T̷h̷e̵y̷ ̸a̴r̴e̶ ̵d̷e̷f̷i̴n̵i̴t̵e̴l̴y̸ ̶n̴o̸t̸.̸",
      "D̵̙̊Ö̵̰́N̶͖͠'̷̱̌T̶̰͊ ̴͉̓P̵͌͜A̷̡͛N̵̯̔I̸̦̕C̴͇͑!"
    ],

    team: [
      {
        name: "Shang (Shawn) Guo",
        roles: [
          "Production",
          "Programming",
          "Audio"
        ]
      },
      {
        name: "Brett Wolfinger",
        roles: [
          "Production",
          "Programming"
        ]
      },
      {
        name: "Samuel Huang",
        roles: [
          "Design",
          "Writing"
        ]
      },
      {
        name: "Jiaming (Johnny) Shen",
        roles: [
          "Production",
          "Programming"
        ]
      },
      {
        name: "Patrick Sullivan",
        roles: [
          "Audio"
        ]
      },
      {
        name: "Trevor Black",
        roles: []
      },
      {
        name: "Prakhar Prakhar",
        roles: [
          "Design",
          "Writing"
        ]
      }
    ],

    screenshots: [
      {
        src: "/images/projects/love-language-shot-1.png",
        alt: "Love Language screenshot 1"
      },
      {
        src: "/images/projects/love-language-shot-2.png",
        alt: "Love Language screenshot 2"
      },
      {
        src: "/images/projects/love-language-shot-3.png",
        alt: "Love Language screenshot 3"
      },
      {
        src: "/images/projects/love-language-shot-4.png",
        alt: "Love Language screenshot 4"
      }
    ]
  },
  {
    slug: "project-ingenuity",
    title: "Project Ingenuity",
    status: "archived",
    shortDescription:
      "Salvage parts, design a vehicle and explore alien wilderness in an open world sandbox.",
    image: "/images/projects/project-ingenuity-cover.jpg",
    imageAlt: "Project Ingenuity Cover Art",

    tagline:
      "Salvage parts, design a vehicle and explore alien wilderness in an open world sandbox.",

    links: [
      {
        label: "Play",
        url: "https://johnnieshen.itch.io/mission-ingenuity"
      }
    ],

    about: [
      "You are the command module of a defunct rover and find yourself booting up in the middle of nowhere on an alien planet with no parts attached to you. You need to scavenge for parts scattered around and upgrade your rover, fight hostile enemies of various kinds and build a rocket that will get you out of here to continue your quest for exploration."
    ],

    team: [
      {
        name: "Jiaming (Johnny) Shen",
        roles: [
          "Programming"
        ]
      }
    ],

    screenshots: [
    ]
  },
  {
    slug: "rain-doctor",
    title: "Rain Doctor",
    status: "archived",
    shortDescription:
      "Project currently in development by the Hopkins Game Development Society.",
    image: "/images/projects/rain-doctor-cover.gif",
    imageAlt: "Rain Doctor Cover Art",

    tagline:
      "Project currently in development by the Hopkins Game Development Society.",

    links: [
      {
        label: "itch.io",
        url: "https://hopkins-game-dev-society.itch.io/rain-doctor"
      }
    ],

    about: [
      "Project currently in development by the Hopkins Game Development Society.",
      "Check out our Devlog for updates!"
    ],

    team: [
      {
        name: "Shang (Shawn) Guo",
        roles: []
      },
      {
        name: "Benjamin Albeyta",
        roles: []
      },
      {
        name: "Teddy Starynski",
        roles: []
      },
      {
        name: "Jiaming (Johnny) Shen",
        roles: []
      },
      {
        name: "Megan Lincicum",
        roles: []
      },
      {
        name: "Patrick Sullivan",
        roles: []
      },
      {
        name: "Trevor Black",
        roles: []
      },
      {
        name: "Prakhar Prakhar",
        roles: []
      }
    ],
  },
  {
    slug: "red-gold",
    title: "Red Gold",
    status: "archived",
    shortDescription:
      "Drink the blood of your enemies to survive as a parasite.",
    image: "/images/projects/red-gold-cover.png",
    imageAlt: "Red Gold Cover Art",

    tagline:
      "Drink the blood of your enemies to survive as a parasite.",

    links: [
      {
        label: "Play",
        url: "https://styx50.itch.io/red-gold"
      }
    ],

    about: [
      "In Red Gold, you play as an alien parasite that has taken over a host. The parasite launches attacks made of the host's blood, steadily draining its supply. You must kill enemies in order to replenish your diminishing blood supply. But be careful, theyre trying to kill you, too, to prevent the parasite from spreading across the world!"
    ],

    team: [
      {
        name: "Teddy Starynski",
        roles: []
      },
      {
        name: "Brady Bock",
        roles: []
      }
    ],

    screenshots: [
      {
        src: "/images/projects/red-gold-shot-1.png",
        alt: "Red Gold screenshot 1"
      }
    ]
  },

  {
    slug: "rogue-ricochet",
    title: "Rogue Ricochet",
    status: "archived",
    shortDescription:
      "Top down shooter where your bullets ricochet.",
    image: "/images/projects/rogue-ricochet-cover.png",
    imageAlt: "Rogue Ricochet Cover Art",

    tagline:
      "Top down shooter where your bullets ricochet.",

    links: [
      {
        label: "Play",
        url: "https://reddish-blue.itch.io/rogue-ricochet"
      }
    ],

    about: [
      "You were once a researcher in a lab working on new, super strong, super bouncy rubber, but you were kicked out for your ideas on how to make weapons with the new material! You have some bullets made from the material but supplies are running a little low, you've broken into your old lab to steal some more. The lab is guarded by turrets, so you need to fight your way through the lab to reach the coveted rubber. Be careful though! The bullets are very bouncy and will ricochet off everything, hurting you if you're not careful!"
    ],

    team: [
      {
        name: "Teddy Starynski",
        roles: []
      },
      {
        name: "Brady Bock",
        roles: []
      }
    ],
  },
  {
    slug: "shelling-out",
    title: "Shelling Out",
    status: "archived",
    shortDescription:
      "A clicker game where you find shells on the beach.",
    image: "/images/projects/shelling-out-cover.png",
    imageAlt: "Shelling Out Cover Art",

    tagline:
      "A clicker game where you find shells on the beach.",

    links: [
      {
        label: "Play",
        url: "https://reddish-blue.itch.io/shelling-out"
      }
    ],

    about: [
      "A Clicker game where you're trying to find shells on the beach.",
      "Your progress autosaves. Press \"q\" at any time to quit(local not web build)."
    ],

    team: [
      {
        name: "Teddy Starynski",
        roles: []
      },
      {
        name: "Brady Bock",
        roles: []
      }
    ],

    screenshots: [
      {
        src: "/images/projects/shelling-out-shot-1.png",
        alt: "Shelling Out screenshot 1"
      },
      {
        src: "/images/projects/shelling-out-shot-2.png",
        alt: "Shelling Out screenshot 2"
      },
      {
        src: "/images/projects/shelling-out-shot-3.png",
        alt: "Shelling Out screenshot 3"
      }
    ]
  },
  {
    slug: "apply-or-die",
    title: "Apply or Die!",
    status: "archived",
    shortDescription:
      "Apply before you turn 22, or they'll come for you!",
    image: "/images/projects/apply-or-die-cover.png",
    imageAlt: "Apply or Die! Cover Art",

    tagline:
      "Apply before you turn 22, or they'll come for you!",

    links: [
      {
        label: "Play",
        url: "https://hopkins-game-dev-society.itch.io/apply-or-die"
      }
    ],

    about: [
      "You wake up, another soulless and dull day gone down the drain, but then you remember... it's your birthday tomorrow your 22nd birthday...",
      "A new law has been passed declaring that anyone who is unemployed once they turn 22 will be hunted down and shot! And you are still unemployed!",
      "With only 10 minutes left before the end of your life you rush to the computer.",
      "All you need to do to survive is complete the job application before you turn 22. But as we all know, that's easier said than done.",
      "IMPORTANT NOTE: for the in-game username, \"haven\" is supposed to be \"heaven\". Apologies for the typo!"
    ],

    team: [
      {
        name: "Benjamin Albeyta",
        roles: [
          "Direction",
          "Programming",
          "Design"
        ]
      },
      {
        name: "Shawn Guo",
        roles: [
          "Programming",
          "Design"
        ]
      },
      {
        name: "Oscar Munoz",
        roles: [
          "Programming",
          "Design"
        ]
      },
      {
        name: "Antonio Gentile",
        roles: [
          "Music",
          "Design"
        ]
      },
      {
        name: "Teddy Starynski",
        roles: [
          "Art",
          "Design"
        ]
      },
      {
        name: "Samuel Huang",
        roles: [
          "Design"
        ]
      }
    ],

    screenshots: [
      {
        src: "/images/projects/apply-or-die-shot-1.png",
        alt: "Apply or Die! screenshot 1"
      },
      {
        src: "/images/projects/apply-or-die-shot-2.png",
        alt: "Apply or Die! screenshot 2"
      },
      {
        src: "/images/projects/apply-or-die-shot-3.png",
        alt: "Apply or Die! screenshot 3"
      },
      {
        src: "/images/projects/apply-or-die-shot-4.png",
        alt: "Apply or Die! screenshot 4"
      },
      {
        src: "/images/projects/apply-or-die-shot-5.png",
        alt: "Apply or Die! screenshot 5"
      },
      {
        src: "/images/projects/apply-or-die-shot-6.png",
        alt: "Apply or Die! screenshot 6"
      },
      {
        src: "/images/projects/apply-or-die-shot-7.png",
        alt: "Apply or Die! screenshot 7"
      }
    ]
  },
  {
    slug: "farm-tower",
    title: "Farm Tower TD Defense",
    status: "archived",
    shortDescription:
      "Plant crops, place towers, protect your family!",
    image: "/images/projects/farm-tower-cover.png",
    imageAlt: "Farm Tower TD Defense Cover Art",

    tagline:
      "Plant crops, place towers, protect your family!",

    links: [
      {
        label: "Play",
        url: "https://lmalmud.itch.io/farm-tower-td-defense"
      }
    ],

    about: [
      "You are a farmer on a frontier world settling the land. However, there are hungry monsters lurking in the shadows waiting to eat your crops and livestock. But the land is really good for growing crops. Get money by farming during the daytime and buying towers to defend your land from the monsters at night. You’ll have to manage your time wisely, fight bravely, and act strategically to ensure the survival of yourself and your crops."
    ],

    team: [
      {
        name: "Teddy Starynski",
        roles: []
      },
      {
        name: "Brady Bock",
        roles: []
      }
    ],

    screenshots: [
      {
        src: "/images/projects/farm-tower-shot-1.png",
        alt: "Farm Tower TD Defense screenshot 1"
      },
      {
        src: "/images/projects/farm-tower-shot-2.png",
        alt: "Farm Tower TD Defense screenshot 2"
      }
    ]
  },
  {
    slug: "lasso-lake",
    title: "Lasso Lake",
    status: "archived",
    shortDescription:
      "Round up cattle with a lasso after a storm knocks down the ranch fence.",
    image: "/images/projects/lasso-lake-cover.png",
    imageAlt: "Lasso Lake Cover Art",

    tagline:
      "Round up cattle with a lasso after a storm knocks down the ranch fence.",

    links: [
      {
        label: "Play",
        url: "https://styx50.itch.io/lasso-lake"
      }
    ],

    about: [
      "Howdy partner! Welcome to Lasso Lake, the most prestigious cattle ranch this side of the mississippi. Now, normally we're not so disorganized and would have a proper welcome party for your first day, but a storm blew in last night and knocked down all our fence. We managed to get them back up, but we're in some dire need of help lassoin' those cattle and getting them back to their pen. Can you help us out?"
    ],

    team: [
      {
        name: "Teddy Starynski",
        roles: []
      },
      {
        name: "Brady Bock",
        roles: []
      }
    ],

    screenshots: [
      {
        src: "/images/projects/lasso-lake-shot-1.png",
        alt: "Lasso Lake screenshot 1"
      }
    ]
  }
]
