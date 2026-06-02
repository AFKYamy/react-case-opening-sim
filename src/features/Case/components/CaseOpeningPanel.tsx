import CaseIdlePreview from "./CaseIdlePreview";
import CaseRoller from "./CaseRoller";
import { formatCurrency } from "@/core/lib/formatCurrency";
import type { Case, CaseItem } from "../types/case";

type CaseOpeningPanelProps = {
    selectedCase: Case;
    isOpening: boolean;
    lastDrop: CaseItem | null;
    rollItems: CaseItem[];
    rollTargetIndex: number;
    hasRollStarted: boolean;
    canOpenCase: boolean;
    onOpenCase: () => void;
};

export default function CaseOpeningPanel({
    selectedCase,
    isOpening,
    lastDrop,
    rollItems,
    rollTargetIndex,
    hasRollStarted,
    canOpenCase,
    onOpenCase,
}: CaseOpeningPanelProps) {
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
                <CaseIdlePreview selectedCase={selectedCase} />
            )}

            <div className="flex flex-col items-center gap-3">
                <button
                    className="rounded-4xl bg-primary px-5 py-4 font-bold disabled:cursor-not-allowed disabled:opacity-60"
                    disabled={!canOpenCase}
                    onClick={onOpenCase}
                    title={hasInsufficientBalance ? "Insufficient balance" : undefined}
                    type="button"
                >
                    Open for {formatCurrency(selectedCase.openPrice)}
                </button>

                {hasInsufficientBalance && (
                    <p aria-live="polite" className="text-sm font-bold text-secondary">
                        Insufficient balance
                    </p>
                )}
            </div>
        </section>
    );
}
