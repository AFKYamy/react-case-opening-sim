import { useState } from "react";
import { caseBravo } from "@/data/cases/operation-bravo-case";
import type { CaseSkin } from "../types/case";

export default function useCaseOpeningGame() {
    const [selectedCase, setSelectedCase] = useState<CaseSkin[]>(caseBravo);
    const [isOpening, setIsOpening] = useState(false);
    const [lastDrop, setLastDrop] = useState<CaseSkin | null>(null);

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
