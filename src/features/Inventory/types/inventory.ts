import type { PrizeDrop } from "@/features/Case/types/prize";

export type InventoryItem = PrizeDrop & {
    inventoryId: string;
};
