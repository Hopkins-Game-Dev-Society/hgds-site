export interface Member {
  name: string;
  classYear: string;
  roles: string[];
  games?: string[];
  // Optional headshot, e.g. "/images/board/brady.jpg" — shown on the About
  // page board section for current officers when present.
  photo?: string;
}

export const members: Member[] = [
  {
    name: "Maria M. Movsheva",
    classYear: "Class of 2024",
    roles: ["Art", "Developer", "Designer"],
    games: ["Merchant Squabble"]
  },
  {
    name: "Andreas Jaramillo",
    classYear: "Class of 2025",
    roles: ["President '25-26", "Developer", "Designer"]
  },
  {
    name: "Shang (Shawn) Guo",
    classYear: "Class of 2026",
    roles: ["President '25-26", "Chief of Operations '24-25", "Developer", "Audio", "Designer"],
    games: ["Vesuvius", "Ducks Afar", "Love Language", "Deja You", "ADSOMNIA!", "Rain Doctor"]
  },
  {
    name: "Brett Wolfinger",
    classYear: "Class of 2026",
    roles: ["Technical Director '24-26", "Developer", "Designer"],
    games: ["Vesuvius", "Love Language"]
  },
  {
    name: "Kenneth Elsman",
    classYear: "Class of 2025",
    roles: ["Developer", "Designer"]
  },
  {
    name: "Benjamin Albeyta",
    classYear: "Class of 2027",
    roles: ["Outreach Chair '26-27", "Developer", "Art"],
    games: ["Rain Doctor"]
  },
  {
    name: "Samuel Huang",
    classYear: "Class of 2027",
    roles: ["Technical Director '26-27", "Developer", "Designer"],
    games: ["Immunoblast", "Love Language", "Deja You", "Evershore"]
  },
  {
    name: "Teddy Starynski",
    classYear: "Class of 2027",
    roles: ["Co-President '26-27", "Developer", "Art"],
    games: ["Red Gold", "Sunfall", "Rain Doctor", "Shelling Out", "Rogue Ricochet"],
  },
  {
    name: "Jiaming (Johnny) Shen",
    classYear: "Class of 2026",
    roles: ["Chief of Operations '25-26", "Treasurer '24-25", "Developer", "Designer"],
    games: ["Deja You", "Project Ingenuity", "Love Language", "Rain Doctor"]
  },
  {
    name: "Brady Bock",
    classYear: "Class of 2027",
    roles: ["Co-President '26-27", "Developer"],
    games: ["Red Gold", "Sunfall", "Shelling Out", "Rogue Ricochet"]
  },
  {
    name: "Marcus King",
    classYear: "Class of 2028",
    roles: ["Event Director '25-26", "Developer", "Designer", "Art"],
    games: ["Project Greyclaw", "Evershore"]
  },
  {
    name: "Megan Lincicum",
    classYear: "Class of 2028",
    roles: ["Producer '25-26", "Developer", "Art"],
    games: ["Hijax", "Rain Doctor"]
  },
  {
    name: "Patrick Sullivan",
    classYear: "Class of 2029",
    roles: ["Event Director '26-27", "Developer", "Audio"],
    games: ["Rain Doctor", "Love Language", "ADSOMNIA!"]
  },
  {
    name: "Trevor Black",
    classYear: "Class of 2026",
    roles: ["Developer"],
    games: ["Rain Doctor", "Love Language"]
  },
  {
    name: "Prakhar Prakhar",
    classYear: "Class of 2026",
    roles: ["Community Manager '25-26", "Designer", "Writer"],
    games: ["Rain Doctor", "Love Language", "Immunoblast", "ADSOMNIA!"]
  },
  // Add more members here
];
