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
  // Completed games. shortDescription / tagline / about / image / screenshots
  // below were filled from itch.io pages. Gridlock, Shepherd of Dreams, and
  // Taco and Bleu still have no confirmed itch page.
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
      "You can't afford to renew your Pro subscription, and now when you fall asleep, your BrainaSync chip monetizes your mind. In your dreams, hyper-personalized ads swarm your thoughts and grow smarter the longer they study you.",
      "Use ADBLOCK BOMBS to blast through the noise and protect what little free-trial brain oxygen you have left. Survive the night and reclaim your mind.",
      "Made by Shawn Guo, Carly Wang, Patrick Sullivan, and Prakhar Prakhar in 48 hours for Ctrl + Alt + DMV 2026."
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
      "You exist on a timeline that loops. Each time you rewind, a new Lifetime spawns and replays your past actions. You have a limited Time Budget, and every second you spend eats into it.",
      "The puzzles are about cooperating with yourself across timelines. Fifteen levels, inspired by Maslow's hierarchy, take you from survival to self-actualization, one lifetime at a time.",
      "Built by members of the Johns Hopkins Game Development Society in four days for the 2025 GMTK Game Jam."
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
      "You are a planetary field researcher stationed far from home. The ducks in your care have wandered across a distant solar system, and this is a short experience that will be over before you know it.",
      "To bring them back, you prepare meals from sealed packs of HARDWORMS, magnetic supplies you cannot split or combine by hand. The ducks will only eat an exact portion. Ancient machines on each planet are the only way to turn what you have into what they will take.",
      "The itch demo is the first act."
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
      "Explore a small village, break windmills, light lanterns, dispel annoyances, and help the locals prepare for departure. When the water finally stills, make sure you are ready for what comes next.",
      "Built for the fall 2025 computer graphics course at Johns Hopkins."
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
      "Play a parasite attempting to reach its host's brain.",
    image: "/images/projects/hijax-cover.png",
    imageAlt: "Hijax Cover Art",

    tagline:
      "Play a parasite attempting to reach its host's brain.",

    links: [
      {
        label: "Play",
        url: "https://laserdice.itch.io/hijax"
      }
    ],

    about: [
      "Play a parasite attempting to reach its host's brain. Spread into an adjacent pathway or organ, strengthen an infection you already hold, and bring the fever to level 3 so you can cross the blood-brain barrier.",
      "The higher the fever, the harder the immune system fights back. Made by Megan and Seiya Lincicum for the 2026 Ctrl + Alt + DMV game jam."
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
      "You ever notice how coffee shops sound like the universe? Constant background noise, with little bursts of chaos. You have always struggled to put yourself out there, but you finally have a date. Talk with them. They seem like a good person, right?",
      "The night turns on you. The page insists that no, that's just you, they are definitely not the problem, and you should not panic.",
      "Built by the Johns Hopkins Game Development Society in six days for the 2025 Itch Scream Jam."
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
      "Salvage parts, design a vehicle, and explore an alien wilderness.",
    image: "/images/projects/project-ingenuity-cover.png",
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
      "Published on itch as Mission Ingenuity. You are the command module of a defunct rover and wake up in the middle of nowhere on an alien planet with no parts attached.",
      "Scavenge scattered parts, upgrade the rover, fight the things that live out there, and build a rocket that gets you off the planet so you can keep exploring."
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
      {
        src: "/images/projects/project-ingenuity-shot-1.jpg",
        alt: "Project Ingenuity screenshot 1"
      }
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
      "Project currently in development by the Hopkins Game Development Society. The itch page is a placeholder and points to the devlog for updates."
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
      "You play as an alien parasite that has taken over a host. The parasite launches attacks made of the host's blood, steadily draining its supply. Kill enemies to replenish that blood. They are trying to kill you too, before the parasite spreads."
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
    slug: "rogue-ricochet",
    title: "Rogue Ricochet",
    status: "archived",
    shortDescription:
      "A top-down shooter where your bullets ricochet.",
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
      "You were a lab researcher working on a super-strong, super-bouncy rubber, and you were kicked out for wanting to make weapons with it. Supplies of the bullets you already made are running low, so you break back into the lab to steal more.",
      "Turrets guard the place. The bullets ricochet off everything, and they will hurt you if you are not careful."
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
      "A clicker about finding shells on the beach. Progress autosaves."
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
      "You wake up on the day before your 22nd birthday. A new law says anyone still unemployed at 22 will be hunted down and shot, and you are still unemployed.",
      "You have 10 minutes. Finish the job application before time runs out. Click the on-screen buttons, and search for the clues that let you fill it out. The in-game username has a typo: \"haven\" is supposed to be \"heaven.\"",
      "Made for GMTK 2026."
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
        src: "/images/projects/apply-or-die-shot-2.gif",
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
      "Plant crops, place towers, protect your family.",
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
      "You are a farmer settling a frontier world. The land grows well, and hungry monsters wait in the dark for the crops and the livestock.",
      "Farm during the day to earn money, then buy towers and hold the farm through the night. Manage the time, or you and the crops do not make it."
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
      "Welcome to Lasso Lake, a cattle ranch that lost its fence in a storm. The fences are back up. The cattle are not.",
      "Lasso one cow at a time and get it back to the pen. Made for GMTK 2025."
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
  }
]
