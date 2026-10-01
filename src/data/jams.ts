export interface Jam {
  name: string
  // e.g. "Fall 2025" or "Jan 24-26, 2025". Omit if the date isn't confirmed.
  timeframe?: string
  // "hosted" = run by HGDS; "participated" = an external jam members joined
  role: "hosted" | "participated"
  location?: string
  description?: string
  // external jam page (itch.io, Global Game Jam, etc.)
  link?: string
  // titles of club games made at this jam — must exactly match titles in projects.ts
  games?: string[]
}

// Newest first. Sourced from itch.io project pages; add dates/links as confirmed.
export const jams: Jam[] = [
  {
    name: "Ctrl + Alt + DMV",
    timeframe: "2026",
    role: "participated",
    description:
      "A regional game jam for developers across the DMV area. Our teams built two games over a single weekend.",
    games: ["ADSOMNIA!", "Hijax"],
  },
  {
    name: "Itch Scream Jam",
    timeframe: "2025",
    role: "participated",
    description:
      "A horror-themed jam. Members from across the society spent six days building Love Language together.",
    games: ["Love Language"],
  },
  {
    name: "GMTK Game Jam",
    timeframe: "2025",
    role: "participated",
    description:
      "Game Maker's Toolkit's annual jam, one of the largest in the world. Built in four days.",
    games: ["Deja You"],
  },
  {
    name: "Mini Jam 187: Duality",
    role: "participated",
    description: "A short themed jam built around duality.",
    games: ["Rogue Ricochet"],
  },
  {
    name: "Club Club Jam Jam",
    role: "participated",
    games: ["Shelling Out"],
  },
  {
    name: "HGDS Game Design Jam",
    timeframe: "2024",
    role: "hosted",
    description:
      "Our own on-campus design jam. Immunoblast took first place and is still in development today.",
    games: ["Immunoblast"],
  },
]
