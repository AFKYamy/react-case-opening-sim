import { useEffect, useRef, useState } from "react";
import { operationBravoCase } from "@/data/cases/operation-bravo-case";
import type { CaseItem } from "../types/case";
import { ROLL_DURATION_MS, ROLL_TARGET_INDEX } from "../constants/roll";
import { createRollItems } from "../lib/createRollItems";
import { getRandomDrop } from "../lib/getRandomDrop";

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

        const winner = getRandomDrop(selectedCase);
        if (!winner) {
            return;
        }

        const nextRollItems = createRollItems(selectedCase, winner);

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
