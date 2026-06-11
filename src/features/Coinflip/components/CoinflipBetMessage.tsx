import { formatCurrency } from "@/core/lib/formatCurrency";

type CoinflipBetMessageProps = {
    hasInsufficientBalance: boolean;
    hasInvalidBet: boolean;
    projectedPayout: number;
};

export default function CoinflipBetMessage({
    hasInsufficientBalance,
    hasInvalidBet,
    projectedPayout,
}: CoinflipBetMessageProps) {
    return (
        <div className="min-h-6 text-sm font-bold">
            {hasInvalidBet && <p className="text-secondary">Enter a valid positive amount, with up to 2 decimals.</p>}
            {hasInsufficientBalance && <p className="text-secondary">Insufficient balance.</p>}
            {!hasInvalidBet && !hasInsufficientBalance && (
                <p className="text-muted">
                    Win returns {formatCurrency(projectedPayout)}. Lose returns {formatCurrency(0)}.
                </p>
            )}
        </div>
    );
}
