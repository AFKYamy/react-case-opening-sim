import { create } from "zustand";
import { createInventorySlice, type InventorySlice } from "./slices/inventorySlice";
import { createWalletSlice, type WalletSlice } from "./slices/walletSlice";

export type GameStore = WalletSlice & InventorySlice;

export const useGameStore = create<GameStore>()((...storeApi) => ({
    ...createWalletSlice(...storeApi),
    ...createInventorySlice(...storeApi),
}));
