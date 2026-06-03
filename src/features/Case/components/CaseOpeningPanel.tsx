import { useState } from "react";
import CaseIdlePreview from "./CaseIdlePreview";
import CaseRoller from "./CaseRoller";
import DropOddsModal from "./DropOddsModal";
import { formatCurrency } from "@/core/lib/formatCurrency";
import type { Case, CaseItem } from "../types/case";

type CaseOpeningPanelProps = {
    availableCases: Case[];
    selectedCase: Case;
    isOpening: boolean;
    lastDrop: CaseItem | null;
    rollItems: CaseItem[];
    rollTargetIndex: number;
    hasRollStarted: boolean;
    canOpenCase: boolean;
    onOpenCase: () => void;
    onSelectCase: (selectedCase: Case) => void;
};

export default function CaseOpeningPanel({
    availableCases,
    selectedCase,
    isOpening,
    lastDrop,
    rollItems,
    rollTargetIndex,
    hasRollStarted,
    canOpenCase,
    onOpenCase,
    onSelectCase,
}: CaseOpeningPanelProps) {
    const [isDropOddsOpen, setIsDropOddsOpen] = useState(false);
    const hasOpenedCase = rollItems.length > 0;
    const hasInsufficientBalance = !isOpening && !canOpenCase;

    return (
        <section className="flex flex-col items-center gap-10 rounded-2xl bg-surface p-10">
            {hasOpenedCase ? (
                <CaseRoller
                    skins={selectedCase.skins}
                    rollItems={rollItems}
                    targetIndex={rollTargetIndex}
                    hasRollStarted={hasRollStarted}
                    isOpening={isOpening}
                    lastDrop={lastDrop}
                />
            ) : (
                <CaseIdlePreview
                    availableCases={availableCases}
                    selectedCase={selectedCase}
                    onSelectCase={onSelectCase}
                />
            )}

            <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-3">
                    <button
                        className="rounded-4xl bg-primary px-5 py-4 font-bold disabled:cursor-not-allowed disabled:opacity-60"
                        disabled={!canOpenCase}
                        onClick={onOpenCase}
                        title={hasInsufficientBalance ? "Insufficient balance" : undefined}
                        type="button"
                    >
                        Open for {formatCurrency(selectedCase.openPrice)}
                    </button>

                    <button
                        className="grid h-11 w-11 place-items-center rounded-full bg-surface-secondary text-sm font-bold text-text transition hover:brightness-110"
                        onClick={() => setIsDropOddsOpen(true)}
                        title="Show drop odds"
                        type="button"
                    >
                        %
                    </button>
                </div>

                {hasInsufficientBalance && (
                    <p aria-live="polite" className="text-sm font-bold text-secondary">
                        Insufficient balance
                    </p>
                )}
            </div>

            <DropOddsModal
                isOpen={isDropOddsOpen}
                onClose={() => setIsDropOddsOpen(false)}
            />
        </section>
    );
}
