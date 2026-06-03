import { useState } from "react";
import { formatCurrency } from "@/core/lib/formatCurrency";
import type { Case } from "../types/case";

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
    const titleId = "case-selector-title";

    function selectCase(nextCase: Case) {
        onSelectCase(nextCase);
        setIsSelectorOpen(false);
    }

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

            {isSelectorOpen && (
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
                                onClick={() => setIsSelectorOpen(false)}
                                type="button"
                            >
                                x
                            </button>
                        </div>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            {availableCases.map((caseOption) => {
                                const isSelected = caseOption.id === selectedCase.id;

                                return (
                                    <button
                                        className={`grid min-h-64 grid-rows-[1fr_auto] rounded-lg border bg-surface-secondary p-4 text-left transition hover:brightness-110 ${
                                            isSelected ? "border-primary" : "border-transparent"
                                        }`}
                                        key={caseOption.id}
                                        onClick={() => selectCase(caseOption)}
                                        type="button"
                                    >
                                        <span className="flex min-h-0 items-center justify-center px-4 py-3">
                                            {caseOption.image ? (
                                                <img
                                                    src={caseOption.image}
                                                    alt={caseOption.name}
                                                    className="max-h-36 max-w-full object-contain"
                                                />
                                            ) : (
                                                <span className="grid h-32 w-full place-items-center rounded-lg bg-surface px-4 text-center font-bold">
                                                    {caseOption.name}
                                                </span>
                                            )}
                                        </span>

                                        <span>
                                            <span className="block font-bold">{caseOption.name}</span>
                                            <span className="block text-sm text-muted">{caseOption.collection}</span>
                                            <span className="mt-2 block text-sm font-bold text-secondary">
                                                {formatCurrency(caseOption.openPrice)}
                                            </span>
                                            {isSelected && (
                                                <span className="mt-2 block text-xs font-bold uppercase tracking-wide text-primary">
                                                    Selected
                                                </span>
                                            )}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
