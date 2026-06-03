import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { createInventorySlice, type InventorySlice } from "./slices/inventorySlice";
import { createWalletSlice, type WalletSlice } from "./slices/walletSlice";

export type GameStore = WalletSlice & InventorySlice;

type PersistedGameStore = Pick<GameStore, "balance" | "inventoryItems">;

export const useGameStore = create<GameStore>()(
    persist<GameStore, [], [], PersistedGameStore>(
        (...storeApi) => ({
            ...createWalletSlice(...storeApi),
            ...createInventorySlice(...storeApi),
        }),
        {
            name: "case-opening-sim-game-store",
            partialize: (state) => ({
                balance: state.balance,
                inventoryItems: state.inventoryItems,
            }),
            storage: createJSONStorage(() => localStorage),
        },
    ),
);
