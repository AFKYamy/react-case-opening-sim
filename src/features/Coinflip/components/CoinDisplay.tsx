import { formatCurrency } from "@/core/lib/formatCurrency";
import { formatCoinSideLabel } from "../lib/coin";
import type { CoinSide, FlipHistoryItem } from "../types/coinflip";

type CoinDisplayProps = {
    isFlipping: boolean;
    latestFlip: FlipHistoryItem | null;
    selectedSide: CoinSide;
};

export default function CoinDisplay({ isFlipping, latestFlip, selectedSide }: CoinDisplayProps) {
    const coinClassName = isFlipping
        ? "animate-pulse border-primary bg-primary/20 text-text"
        : latestFlip?.outcome === "t"
            ? "border-secondary bg-secondary/15 text-secondary"
            : "border-primary bg-primary/15 text-primary";

    return (
        <div className="grid min-h-56 place-items-center rounded-xl bg-bg/60 px-4 py-8 ring-1 ring-white/10">
            <div className="grid place-items-center gap-4">
                <div className={`grid h-40 w-40 place-items-center rounded-full border-8 text-5xl font-black shadow-2xl transition ${coinClassName}`}>
                    {isFlipping ? "?" : latestFlip ? formatCoinSideLabel(latestFlip.outcome) : formatCoinSideLabel(selectedSide)}
                </div>

                <div className="min-h-8 text-center">
                    {isFlipping && (
                        <p className="text-lg font-bold text-muted">Flipping...</p>
                    )}
                    {!isFlipping && latestFlip && (
                        <p className={`text-xl font-black ${latestFlip.didWin ? "text-rarity-gold" : "text-muted"}`}>
                            {latestFlip.didWin ? `You won ${formatCurrency(latestFlip.payout)}` : `You lost ${formatCurrency(latestFlip.betAmount)}`}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
