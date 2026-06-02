import type { StateCreator } from "zustand";

export const DEFAULT_BALANCE = 500;

export type WalletSlice = {
    balance: number;
    canAfford: (amount: number) => boolean;
    addBalance: (amount: number) => void;
    resetBalance: () => void;
    setBalance: (amount: number) => void;
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
    balance: DEFAULT_BALANCE,

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

    resetBalance: () => {
        set({
            balance: DEFAULT_BALANCE,
        });
    },

    setBalance: (amount) => {
        set({
            balance: roundMoney(normalizeAmount(amount)),
        });
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
