import { dropRates, type DropRate } from "../lib/dropRates";
import { rarityColorClasses } from "../types/case";

type DropOddsModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const getDropRateLabel = (dropRate: DropRate) => {
    if (dropRate.type === "knife") {
        return "Rare Special Item";
    }

    return dropRate.rarity;
};

const getDropRateColorClassName = (dropRate: DropRate) => {
    if (dropRate.type === "knife") {
        return rarityColorClasses["Rare Special Item"];
    }

    return rarityColorClasses[dropRate.rarity];
};

const dropRateRows = dropRates.map((dropRate) => ({
    chance: dropRate.chance,
    colorClassName: getDropRateColorClassName(dropRate),
    label: getDropRateLabel(dropRate),
}));

export default function DropOddsModal({ isOpen, onClose }: DropOddsModalProps) {
    if (!isOpen) {
        return null;
    }

    return (
        <div
            aria-labelledby="drop-odds-title"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 px-4 py-8"
            role="dialog"
        >
            <div className="w-full max-w-lg overflow-hidden rounded-xl bg-surface text-text shadow-2xl">
                <div className="grid gap-6 p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-wide text-muted">Case odds</p>
                            <h2 id="drop-odds-title" className="mt-1 text-2xl font-bold leading-tight">
                                Drop Rates
                            </h2>
                        </div>

                        <button
                            className="rounded-lg bg-surface-secondary px-3 py-2 text-sm font-bold text-text transition hover:brightness-110"
                            onClick={onClose}
                            type="button"
                        >
                            Close
                        </button>
                    </div>

                    <div className="grid gap-4">
                        {dropRateRows.map((dropRateRow) => (
                            <div className="grid gap-2" key={dropRateRow.label}>
                                <div className="flex items-center justify-between gap-4">
                                    <p className="font-bold">{dropRateRow.label}</p>
                                    <p className="text-sm font-bold text-muted">{dropRateRow.chance.toFixed(2)}%</p>
                                </div>

                                <div className="h-3 overflow-hidden rounded-full bg-surface-secondary">
                                    <div
                                        className={`h-full rounded-full ${dropRateRow.colorClassName}`}
                                        style={{ width: `${dropRateRow.chance}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
