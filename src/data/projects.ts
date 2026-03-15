export interface Project {
  slug: string
  title: string
  shortDescription: string
  image?: string
  imageAlt?: string
  imageOffsetY?: number
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