import type { CaseKnife } from "@/features/Case/types/case";
import { createWearPrices } from "@/core/lib/createWearPrices";

const classicKnifeSources = [
    "Found in 11 cases",
];

const classicKnifeImages = import.meta.glob<string>(
    "@/core/assets/classic-knives/*.png",
    {
        eager: true,
        import: "default",
    },
);

const classicKnifeImagesById = Object.fromEntries(
    Object.entries(classicKnifeImages).map(([path, image]) => {
        const fileName = path.split("/").pop() ?? "";

        return [fileName.replace(".png", ""), image];
    }),
);

const getClassicKnifeImage = (id: string) => classicKnifeImagesById[id] ?? "";

export const classicKnives: CaseKnife[] = [
    { id: "karambit-fade", skin: "Fade", weapon: "★ Karambit", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(1797.97, 2021.31), image: getClassicKnifeImage("karambit-fade") },
    { id: "karambit-case-hardened", skin: "Case Hardened", weapon: "★ Karambit", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(704.91, 1965.81), image: getClassicKnifeImage("karambit-case-hardened") },
    { id: "karambit-slaughter", skin: "Slaughter", weapon: "★ Karambit", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(963.49, 1198.05), image: getClassicKnifeImage("karambit-slaughter") },
    { id: "karambit-vanilla", skin: "Vanilla", weapon: "★ Karambit", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(1090.22), image: getClassicKnifeImage("karambit-vanilla") },
    { id: "karambit-crimson-web", skin: "Crimson Web", weapon: "★ Karambit", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(617.40, 1080.13), image: getClassicKnifeImage("karambit-crimson-web") },
    { id: "m9-bayonet-fade", skin: "Fade", weapon: "★ M9 Bayonet", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(962.07, 1059.63), image: getClassicKnifeImage("m9-bayonet-fade") },
    { id: "m9-bayonet-case-hardened", skin: "Case Hardened", weapon: "★ M9 Bayonet", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(475.63, 1014.21), image: getClassicKnifeImage("m9-bayonet-case-hardened") },
    { id: "m9-bayonet-slaughter", skin: "Slaughter", weapon: "★ M9 Bayonet", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(726.97, 940.90), image: getClassicKnifeImage("m9-bayonet-slaughter") },
    { id: "karambit-blue-steel", skin: "Blue Steel", weapon: "★ Karambit", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(689.12, 848.78), image: getClassicKnifeImage("karambit-blue-steel") },
    { id: "m9-bayonet-vanilla", skin: "Vanilla", weapon: "★ M9 Bayonet", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(829.07), image: getClassicKnifeImage("m9-bayonet-vanilla") },
    { id: "karambit-stained", skin: "Stained", weapon: "★ Karambit", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(525.55, 814.25), image: getClassicKnifeImage("karambit-stained") },
    { id: "m9-bayonet-crimson-web", skin: "Crimson Web", weapon: "★ M9 Bayonet", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(418.96, 806.52), image: getClassicKnifeImage("m9-bayonet-crimson-web") },
    { id: "m9-bayonet-blue-steel", skin: "Blue Steel", weapon: "★ M9 Bayonet", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(486.18, 743.14), image: getClassicKnifeImage("m9-bayonet-blue-steel") },
    { id: "karambit-night", skin: "Night", weapon: "★ Karambit", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(485.29, 662.37), image: getClassicKnifeImage("karambit-night") },
    { id: "bayonet-case-hardened", skin: "Case Hardened", weapon: "★ Bayonet", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(258.65, 578.18), image: getClassicKnifeImage("bayonet-case-hardened") },
    { id: "karambit-scorched", skin: "Scorched", weapon: "★ Karambit", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(439.94, 514.10), image: getClassicKnifeImage("karambit-scorched") },
    { id: "karambit-urban-masked", skin: "Urban Masked", weapon: "★ Karambit", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(419.88, 500.34), image: getClassicKnifeImage("karambit-urban-masked") },
    { id: "karambit-boreal-forest", skin: "Boreal Forest", weapon: "★ Karambit", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(405.83, 497.99), image: getClassicKnifeImage("karambit-boreal-forest") },
    { id: "m9-bayonet-night", skin: "Night", weapon: "★ M9 Bayonet", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(343.18, 490.30), image: getClassicKnifeImage("m9-bayonet-night") },
    { id: "bayonet-fade", skin: "Fade", weapon: "★ Bayonet", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(376.32, 472.75), image: getClassicKnifeImage("bayonet-fade") },
    { id: "karambit-forest-ddpat", skin: "Forest DDPAT", weapon: "★ Karambit", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(406.89, 459.91), image: getClassicKnifeImage("karambit-forest-ddpat") },
    { id: "bayonet-slaughter", skin: "Slaughter", weapon: "★ Bayonet", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(320.12, 449.61), image: getClassicKnifeImage("bayonet-slaughter") },
    { id: "m9-bayonet-stained", skin: "Stained", weapon: "★ M9 Bayonet", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(392.00, 435.58), image: getClassicKnifeImage("m9-bayonet-stained") },
    { id: "bayonet-blue-steel", skin: "Blue Steel", weapon: "★ Bayonet", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(208.84, 428.66), image: getClassicKnifeImage("bayonet-blue-steel") },
    { id: "karambit-safari-mesh", skin: "Safari Mesh", weapon: "★ Karambit", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(398.91, 425.93), image: getClassicKnifeImage("karambit-safari-mesh") },
    { id: "flip-knife-fade", skin: "Fade", weapon: "★ Flip Knife", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(341.86, 390.16), image: getClassicKnifeImage("flip-knife-fade") },
    { id: "bayonet-crimson-web", skin: "Crimson Web", weapon: "★ Bayonet", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(204.99, 377.91), image: getClassicKnifeImage("bayonet-crimson-web") },
    { id: "m9-bayonet-urban-masked", skin: "Urban Masked", weapon: "★ M9 Bayonet", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(323.94, 363.36), image: getClassicKnifeImage("m9-bayonet-urban-masked") },
    { id: "m9-bayonet-scorched", skin: "Scorched", weapon: "★ M9 Bayonet", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(312.67, 354.50), image: getClassicKnifeImage("m9-bayonet-scorched") },
    { id: "m9-bayonet-forest-ddpat", skin: "Forest DDPAT", weapon: "★ M9 Bayonet", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(302.41, 345.55), image: getClassicKnifeImage("m9-bayonet-forest-ddpat") },
    { id: "m9-bayonet-boreal-forest", skin: "Boreal Forest", weapon: "★ M9 Bayonet", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(314.55, 345.20), image: getClassicKnifeImage("m9-bayonet-boreal-forest") },
    { id: "flip-knife-slaughter", skin: "Slaughter", weapon: "★ Flip Knife", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(292.60, 334.55), image: getClassicKnifeImage("flip-knife-slaughter") },
    { id: "m9-bayonet-safari-mesh", skin: "Safari Mesh", weapon: "★ M9 Bayonet", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(308.94, 318.63), image: getClassicKnifeImage("m9-bayonet-safari-mesh") },
    { id: "flip-knife-crimson-web", skin: "Crimson Web", weapon: "★ Flip Knife", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(193.88, 317.90), image: getClassicKnifeImage("flip-knife-crimson-web") },
    { id: "flip-knife-blue-steel", skin: "Blue Steel", weapon: "★ Flip Knife", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(162.72, 290.64), image: getClassicKnifeImage("flip-knife-blue-steel") },
    { id: "bayonet-vanilla", skin: "Vanilla", weapon: "★ Bayonet", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(262.61), image: getClassicKnifeImage("bayonet-vanilla") },
    { id: "bayonet-stained", skin: "Stained", weapon: "★ Bayonet", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(187.97, 254.96), image: getClassicKnifeImage("bayonet-stained") },
    { id: "gut-knife-case-hardened", skin: "Case Hardened", weapon: "★ Gut Knife", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(105.94, 222.09), image: getClassicKnifeImage("gut-knife-case-hardened") },
    { id: "flip-knife-vanilla", skin: "Vanilla", weapon: "★ Flip Knife", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(213.81), image: getClassicKnifeImage("flip-knife-vanilla") },
    { id: "flip-knife-case-hardened", skin: "Case Hardened", weapon: "★ Flip Knife", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(172.12, 208.82), image: getClassicKnifeImage("flip-knife-case-hardened") },
    { id: "bayonet-night", skin: "Night", weapon: "★ Bayonet", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(142.06, 208.36), image: getClassicKnifeImage("bayonet-night") },
    { id: "gut-knife-fade", skin: "Fade", weapon: "★ Gut Knife", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(146.74, 185.64), image: getClassicKnifeImage("gut-knife-fade") },
    { id: "bayonet-urban-masked", skin: "Urban Masked", weapon: "★ Bayonet", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(129.00, 178.31), image: getClassicKnifeImage("bayonet-urban-masked") },
    { id: "flip-knife-night", skin: "Night", weapon: "★ Flip Knife", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(124.06, 173.34), image: getClassicKnifeImage("flip-knife-night") },
    { id: "bayonet-boreal-forest", skin: "Boreal Forest", weapon: "★ Bayonet", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(126.62, 170.52), image: getClassicKnifeImage("bayonet-boreal-forest") },
    { id: "bayonet-scorched", skin: "Scorched", weapon: "★ Bayonet", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(128.34, 170.03), image: getClassicKnifeImage("bayonet-scorched") },
    { id: "flip-knife-stained", skin: "Stained", weapon: "★ Flip Knife", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(127.45, 164.21), image: getClassicKnifeImage("flip-knife-stained") },
    { id: "gut-knife-blue-steel", skin: "Blue Steel", weapon: "★ Gut Knife", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(78.67, 156.97), image: getClassicKnifeImage("gut-knife-blue-steel") },
    { id: "bayonet-forest-ddpat", skin: "Forest DDPAT", weapon: "★ Bayonet", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(136.40, 152.75), image: getClassicKnifeImage("bayonet-forest-ddpat") },
    { id: "bayonet-safari-mesh", skin: "Safari Mesh", weapon: "★ Bayonet", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(136.44, 147.08), image: getClassicKnifeImage("bayonet-safari-mesh") },
    { id: "flip-knife-urban-masked", skin: "Urban Masked", weapon: "★ Flip Knife", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(118.81, 146.07), image: getClassicKnifeImage("flip-knife-urban-masked") },
    { id: "gut-knife-stained", skin: "Stained", weapon: "★ Gut Knife", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(66.93, 139.63), image: getClassicKnifeImage("gut-knife-stained") },
    { id: "gut-knife-slaughter", skin: "Slaughter", weapon: "★ Gut Knife", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(106.07, 135.75), image: getClassicKnifeImage("gut-knife-slaughter") },
    { id: "flip-knife-scorched", skin: "Scorched", weapon: "★ Flip Knife", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(116.03, 134.15), image: getClassicKnifeImage("flip-knife-scorched") },
    { id: "flip-knife-forest-ddpat", skin: "Forest DDPAT", weapon: "★ Flip Knife", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(112.34, 130.54), image: getClassicKnifeImage("flip-knife-forest-ddpat") },
    { id: "flip-knife-safari-mesh", skin: "Safari Mesh", weapon: "★ Flip Knife", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(121.38, 128.41), image: getClassicKnifeImage("flip-knife-safari-mesh") },
    { id: "flip-knife-boreal-forest", skin: "Boreal Forest", weapon: "★ Flip Knife", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(115.63, 125.86), image: getClassicKnifeImage("flip-knife-boreal-forest") },
    { id: "gut-knife-crimson-web", skin: "Crimson Web", weapon: "★ Gut Knife", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(83.49, 119.18), image: getClassicKnifeImage("gut-knife-crimson-web") },
    { id: "gut-knife-night", skin: "Night", weapon: "★ Gut Knife", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(60.75, 76.68), image: getClassicKnifeImage("gut-knife-night") },
    { id: "gut-knife-vanilla", skin: "Vanilla", weapon: "★ Gut Knife", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(71.49), image: getClassicKnifeImage("gut-knife-vanilla") },
    { id: "gut-knife-urban-masked", skin: "Urban Masked", weapon: "★ Gut Knife", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(58.03, 64.85), image: getClassicKnifeImage("gut-knife-urban-masked") },
    { id: "gut-knife-scorched", skin: "Scorched", weapon: "★ Gut Knife", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(55.98, 64.50), image: getClassicKnifeImage("gut-knife-scorched") },
    { id: "gut-knife-forest-ddpat", skin: "Forest DDPAT", weapon: "★ Gut Knife", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(48.57, 64.12), image: getClassicKnifeImage("gut-knife-forest-ddpat") },
    { id: "gut-knife-boreal-forest", skin: "Boreal Forest", weapon: "★ Gut Knife", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(52.71, 63.30), image: getClassicKnifeImage("gut-knife-boreal-forest") },
    { id: "gut-knife-safari-mesh", skin: "Safari Mesh", weapon: "★ Gut Knife", category: "knife", sources: classicKnifeSources, rarity: "Rare Special Item", prices: createWearPrices(50.05, 58.15), image: getClassicKnifeImage("gut-knife-safari-mesh") },
];
