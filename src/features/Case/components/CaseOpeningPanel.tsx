import CaseIdlePreview from "./CaseIdlePreview";
import CaseRoller from "./CaseRoller";
import { formatCurrency } from "../lib/formatCurrency";
import type { Case, CaseItem } from "../types/case";

type CaseOpeningPanelProps = {
    selectedCase: Case;
    isOpening: boolean;
    lastDrop: CaseItem | null;
    rollItems: CaseItem[];
    rollTargetIndex: number;
    hasRollStarted: boolean;
    onOpenCase: () => void;
};

export default function CaseOpeningPanel({
    selectedCase,
    isOpening,
    lastDrop,
    rollItems,
    rollTargetIndex,
    hasRollStarted,
    onOpenCase,
}: CaseOpeningPanelProps) {
    const hasOpenedCase = rollItems.length > 0;

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

            <button
                className="cursor-pointer rounded-4xl bg-primary px-5 py-4 font-bold disabled:cursor-not-allowed disabled:opacity-60"
                disabled={isOpening}
                onClick={onOpenCase}
                type="button"
            >
                Open for {formatCurrency(selectedCase.openPrice)}
            </button>
        </section>
    );
}
