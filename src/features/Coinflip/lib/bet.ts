export const parseCoinflipBetInput = (value: string) => {
    const normalizedValue = value.trim().replace(",", ".");

    if (!/^\d+(\.\d{0,2})?$/.test(normalizedValue)) {
        return null;
    }

    const parsedValue = Number(normalizedValue);

    if (!Number.isFinite(parsedValue) || parsedValue <= 0) {
        return null;
    }

    return Number(parsedValue.toFixed(2));
};

export const calculateCoinflipPayout = (betAmount: number, payoutMultiplier: number) => {
    return Number((betAmount * payoutMultiplier).toFixed(2));
};

export const calculateCoinflipProfit = (betAmount: number | null, payout: number) => {
    return Math.max(0, payout - (betAmount ?? 0));
};
