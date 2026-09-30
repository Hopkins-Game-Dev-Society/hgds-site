export interface Jam {
  name: string
  // e.g. "Fall 2025" or "Jan 24–26, 2025"
  timeframe: string
  // "hosted" = run by HGDS; "participated" = an external jam members joined
  role: "hosted" | "participated"
  location?: string
  description?: string
  // external jam page (itch.io, Global Game Jam, etc.)
  link?: string
  // titles of club games made at this jam — must exactly match titles in projects.ts
  games?: string[]
}

// Add jam history here, newest first. Example shape:
// {
//   name: "HGDS Fall Jam 2026",
//   timeframe: "Fall 2026",
//   role: "hosted",
//   location: "Homewood campus",
//   description: "48 hours, open theme.",
//   link: "https://itch.io/jam/...",
//   games: ["Rain Doctor"],
// },
export const jams: Jam[] = [
]
