import type { CoinSideOption } from "../types/coinflip";

export const COIN_SIDES: CoinSideOption[] = [
    { label: "CT", value: "ct" },
    { label: "T", value: "t" },
];

export const QUICK_BET_AMOUNTS = [5, 10, 25, 50];
export const MAX_HISTORY_ITEMS = 25;
export const PAYOUT_MULTIPLIER = 1.95;
export const FLIP_DURATION_MS = 1500;
