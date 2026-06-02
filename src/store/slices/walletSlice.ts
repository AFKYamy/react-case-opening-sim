import type { StateCreator } from "zustand";

const INITIAL_BALANCE = 500;

export type WalletSlice = {
    balance: number;
    canAfford: (amount: number) => boolean;
    addBalance: (amount: number) => void;
    spendBalance: (amount: number) => boolean;
};

const normalizeAmount = (amount: number) => {
    if (!Number.isFinite(amount)) {
        return 0;
    }

    return Math.max(0, amount);
};

const roundMoney = (amount: number) => Number(amount.toFixed(2));

export const createWalletSlice: StateCreator<WalletSlice, [], [], WalletSlice> = (set, get) => ({
    balance: INITIAL_BALANCE,

    canAfford: (amount) => {
        return get().balance >= normalizeAmount(amount);
    },

    addBalance: (amount) => {
        const safeAmount = normalizeAmount(amount);

        if (safeAmount === 0) {
            return;
        }

        set((state) => ({
            balance: roundMoney(state.balance + safeAmount),
        }));
    },

    spendBalance: (amount) => {
        const safeAmount = normalizeAmount(amount);
        const { balance } = get();

        if (balance < safeAmount) {
            return false;
        }

        set({
            balance: roundMoney(balance - safeAmount),
        });

        return true;
    },
});
