import { useState } from "react";
import { useGameStore } from "@/store/gameStore";
import type { InventoryItem } from "../types/inventory";

export default function useInventory() {
    const inventoryItems = useGameStore((state) => state.inventoryItems);
    const sellInventoryItem = useGameStore((state) => state.sellInventoryItem);
    const [itemPendingSale, setItemPendingSale] = useState<InventoryItem | null>(null);

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
            inventoryItems,
            itemPendingSale,
        },
        setters: {
            setItemPendingSale,
        },
        actions: {
            cancelSale,
            confirmSale,
        },
    };
}
