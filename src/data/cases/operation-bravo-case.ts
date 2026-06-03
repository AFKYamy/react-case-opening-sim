import type { Case, CaseSkin } from "@/features/Case/types/case";
import { classicKnives } from "@/data/knives/classic-knives";

const operationBravoSkinSources = [
    "The Bravo Collection",
    "Operation Bravo Case",
];

const operationBravoCaseImages = import.meta.glob<string>(
    "@/core/assets/cases/operation-bravo-case/*.png",
    {
        eager: true,
        import: "default",
    },
);

const operationBravoCaseImagesById = Object.fromEntries(
    Object.entries(operationBravoCaseImages).map(([path, image]) => {
        const fileName = path.split("/").pop() ?? "";

        return [fileName.replace(".png", ""), image];
    }),
);

const getOperationBravoCaseImage = (id: string) => operationBravoCaseImagesById[id] ?? "";

const operationBravoSkins: CaseSkin[] = [
    {
        id: "ak-47-fire-serpent",
        skin: "Fire Serpent",
        weapon: "AK-47",
        category: "skin",
        sources: operationBravoSkinSources,
        rarity: "Covert",
        prices: {
            battleScarred: 625.49,
            wellWorn: 1080.94,
            minimalWear: 1991.83,
            fieldTested: 1536.39,
            factoryNew: 2447.28,
        },
        image: getOperationBravoCaseImage("ak-47-fire-serpent"),
    },
    {
        id: "desert-eagle-golden-koi",
        skin: "Golden Koi",
        weapon: "Desert Eagle",
        category: "skin",
        sources: operationBravoSkinSources,
        rarity: "Covert",
        prices: {
            battleScarred: 237.88,
            wellWorn: 257.8,
            minimalWear: 297.63,
            fieldTested: 277.71,
            factoryNew: 317.54,
        },
        image: getOperationBravoCaseImage("desert-eagle-golden-koi"),
    },
    {
        id: "p90-emerald-dragon",
        skin: "Emerald Dragon",
        weapon: "P90",
        category: "skin",
        sources: operationBravoSkinSources,
        rarity: "Classified",
        prices: {
            battleScarred: 114.15,
            wellWorn: 191.35,
            minimalWear: 345.74,
            fieldTested: 268.54,
            factoryNew: 422.93,
        },
        image: getOperationBravoCaseImage("p90-emerald-dragon"),
    },
    {
        id: "awp-graphite",
        skin: "Graphite",
        weapon: "AWP",
        category: "skin",
        sources: operationBravoSkinSources,
        rarity: "Classified",
        prices: {
            battleScarred: 175.84,
            wellWorn: 179.27,
            minimalWear: 186.12,
            fieldTested: 182.7,
            factoryNew: 189.55,
        },
        image: getOperationBravoCaseImage("awp-graphite"),
    },
    {
        id: "p2000-ocean-foam",
        skin: "Ocean Foam",
        weapon: "P2000",
        category: "skin",
        sources: operationBravoSkinSources,
        rarity: "Classified",
        prices: {
            battleScarred: 139.9,
            wellWorn: 141.82,
            minimalWear: 145.67,
            fieldTested: 143.75,
            factoryNew: 147.59,
        },
        image: getOperationBravoCaseImage("p2000-ocean-foam"),
    },
    {
        id: "m4a4-zirka",
        skin: "Zirka",
        weapon: "M4A4",
        category: "skin",
        sources: operationBravoSkinSources,
        rarity: "Restricted",
        prices: {
            battleScarred: 24.33,
            wellWorn: 45.86,
            minimalWear: 88.92,
            fieldTested: 67.39,
            factoryNew: 110.45,
        },
        image: getOperationBravoCaseImage("m4a4-zirka"),
    },
    {
        id: "mac-10-graven",
        skin: "Graven",
        weapon: "MAC-10",
        category: "skin",
        sources: operationBravoSkinSources,
        rarity: "Restricted",
        prices: {
            battleScarred: 16.73,
            wellWorn: 39.42,
            minimalWear: 84.8,
            fieldTested: 62.11,
            factoryNew: 107.49,
        },
        image: getOperationBravoCaseImage("mac-10-graven"),
    },
    {
        id: "usp-s-overgrowth",
        skin: "Overgrowth",
        weapon: "USP-S",
        category: "skin",
        sources: operationBravoSkinSources,
        rarity: "Restricted",
        prices: {
            battleScarred: 22.29,
            wellWorn: 42.16,
            minimalWear: 81.89,
            fieldTested: 62.03,
            factoryNew: 101.76,
        },
        image: getOperationBravoCaseImage("usp-s-overgrowth"),
    },
    {
        id: "m4a1-s-bright-water",
        skin: "Bright Water",
        weapon: "M4A1-S",
        category: "skin",
        sources: operationBravoSkinSources,
        rarity: "Restricted",
        prices: {
            battleScarred: 40.69,
            wellWorn: 43.06,
            minimalWear: 47.8,
            fieldTested: 45.43,
            factoryNew: 50.17,
        },
        image: getOperationBravoCaseImage("m4a1-s-bright-water"),
    },
    {
        id: "galil-ar-shattered",
        skin: "Shattered",
        weapon: "Galil AR",
        category: "skin",
        sources: operationBravoSkinSources,
        rarity: "Mil-Spec",
        prices: {
            battleScarred: 6.05,
            wellWorn: 16.57,
            minimalWear: 37.6,
            fieldTested: 27.09,
            factoryNew: 48.12,
        },
        image: getOperationBravoCaseImage("galil-ar-shattered"),
    },
    {
        id: "dual-berettas-black-limba",
        skin: "Black Limba",
        weapon: "Dual Berettas",
        category: "skin",
        sources: operationBravoSkinSources,
        rarity: "Mil-Spec",
        prices: {
            battleScarred: 5.67,
            wellWorn: 13.92,
            minimalWear: 30.41,
            fieldTested: 22.16,
            factoryNew: 38.65,
        },
        image: getOperationBravoCaseImage("dual-berettas-black-limba"),
    },
    {
        id: "g3sg1-demeter",
        skin: "Demeter",
        weapon: "G3SG1",
        category: "skin",
        sources: operationBravoSkinSources,
        rarity: "Mil-Spec",
        prices: {
            battleScarred: 5.42,
            wellWorn: 11.49,
            minimalWear: 23.64,
            fieldTested: 17.57,
            factoryNew: 29.71,
        },
        image: getOperationBravoCaseImage("g3sg1-demeter"),
    },
    {
        id: "sg-553-wave-spray",
        skin: "Wave Spray",
        weapon: "SG 553",
        category: "skin",
        sources: operationBravoSkinSources,
        rarity: "Mil-Spec",
        prices: {
            battleScarred: 5.69,
            wellWorn: 11.53,
            minimalWear: 23.21,
            fieldTested: 17.37,
            factoryNew: 29.05,
        },
        image: getOperationBravoCaseImage("sg-553-wave-spray"),
    },
    {
        id: "ump-45-bone-pile",
        skin: "Bone Pile",
        weapon: "UMP-45",
        category: "skin",
        sources: operationBravoSkinSources,
        rarity: "Mil-Spec",
        prices: {
            battleScarred: 6.54,
            wellWorn: 11.64,
            minimalWear: 21.83,
            fieldTested: 16.73,
            factoryNew: 26.92,
        },
        image: getOperationBravoCaseImage("ump-45-bone-pile"),
    },
    {
        id: "nova-tempest",
        skin: "Tempest",
        weapon: "Nova",
        category: "skin",
        sources: operationBravoSkinSources,
        rarity: "Mil-Spec",
        prices: {
            battleScarred: 4.8,
            wellWorn: 8.48,
            minimalWear: 15.83,
            fieldTested: 12.15,
            factoryNew: 19.5,
        },
        image: getOperationBravoCaseImage("nova-tempest"),
    }
];

export const operationBravoCase: Case = {
    id: "operation-bravo-case",
    name: "Operation Bravo Case",
    collection: "The Bravo Collection",
    openPrice: 87.29,
    skins: operationBravoSkins,
    knives: classicKnives,
    image: getOperationBravoCaseImage("operation-bravo-case"),
};
