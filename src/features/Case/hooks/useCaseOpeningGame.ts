import { useEffect, useRef, useState } from "react";
import { operationBravoCase } from "@/data/cases/operation-bravo-case";
import type { CaseItem } from "../types/case";
import { ROLL_DURATION_MS, ROLL_ITEM_COUNT, ROLL_TARGET_INDEX } from "../constants/roll";

const getRandomItem = (items: CaseItem[]) => items[Math.floor(Math.random() * items.length)];

export default function useCaseOpeningGame() {
    const selectedCase = operationBravoCase;
    const [isOpening, setIsOpening] = useState(false);
    const [lastDrop, setLastDrop] = useState<CaseItem | null>(null);
    const [rollItems, setRollItems] = useState<CaseItem[]>([]);
    const [rollTargetIndex, setRollTargetIndex] = useState(0);
    const [hasRollStarted, setHasRollStarted] = useState(false);
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

        const pool = selectedCase.skins;
        if (pool.length === 0) {
            return;
        }

        const winner = getRandomItem(pool);
        const nextRollItems = Array.from({ length: ROLL_ITEM_COUNT }, (_, index) => {
            if (index === ROLL_TARGET_INDEX) {
                return winner;
            }

            return getRandomItem(pool);
        });

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
            setIsOpening(false);
        }, ROLL_DURATION_MS);
    }

    return {
        values: {
            selectedCase,
            isOpening,
            lastDrop,
            rollItems,
            rollTargetIndex,
            hasRollStarted,
        },
        openCase
    }
}
