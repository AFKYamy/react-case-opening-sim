import type { Case, CaseSkin } from "@/features/Case/types/case";
import { classicKnives } from "@/data/knives/classic-knives";
import { createWearPrices } from "@/core/lib/createWearPrices";

const csgoWeaponCaseSkinSources = [
    "CS:GO Weapon Case",
];

const csgoWeaponCaseImages = import.meta.glob<string>(
    "@/core/assets/cases/csgo-weapon-case/*.png",
    {
        eager: true,
        import: "default",
    },
);

const csgoWeaponCaseImagesById = Object.fromEntries(
    Object.entries(csgoWeaponCaseImages).map(([path, image]) => {
        const fileName = path.split("/").pop() ?? "";

        return [fileName.replace(".png", ""), image];
    }),
);

const getCsgoWeaponCaseImage = (id: string) => csgoWeaponCaseImagesById[id] ?? "";

const csgoWeaponCaseSkins: CaseSkin[] = [
    {
        id: "ak-47-case-hardened",
        skin: "Case Hardened",
        weapon: "AK-47",
        category: "skin",
        sources: csgoWeaponCaseSkinSources,
        rarity: "Classified",
        prices: createWearPrices(192.66, 714.25),
        image: getCsgoWeaponCaseImage("ak-47-case-hardened"),
    },
    {
        id: "awp-lightning-strike",
        skin: "Lightning Strike",
        weapon: "AWP",
        category: "skin",
        sources: csgoWeaponCaseSkinSources,
        rarity: "Covert",
        prices: createWearPrices(570.13, 612.72),
        image: getCsgoWeaponCaseImage("awp-lightning-strike"),
    },
    {
        id: "desert-eagle-hypnotic",
        skin: "Hypnotic",
        weapon: "Desert Eagle",
        category: "skin",
        sources: csgoWeaponCaseSkinSources,
        rarity: "Classified",
        prices: createWearPrices(226.4, 248.17),
        image: getCsgoWeaponCaseImage("desert-eagle-hypnotic"),
    },
    {
        id: "glock-18-dragon-tattoo",
        skin: "Dragon Tattoo",
        weapon: "Glock-18",
        category: "skin",
        sources: csgoWeaponCaseSkinSources,
        rarity: "Restricted",
        prices: createWearPrices(132.62, 137.25),
        image: getCsgoWeaponCaseImage("glock-18-dragon-tattoo"),
    },
    {
        id: "m4a1-s-dark-water",
        skin: "Dark Water",
        weapon: "M4A1-S",
        category: "skin",
        sources: csgoWeaponCaseSkinSources,
        rarity: "Restricted",
        prices: createWearPrices(75.6, 127.23),
        image: getCsgoWeaponCaseImage("m4a1-s-dark-water"),
    },
    {
        id: "usp-s-dark-water",
        skin: "Dark Water",
        weapon: "USP-S",
        category: "skin",
        sources: csgoWeaponCaseSkinSources,
        rarity: "Restricted",
        prices: createWearPrices(72.8, 127.21),
        image: getCsgoWeaponCaseImage("usp-s-dark-water"),
    },
    {
        id: "sg-553-ultraviolet",
        skin: "Ultraviolet",
        weapon: "SG 553",
        category: "skin",
        sources: csgoWeaponCaseSkinSources,
        rarity: "Mil-Spec",
        prices: createWearPrices(17.15, 61.61),
        image: getCsgoWeaponCaseImage("sg-553-ultraviolet"),
    },
    {
        id: "mp7-skulls",
        skin: "Skulls",
        weapon: "MP7",
        category: "skin",
        sources: csgoWeaponCaseSkinSources,
        rarity: "Mil-Spec",
        prices: createWearPrices(24.81, 25.64),
        image: getCsgoWeaponCaseImage("mp7-skulls"),
    },
    {
        id: "aug-wings",
        skin: "Wings",
        weapon: "AUG",
        category: "skin",
        sources: csgoWeaponCaseSkinSources,
        rarity: "Mil-Spec",
        prices: createWearPrices(15.84, 18.67),
        image: getCsgoWeaponCaseImage("aug-wings"),
    },
];

export const csgoWeaponCase: Case = {
    id: "csgo-weapon-case",
    name: "CS:GO Weapon Case",
    collection: "CS:GO Weapon Case",
    openPrice: 161.49,
    skins: csgoWeaponCaseSkins,
    knives: classicKnives,
    image: getCsgoWeaponCaseImage("csgo-weapon-case"),
};
