import { formatPrizeFloat, formatPrizePrice } from "../lib/formatPrize";
import { rarityColorClasses } from "../types/case";
import type { PrizeDrop } from "../types/prize";

type PrizeModalProps = {
    prizeDrop: PrizeDrop | null;
    canOpenCase: boolean;
    onSell: () => void;
    onKeep: () => void;
    onOpenAgain: () => void;
};

type PrizeStatProps = {
    label: string;
    value: string;
};

function PrizeStat({ label, value }: PrizeStatProps) {
    return (
        <div className="rounded-lg bg-surface-secondary p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-muted">{label}</p>
            <p className="mt-1 text-lg font-bold">{value}</p>
        </div>
    );
}

export default function PrizeModal({
    prizeDrop,
    canOpenCase,
    onSell,
    onKeep,
    onOpenAgain,
}: PrizeModalProps) {
    if (!prizeDrop) {
        return null;
    }

    const { item, condition, float, sellPrice } = prizeDrop;
    const itemName = `${item.weapon} | ${item.skin}`;
    const titleId = `prize-modal-title-${item.id}`;
    const hasInsufficientBalance = !canOpenCase;

    return (
        <div
            aria-labelledby={titleId}
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 px-4 py-8"
            role="dialog"
        >
            <div className="w-full max-w-lg overflow-hidden rounded-xl bg-surface text-text shadow-2xl">
                <div className={`h-2 ${rarityColorClasses[item.rarity]}`}></div>

                <div className="grid gap-6 p-6 sm:p-8">
                    <div className="text-center">
                        <p className="text-sm font-bold uppercase tracking-wide text-muted">You won</p>
                        <h2 id={titleId} className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">
                            {itemName}
                        </h2>
                    </div>

                    <div className="flex h-56 items-center justify-center rounded-lg bg-surface-secondary p-6">
                        <img
                            src={item.image}
                            alt={itemName}
                            className="max-h-full max-w-full object-contain"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <PrizeStat label="Condition" value={condition.label} />
                        <PrizeStat label="Float" value={formatPrizeFloat(float)} />
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                        <button
                            aria-label={`Sell ${itemName} for ${formatPrizePrice(sellPrice)}`}
                            className="rounded-lg bg-secondary px-4 py-3 font-bold text-text transition hover:brightness-110"
                            onClick={onSell}
                            type="button"
                        >
                            Sell {formatPrizePrice(sellPrice)}
                        </button>

                        <button
                            className="rounded-lg bg-surface-secondary px-4 py-3 font-bold text-text transition hover:brightness-110"
                            onClick={onKeep}
                            type="button"
                        >
                            Keep
                        </button>

                        <button
                            className="rounded-lg bg-primary px-4 py-3 font-bold text-text transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
                            disabled={!canOpenCase}
                            onClick={onOpenAgain}
                            title={hasInsufficientBalance ? "Insufficient balance" : undefined}
                            type="button"
                        >
                            Open again
                        </button>
                    </div>

                    {hasInsufficientBalance && (
                        <p aria-live="polite" className="text-center text-sm font-bold text-secondary">
                            Insufficient balance to open again
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
