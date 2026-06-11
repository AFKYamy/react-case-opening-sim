import { formatCurrency } from "@/core/lib/formatCurrency";
import { formatCoinSideLabel, getOppositeCoinSide } from "../lib/coin";
import type { CoinSide, FlipHistoryItem } from "../types/coinflip";

type CoinflipSidebarProps = {
    historyItems: FlipHistoryItem[];
    latestFlip: FlipHistoryItem | null;
    projectedProfit: number;
    selectedSide: CoinSide;
};

export default function CoinflipSidebar({
    historyItems,
    latestFlip,
    projectedProfit,
    selectedSide,
}: CoinflipSidebarProps) {
    return (
        <aside className="grid gap-4 rounded-2xl bg-surface p-6">
            <div>
                <p className="text-sm font-bold uppercase tracking-wide text-muted">Last result</p>
                <h2 className="mt-1 text-2xl font-bold">
                    {latestFlip ? (latestFlip.didWin ? "Win" : "Loss") : "Ready"}
                </h2>
            </div>

            <div className="grid gap-3 rounded-lg bg-surface-secondary p-4">
                <div className="flex items-center justify-between gap-4 text-sm font-bold">
                    <span className="text-muted">Your side</span>
                    <span>{formatCoinSideLabel(selectedSide)}</span>
                </div>
                <div className="flex items-center justify-between gap-4 text-sm font-bold">
                    <span className="text-muted">Opponent side</span>
                    <span>{formatCoinSideLabel(getOppositeCoinSide(selectedSide))}</span>
                </div>
                <div className="flex items-center justify-between gap-4 text-sm font-bold">
                    <span className="text-muted">Potential profit</span>
                    <span>{formatCurrency(projectedProfit)}</span>
                </div>
            </div>

            <div className="grid gap-3">
                <p className="text-sm font-bold text-muted">Last flips</p>

                {historyItems.length > 0 ? (
                    <div className="grid max-h-[21.25rem] gap-2 overflow-y-auto pr-1">
                        {historyItems.map((historyItem) => (
                            <div
                                className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg bg-surface-secondary px-3 py-3 text-sm"
                                key={historyItem.id}
                            >
                                <span className={`grid h-9 w-9 place-items-center rounded-full font-black ${historyItem.outcome === "ct" ? "bg-primary/20 text-primary" : "bg-secondary/20 text-secondary"}`}>
                                    {formatCoinSideLabel(historyItem.outcome)}
                                </span>
                                <div className="min-w-0">
                                    <p className="font-bold">{historyItem.didWin ? "Won" : "Lost"} {formatCurrency(historyItem.betAmount)}</p>
                                    <p className="text-xs text-muted">Picked {formatCoinSideLabel(historyItem.choice)}</p>
                                </div>
                                <p className={`font-bold ${historyItem.didWin ? "text-rarity-gold" : "text-muted"}`}>
                                    {historyItem.didWin ? `+${formatCurrency(historyItem.payout)}` : formatCurrency(0)}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid min-h-32 place-items-center rounded-lg bg-surface-secondary px-4 py-6 text-center">
                        <div>
                            <p className="font-bold">No flips yet</p>
                            <p className="text-sm text-muted">Your results will appear here.</p>
                        </div>
                    </div>
                )}
            </div>
        </aside>
    );
}
