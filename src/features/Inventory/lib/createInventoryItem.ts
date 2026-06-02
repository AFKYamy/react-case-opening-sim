import type { PrizeDrop } from "@/features/Case/types/prize";
import type { InventoryItem } from "../types/inventory";

const createInventoryId = () => {
    if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
        return crypto.randomUUID();
    }

    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
};

export const createInventoryItem = (prizeDrop: PrizeDrop): InventoryItem => {
    return {
        ...prizeDrop,
        inventoryId: createInventoryId(),
    };
};
