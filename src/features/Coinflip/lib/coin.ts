import type { CoinSide } from "../types/coinflip";

export const getRandomCoinSide = (): CoinSide => (Math.random() < 0.5 ? "ct" : "t");

export const getOppositeCoinSide = (side: CoinSide): CoinSide => (side === "ct" ? "t" : "ct");

export const formatCoinSideLabel = (side: CoinSide) => (side === "ct" ? "CT" : "T");
