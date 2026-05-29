import { useState } from "react";
import { operationBravoCase } from "@/data/cases/operation-bravo-case";
import type { Case, CaseItem } from "../types/case";

export default function useCaseOpeningGame() {
    const [selectedCase, setSelectedCase] = useState<Case>(operationBravoCase);
    const [isOpening, setIsOpening] = useState(false);
    const [lastDrop, setLastDrop] = useState<CaseItem | null>(null);

    function openCase() {
        alert("Opened case");
    }

    return {
        values: {
            selectedCase,
            isOpening,
            lastDrop,
        },
        setters: {
            setSelectedCase,
            setIsOpening,
            setLastDrop,
        },
        openCase
    }
}
