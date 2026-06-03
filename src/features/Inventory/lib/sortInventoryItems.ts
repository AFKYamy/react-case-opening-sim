import type { ItemRarity } from "@/features/Case/types/case";
import type { InventoryItem } from "../types/inventory";

export type InventorySortMode = "newest" | "rarity";

const raritySortRank: Record<ItemRarity, number> = {
    "Rare Special Item": 5,
    Covert: 4,
    Classified: 3,
    Restricted: 2,
    "Mil-Spec": 1,
};

const sortByRarityAndPrice = (inventoryItems: InventoryItem[]) => {
    return inventoryItems
        .map((inventoryItem, index) => ({ inventoryItem, index }))
        .sort((left, right) => {
            const rarityDifference =
                raritySortRank[right.inventoryItem.item.rarity] - raritySortRank[left.inventoryItem.item.rarity];

            if (rarityDifference !== 0) {
                return rarityDifference;
            }

            const priceDifference = right.inventoryItem.sellPrice - left.inventoryItem.sellPrice;

            if (priceDifference !== 0) {
                return priceDifference;
            }

            return left.index - right.index;
        })
        .map(({ inventoryItem }) => inventoryItem);
};

export const sortInventoryItems = (inventoryItems: InventoryItem[], sortMode: InventorySortMode) => {
    if (sortMode === "rarity") {
        return sortByRarityAndPrice(inventoryItems);
    }

    return inventoryItems;
};
