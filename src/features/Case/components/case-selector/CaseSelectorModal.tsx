import type { Case } from "../../types/case";
import CaseSelectorOptionCard from "./CaseSelectorOptionCard";

type CaseSelectorModalProps = {
    availableCases: Case[];
    selectedCase: Case;
    isOpen: boolean;
    onClose: () => void;
    onSelectCase: (selectedCase: Case) => void;
};

export default function CaseSelectorModal({
    availableCases,
    selectedCase,
    isOpen,
    onClose,
    onSelectCase,
}: CaseSelectorModalProps) {
    if (!isOpen) {
        return null;
    }

    const titleId = "case-selector-title";

    function selectCase(nextCase: Case) {
        onSelectCase(nextCase);
        onClose();
    }

    return (
        <div
            aria-labelledby={titleId}
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 px-4 py-8"
            role="dialog"
        >
            <div className="w-full max-w-3xl rounded-xl bg-surface p-6 text-text shadow-2xl sm:p-8">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-wide text-muted">Cases</p>
                        <h2 id={titleId} className="mt-1 text-2xl font-bold leading-tight">
                            Select case
                        </h2>
                    </div>

                    <button
                        className="grid h-10 w-10 place-items-center rounded-full bg-surface-secondary text-lg font-bold transition hover:brightness-110"
                        onClick={onClose}
                        type="button"
                    >
                        x
                    </button>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {availableCases.map((caseOption) => (
                        <CaseSelectorOptionCard
                            caseOption={caseOption}
                            isSelected={caseOption.id === selectedCase.id}
                            key={caseOption.id}
                            onSelect={selectCase}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
