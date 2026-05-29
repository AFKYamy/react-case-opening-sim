import type { Case } from "../types/case";

type CaseIdlePreviewProps = {
    selectedCase: Case;
};

export default function CaseIdlePreview({ selectedCase }: CaseIdlePreviewProps) {
    return (
        <div className="flex h-56 w-full items-center justify-center rounded-xl bg-surface-secondary px-6 py-5">
            {selectedCase.image ? (
                <img
                    src={selectedCase.image}
                    alt={selectedCase.name}
                    className="max-h-48 max-w-full object-contain"
                />
            ) : (
                <div className="grid h-40 w-64 place-items-center rounded-lg border border-muted/30 bg-surface px-6 text-center shadow-lg">
                    <div>
                        <p className="text-lg font-bold">{selectedCase.name}</p>
                        <p className="text-sm text-muted">{selectedCase.collection}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
