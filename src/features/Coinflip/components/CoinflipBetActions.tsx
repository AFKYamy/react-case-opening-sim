import { formatCurrency } from "@/core/lib/formatCurrency";

type CoinflipBetActionsProps = {
    balance: number;
    canFlip: boolean;
    hasInsufficientBalance: boolean;
    isFlipping: boolean;
    parsedBetAmount: number | null;
    quickBetAmounts: number[];
    onFlip: () => void;
    onMaxBet: () => void;
    onQuickBet: (amount: number) => void;
};

export default function CoinflipBetActions({
    balance,
    canFlip,
    hasInsufficientBalance,
    isFlipping,
    parsedBetAmount,
    quickBetAmounts,
    onFlip,
    onMaxBet,
    onQuickBet,
}: CoinflipBetActionsProps) {
    return (
        <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
            <div className="flex flex-wrap gap-2">
                {quickBetAmounts.map((amount) => (
                    <button
                        className="rounded-lg bg-surface-secondary px-4 py-2 text-sm font-bold text-text transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                        disabled={isFlipping}
                        key={amount}
                        onClick={() => onQuickBet(amount)}
                        type="button"
                    >
                        {formatCurrency(amount)}
                    </button>
                ))}

                <button
                    className="rounded-lg bg-surface-secondary px-4 py-2 text-sm font-bold text-text transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                    disabled={isFlipping || balance <= 0}
                    onClick={onMaxBet}
                    type="button"
                >
                    Max
                </button>
            </div>

            <button
                className="rounded-4xl bg-primary px-6 py-4 font-bold text-text transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
                disabled={!canFlip}
                onClick={onFlip}
                title={hasInsufficientBalance ? "Insufficient balance" : undefined}
                type="button"
            >
                Flip for {parsedBetAmount === null ? formatCurrency(0) : formatCurrency(parsedBetAmount)}
            </button>
        </div>
    );
}
