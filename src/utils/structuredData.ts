import type { Project } from "../data/projects";

// JSON-LD (schema.org) blocks for search engines. Rendered invisibly by Layout via its
// `jsonLd` prop. Validate changes with https://search.google.com/test/rich-results

const SITE = "https://www.hopkinsgamedevsociety.com";
const ORGANIZATION_ID = `${SITE}/#organization`;

const abs = (path: string) => new URL(path, SITE).href;

/** The club itself — emitted on Home and About so Google treats it as one entity. */
export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Hopkins Game Dev Society",
  alternateName: ["Johns Hopkins Game Development Society", "HGDS"],
  url: `${SITE}/`,
  logo: abs("/images/hgds-logo.png"),
  email: "hopkinsgamedevclub@gmail.com",
  description:
    "A community of game developers at Johns Hopkins University building games, collaborating on projects, and helping students grow as designers, artists, programmers, and audio creators.",
  parentOrganization: {
    "@type": "CollegeOrUniversity",
    name: "Johns Hopkins University",
    url: "https://www.jhu.edu/",
  },
  sameAs: [
    "https://discord.gg/XnWkcpeRhp",
    "https://hopkins-game-dev-society.itch.io/",
  ],
};

/** Tells Google which name to show for the site in search results (home page only). */
export const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Hopkins Game Dev Society",
  alternateName: ["Johns Hopkins Game Development Society", "HGDS"],
  url: `${SITE}/`,
  publisher: { "@id": ORGANIZATION_ID },
};

/**
 * A game's detail page, built entirely from its projects.ts entry. Fields the entry
 * doesn't have are left out rather than filled with placeholders.
 */
export function videoGame(project: Project, images: string[]) {
  // Fullest text available: the about paragraphs, else the tagline or card blurb.
  const description =
    project.about?.join(" ").trim() ||
    project.tagline?.trim() ||
    project.shortDescription?.trim() ||
    undefined;

  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: project.title,
    url: abs(`/projects/${project.slug}/`),
    description,
    image: images.length ? images.map(abs) : undefined,
    author: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: organization.name,
    },
    creator: project.team?.length
      ? project.team.map((member) => ({ "@type": "Person", name: member.name }))
      : undefined,
    // itch.io, Steam, Game Jolt, wiki pages — other pages about this same game.
    sameAs: project.links?.length
      ? project.links.map((link) => link.url)
      : undefined,
  };
}
