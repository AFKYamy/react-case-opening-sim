import type { StateCreator } from "zustand";
import { createInventoryItem } from "@/features/Inventory/lib/createInventoryItem";
import type { InventoryItem } from "@/features/Inventory/types/inventory";
import type { PrizeDrop } from "@/features/Case/types/prize";
import type { WalletSlice } from "./walletSlice";

export type InventorySlice = {
    inventoryItems: InventoryItem[];
    addInventoryItem: (prizeDrop: PrizeDrop) => void;
    removeInventoryItem: (inventoryId: string) => void;
    sellInventoryItem: (inventoryId: string) => void;
};

type InventoryStore = WalletSlice & InventorySlice;

export const createInventorySlice: StateCreator<InventoryStore, [], [], InventorySlice> = (set, get) => ({
    inventoryItems: [],

    addInventoryItem: (prizeDrop) => {
        const inventoryItem = createInventoryItem(prizeDrop);

        set((state) => ({
            inventoryItems: [inventoryItem, ...state.inventoryItems],
        }));
    },

    removeInventoryItem: (inventoryId) => {
        set((state) => ({
            inventoryItems: state.inventoryItems.filter((item) => item.inventoryId !== inventoryId),
        }));
    },

    sellInventoryItem: (inventoryId) => {
        const inventoryItem = get().inventoryItems.find((item) => item.inventoryId === inventoryId);

        if (!inventoryItem) {
            return;
        }

        get().addBalance(inventoryItem.sellPrice);
        get().removeInventoryItem(inventoryId);
    },
});
