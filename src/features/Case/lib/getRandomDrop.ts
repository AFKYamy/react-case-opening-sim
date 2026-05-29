import type { Case, CaseItem } from "../types/case";
import { dropRates, type DropRate } from "./dropRates";
import { getRandomItem } from "./getRandomItem";

const getItemsForDropRate = (selectedCase: Case, dropRate: DropRate): CaseItem[] => {
    if (dropRate.type === "knife") {
        return selectedCase.knives;
    }

    return selectedCase.skins.filter((skin) => skin.rarity === dropRate.rarity);
};

export const getRandomDrop = (selectedCase: Case): CaseItem | null => {
    const availableDropRates = dropRates
        .map((dropRate) => ({
            ...dropRate,
            items: getItemsForDropRate(selectedCase, dropRate),
        }))
        .filter((dropRate) => dropRate.items.length > 0);
    const totalChance = availableDropRates.reduce((total, dropRate) => total + dropRate.chance, 0);
    let roll = Math.random() * totalChance;

    for (const dropRate of availableDropRates) {
        roll -= dropRate.chance;

        if (roll <= 0) {
            return getRandomItem(dropRate.items);
        }
    }

    const fallbackDropRate = availableDropRates.at(-1);
    return fallbackDropRate ? getRandomItem(fallbackDropRate.items) : null;
};
