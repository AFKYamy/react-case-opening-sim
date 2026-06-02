import { useEffect, useRef, useState } from "react";
import { operationBravoCase } from "@/data/cases/operation-bravo-case";
import type { CaseItem } from "../types/case";
import type { PrizeDrop } from "../types/prize";
import { ROLL_DURATION_MS, ROLL_TARGET_INDEX } from "../constants/roll";
import { createRollItems } from "../lib/createRollItems";
import { getRandomDrop } from "../lib/getRandomDrop";
import { createPrizeDrop } from "../lib/wear";
import { useGameStore } from "@/store/gameStore";

export default function useCaseOpeningGame() {
    const selectedCase = operationBravoCase;
    const spendBalance = useGameStore((state) => state.spendBalance);
    const addBalance = useGameStore((state) => state.addBalance);
    const addInventoryItem = useGameStore((state) => state.addInventoryItem);
    const [isOpening, setIsOpening] = useState(false);
    const [lastDrop, setLastDrop] = useState<CaseItem | null>(null);
    const [prizeDrop, setPrizeDrop] = useState<PrizeDrop | null>(null);
    const [rollItems, setRollItems] = useState<CaseItem[]>([]);
    const [rollTargetIndex, setRollTargetIndex] = useState(0);
    const [hasRollStarted, setHasRollStarted] = useState(false);
    const canOpenCase = useGameStore((state) => {
        return !isOpening && state.canAfford(selectedCase.openPrice);
    });
    const finishTimeoutRef = useRef<number | null>(null);
    const firstFrameRef = useRef<number | null>(null);
    const secondFrameRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (finishTimeoutRef.current) {
                window.clearTimeout(finishTimeoutRef.current);
            }

            if (firstFrameRef.current) {
                window.cancelAnimationFrame(firstFrameRef.current);
            }

            if (secondFrameRef.current) {
                window.cancelAnimationFrame(secondFrameRef.current);
            }
        };
    }, []);

    function openCase() {
        if (isOpening) {
            return;
        }

        const paidForCase = spendBalance(selectedCase.openPrice);
        if (!paidForCase) {
            return;
        }

        const winner = getRandomDrop(selectedCase);
        if (!winner) {
            addBalance(selectedCase.openPrice);

            return;
        }

        const nextRollItems = createRollItems(selectedCase, winner);
        const nextPrizeDrop = createPrizeDrop(winner);

        if (finishTimeoutRef.current) {
            window.clearTimeout(finishTimeoutRef.current);
        }

        if (firstFrameRef.current) {
            window.cancelAnimationFrame(firstFrameRef.current);
        }

        if (secondFrameRef.current) {
            window.cancelAnimationFrame(secondFrameRef.current);
        }

        setLastDrop(null);
        setPrizeDrop(null);
        setRollItems(nextRollItems);
        setRollTargetIndex(ROLL_TARGET_INDEX);
        setHasRollStarted(false);
        setIsOpening(true);

        firstFrameRef.current = window.requestAnimationFrame(() => {
            secondFrameRef.current = window.requestAnimationFrame(() => {
                setHasRollStarted(true);
            });
        });

        finishTimeoutRef.current = window.setTimeout(() => {
            setLastDrop(winner);
            setPrizeDrop(nextPrizeDrop);
            setIsOpening(false);
        }, ROLL_DURATION_MS);
    }

    function clearPrizeDrop() {
        setPrizeDrop(null);
    }

    function openCaseAgain() {
        if (prizeDrop) {
            addInventoryItem(prizeDrop);
        }

        clearPrizeDrop();
        openCase();
    }

    function sellPrizeDrop() {
        if (!prizeDrop) {
            return;
        }

        addBalance(prizeDrop.sellPrice);
        clearPrizeDrop();
    }

    function keepPrizeDrop() {
        if (!prizeDrop) {
            return;
        }

        addInventoryItem(prizeDrop);
        clearPrizeDrop();
    }

    return {
        values: {
            selectedCase,
            isOpening,
            lastDrop,
            prizeDrop,
            canOpenCase,
            rollItems,
            rollTargetIndex,
            hasRollStarted,
        },
        actions: {
            clearPrizeDrop,
            keepPrizeDrop,
            openCase,
            openCaseAgain,
            sellPrizeDrop,
        },
    };
}
