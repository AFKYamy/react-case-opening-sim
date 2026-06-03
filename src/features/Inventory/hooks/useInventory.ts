import { useMemo, useState } from "react";
import { useGameStore } from "@/store/gameStore";
import { sortInventoryItems, type InventorySortMode } from "../lib/sortInventoryItems";
import type { InventoryItem } from "../types/inventory";

export default function useInventory() {
    const inventoryItems = useGameStore((state) => state.inventoryItems);
    const sellInventoryItem = useGameStore((state) => state.sellInventoryItem);
    const [itemPendingSale, setItemPendingSale] = useState<InventoryItem | null>(null);
    const [sortMode, setSortMode] = useState<InventorySortMode>("newest");

    const sortedInventoryItems = useMemo(() => sortInventoryItems(inventoryItems, sortMode), [inventoryItems, sortMode]);

    const cancelSale = () => {
        setItemPendingSale(null);
    };

    const confirmSale = () => {
        if (!itemPendingSale) {
            return;
        }

        sellInventoryItem(itemPendingSale.inventoryId);
        setItemPendingSale(null);
    };

    return {
        values: {
            inventoryItems: sortedInventoryItems,
            itemPendingSale,
            sortMode,
        },
        setters: {
            setItemPendingSale,
            setSortMode,
        },
        actions: {
            cancelSale,
            confirmSale,
        },
    };
}
