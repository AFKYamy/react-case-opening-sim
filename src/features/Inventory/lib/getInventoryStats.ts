import type { ItemRarity } from "@/features/Case/types/case";
import type { InventoryItem } from "../types/inventory";

export type InventoryRarityCount = {
    count: number;
    rarity: ItemRarity;
};

export type InventoryStats = {
    totalItems: number;
    rarityCounts: InventoryRarityCount[];
};

export const inventoryRarityOrder: ItemRarity[] = [
    "Rare Special Item",
    "Covert",
    "Classified",
    "Restricted",
    "Mil-Spec",
];

export const getInventoryStats = (inventoryItems: InventoryItem[]): InventoryStats => {
    const countsByRarity = inventoryItems.reduce<Record<ItemRarity, number>>((counts, inventoryItem) => {
        const { rarity } = inventoryItem.item;

        return {
            ...counts,
            [rarity]: counts[rarity] + 1,
        };
    }, {
        "Rare Special Item": 0,
        Covert: 0,
        Classified: 0,
        Restricted: 0,
        "Mil-Spec": 0,
    });

    return {
        totalItems: inventoryItems.length,
        rarityCounts: inventoryRarityOrder.map((rarity) => ({
            count: countsByRarity[rarity],
            rarity,
        })),
    };
};
