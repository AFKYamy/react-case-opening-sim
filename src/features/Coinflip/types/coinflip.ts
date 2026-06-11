export type CoinSide = "ct" | "t";

export type CoinSideOption = {
    label: string;
    value: CoinSide;
};

export type FlipHistoryItem = {
    id: number;
    betAmount: number;
    choice: CoinSide;
    outcome: CoinSide;
    payout: number;
    didWin: boolean;
};
