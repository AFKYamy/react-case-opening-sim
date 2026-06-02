import { create } from "zustand";
import { createWalletSlice, type WalletSlice } from "./slices/walletSlice";

export type GameStore = WalletSlice;

export const useGameStore = create<GameStore>()((...storeApi) => ({
    ...createWalletSlice(...storeApi),
}));
