import type { Case } from "../../types/case";

type CaseSelectorControlProps = {
    availableCases: Case[];
    selectedCase: Case;
    isDisabled: boolean;
    onSelectCase: (selectedCase: Case) => void;
};

export default function CaseSelectorControl({
    availableCases,
    selectedCase,
    isDisabled,
    onSelectCase,
}: CaseSelectorControlProps) {
    return (
        <label className="flex items-center gap-2 text-sm font-bold text-muted" htmlFor="case-selector-control">
            Case:
            <select
                className="min-w-48 rounded-lg border border-surface-secondary bg-surface px-3 py-2 text-sm font-bold text-text outline-none transition focus:border-primary disabled:cursor-not-allowed disabled:opacity-60"
                disabled={isDisabled}
                id="case-selector-control"
                onChange={(event) => {
                    const nextCase = availableCases.find((caseOption) => caseOption.id === event.target.value);

                    if (nextCase) {
                        onSelectCase(nextCase);
                    }
                }}
                value={selectedCase.id}
            >
                {availableCases.map((caseOption) => (
                    <option key={caseOption.id} value={caseOption.id}>
                        {caseOption.name}
                    </option>
                ))}
            </select>
        </label>
    );
}
