import type { Case, CaseSkin } from "@/features/Case/types/case";
import { classicKnives } from "@/data/knives/classic-knives";
import operationBravoCaseImage from "@/core/assets/cases/operation-bravo-case/operation-bravo-case.png";
import ak47FireSerpentImage from "@/core/assets/cases/operation-bravo-case/ak-47-fire-serpent.png";
import awpGraphiteImage from "@/core/assets/cases/operation-bravo-case/awp-graphite.png";
import desertEagleGoldenKoiImage from "@/core/assets/cases/operation-bravo-case/desert-eagle-golden-koi.png";
import dualBerettasBlackLimbaImage from "@/core/assets/cases/operation-bravo-case/dual-berettas-black-limba.png";
import g3sg1DemeterImage from "@/core/assets/cases/operation-bravo-case/g3sg1-demeter.png";
import galilArShatteredImage from "@/core/assets/cases/operation-bravo-case/galil-ar-shattered.png";
import m4a1sBrightWaterImage from "@/core/assets/cases/operation-bravo-case/m4a1-s-bright-water.png";
import m4a4ZirkaImage from "@/core/assets/cases/operation-bravo-case/m4a4-zirka.png";
import mac10GravenImage from "@/core/assets/cases/operation-bravo-case/mac-10-graven.png";
import novaTempestImage from "@/core/assets/cases/operation-bravo-case/nova-tempest.png";
import p2000OceanFoamImage from "@/core/assets/cases/operation-bravo-case/p2000-ocean-foam.png";
import p90EmeraldDragonImage from "@/core/assets/cases/operation-bravo-case/p90-emerald-dragon.png";
import sg553WaveSprayImage from "@/core/assets/cases/operation-bravo-case/sg-553-wave-spray.png";
import ump45BonePileImage from "@/core/assets/cases/operation-bravo-case/ump-45-bone-pile.png";
import uspsOvergrowthImage from "@/core/assets/cases/operation-bravo-case/usp-s-overgrowth.png";

const operationBravoSkinSources = [
    "The Bravo Collection",
    "Operation Bravo Case",
];

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
        image: ak47FireSerpentImage,
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
        image: desertEagleGoldenKoiImage,
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
        image: p90EmeraldDragonImage,
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
        image: awpGraphiteImage,
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
        image: p2000OceanFoamImage,
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
        image: m4a4ZirkaImage,
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
        image: mac10GravenImage,
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
        image: uspsOvergrowthImage,
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
        image: m4a1sBrightWaterImage,
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
        image: galilArShatteredImage,
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
        image: dualBerettasBlackLimbaImage,
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
        image: g3sg1DemeterImage,
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
        image: sg553WaveSprayImage,
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
        image: ump45BonePileImage,
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
        image: novaTempestImage,
    }
];

export const operationBravoCase: Case = {
    id: "operation-bravo-case",
    name: "Operation Bravo Case",
    collection: "The Bravo Collection",
    openPrice: 87.29,
    skins: operationBravoSkins,
    knives: classicKnives,
    image: operationBravoCaseImage,
};
