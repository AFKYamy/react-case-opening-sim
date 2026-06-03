import { formatCurrency } from "@/core/lib/formatCurrency";
import type { Case } from "../../types/case";

type CaseSelectorOptionCardProps = {
    caseOption: Case;
    isSelected: boolean;
    onSelect: (caseOption: Case) => void;
};

export default function CaseSelectorOptionCard({
    caseOption,
    isSelected,
    onSelect,
}: CaseSelectorOptionCardProps) {
    return (
        <button
            className={`grid min-h-64 grid-rows-[1fr_auto] rounded-lg border bg-surface-secondary p-4 text-left transition hover:brightness-110 ${
                isSelected ? "border-primary" : "border-transparent"
            }`}
            onClick={() => onSelect(caseOption)}
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
}
