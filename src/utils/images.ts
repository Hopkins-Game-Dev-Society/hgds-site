import type { ImageMetadata } from "astro";

// Project art lives in src/assets/projects/ so Astro can optimize it at build time.
// projects.ts still stores plain "/images/projects/<file>" strings — easy for anyone
// to edit — and we resolve them to the imported asset by filename here.
const modules = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/projects/*.{png,jpg,jpeg,webp,avif,gif}",
  { eager: true },
);

const byFilename = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(modules)) {
  const filename = path.split("/").pop();
  if (filename) byFilename.set(filename, mod.default);
}

/**
 * Resolve a stored image path to an optimizable asset.
 * Returns undefined for files intentionally left in public/ (e.g. animated GIFs,
 * which sharp would flatten to a single frame) — callers fall back to a plain <img>.
 */
export function getProjectImage(src?: string): ImageMetadata | undefined {
  if (!src) return undefined;
  const filename = src.split("/").pop();
  return filename ? byFilename.get(filename) : undefined;
}
