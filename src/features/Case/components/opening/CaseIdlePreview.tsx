import { useState } from "react";
import type { Case } from "../../types/case";
import CaseSelectorModal from "../case-selector/CaseSelectorModal";

type CaseIdlePreviewProps = {
    availableCases: Case[];
    selectedCase: Case;
    onSelectCase: (selectedCase: Case) => void;
};

export default function CaseIdlePreview({
    availableCases,
    selectedCase,
    onSelectCase,
}: CaseIdlePreviewProps) {
    const [isSelectorOpen, setIsSelectorOpen] = useState(false);

    return (
        <>
            <button
                className="group flex h-56 w-full items-center justify-center rounded-xl bg-surface-secondary px-6 py-5 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setIsSelectorOpen(true)}
                type="button"
            >
                <span className="sr-only">Select case</span>

                {selectedCase.image ? (
                    <img
                        src={selectedCase.image}
                        alt={selectedCase.name}
                        className="max-h-48 max-w-full object-contain transition group-hover:scale-105"
                    />
                ) : (
                    <span className="grid h-40 w-64 place-items-center rounded-lg border border-muted/30 bg-surface px-6 text-center shadow-lg">
                        <span>
                            <span className="block text-lg font-bold">{selectedCase.name}</span>
                            <span className="block text-sm text-muted">{selectedCase.collection}</span>
                        </span>
                    </span>
                )}
            </button>

            <CaseSelectorModal
                availableCases={availableCases}
                isOpen={isSelectorOpen}
                onClose={() => setIsSelectorOpen(false)}
                onSelectCase={onSelectCase}
                selectedCase={selectedCase}
            />
        </>
    );
}
