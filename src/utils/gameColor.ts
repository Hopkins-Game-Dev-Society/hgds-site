// Consistent color for a game name, shared by member cards and the project archive
const colors = [
  "#e1bf89", // brand-gold
  "#68ace5", // brand-blue-light
  "#89e1c2", // mint
  "#e189a8", // rose
  "#b689e1", // lavender
  "#e19d89", // coral
];

export const getGameColor = (gameName: string): string => {
  let hash = 0;
  for (let i = 0; i < gameName.length; i++) {
    hash = gameName.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};
