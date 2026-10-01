export interface Jam {
  name: string
  // e.g. "Fall 2025" or "Jan 24-26, 2025". Omit if the date isn't confirmed.
  timeframe?: string
  // "hosted" = run by HGDS; "participated" = an external jam members joined.
  // Omit to show no role badge at all (e.g. a jam that is neither, or unconfirmed).
  role?: "hosted" | "participated"
  location?: string
  // Optional — omit for a bare name/date entry with no blurb
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
    games: ["ADSOMNIA!", "Hijax", "Red Gold"],
  },
  {
    name: "Itch Scream Jam",
    timeframe: "2025",
    role: "participated",
    games: ["Love Language"],
  },
  {
    name: "GMTK Game Jam",
    timeframe: "2025",
    role: "participated",
    games: ["Deja You"],
  },
  {
    name: "Mini Jam 187: Duality",
    role: "participated",
    description: "",
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
    games: ["Immunoblast"],
  },
]
