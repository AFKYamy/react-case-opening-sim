import type { SkinRarity } from "../types/case";

export type DropRate =
    | {
        type: "skin";
        rarity: SkinRarity;
        chance: number;
    }
    | {
        type: "knife";
        chance: number;
    };

export const dropRates: DropRate[] = [
    { type: "skin", rarity: "Mil-Spec", chance: 79.92 },
    { type: "skin", rarity: "Restricted", chance: 15.98 },
    { type: "skin", rarity: "Classified", chance: 3.2 },
    { type: "skin", rarity: "Covert", chance: 0.64 },
    { type: "knife", chance: 0.26 },
];
