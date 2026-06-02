const walletBalanceInputPattern = /^\d+(\.\d{1,2})?$/;

export const parseWalletBalanceInput = (value: string) => {
    const trimmedValue = value.trim();

    if (!walletBalanceInputPattern.test(trimmedValue)) {
        return null;
    }

    const amount = Number(trimmedValue);

    if (!Number.isFinite(amount) || amount <= 0) {
        return null;
    }

    return amount;
};
