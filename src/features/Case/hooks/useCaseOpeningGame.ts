import { useEffect, useRef, useState } from "react";
import { availableCases } from "@/data/cases";
import type { Case, CaseItem } from "../types/case";
import { ROLL_DURATION_MS, ROLL_TARGET_INDEX } from "../constants/roll";
import { createRollItems } from "../lib/createRollItems";
import { getRandomDrop } from "../lib/getRandomDrop";
import { createPrizeDrop } from "../lib/wear";
import { useGameStore } from "@/store/gameStore";
import type { InventoryItem } from "@/features/Inventory/types/inventory";

export default function useCaseOpeningGame() {
    const spendBalance = useGameStore((state) => state.spendBalance);
    const addBalance = useGameStore((state) => state.addBalance);
    const addInventoryItem = useGameStore((state) => state.addInventoryItem);
    const sellInventoryItem = useGameStore((state) => state.sellInventoryItem);
    const [selectedCase, setSelectedCase] = useState(() => availableCases[0]);
    const [isOpening, setIsOpening] = useState(false);
    const [lastDrop, setLastDrop] = useState<CaseItem | null>(null);
    const [prizeInventoryItem, setPrizeInventoryItem] = useState<InventoryItem | null>(null);
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
        const nextInventoryItem = addInventoryItem(nextPrizeDrop);

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
        setPrizeInventoryItem(null);
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
            setPrizeInventoryItem(nextInventoryItem);
            setIsOpening(false);
        }, ROLL_DURATION_MS);
    }

    function clearPrizeDrop() {
        setPrizeInventoryItem(null);
    }

    function openCaseAgain() {
        clearPrizeDrop();
        openCase();
    }

    function sellPrizeDrop() {
        if (!prizeInventoryItem) {
            return;
        }

        sellInventoryItem(prizeInventoryItem.inventoryId);
        clearPrizeDrop();
    }

    function keepPrizeDrop() {
        if (!prizeInventoryItem) {
            return;
        }

        clearPrizeDrop();
    }

    function selectCase(nextCase: Case) {
        if (isOpening) {
            return;
        }

        setSelectedCase(nextCase);
        setLastDrop(null);
        setPrizeInventoryItem(null);
        setRollItems([]);
        setRollTargetIndex(0);
        setHasRollStarted(false);
    }

    return {
        values: {
            availableCases,
            selectedCase,
            isOpening,
            lastDrop,
            prizeDrop: prizeInventoryItem,
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
            selectCase,
            sellPrizeDrop,
        },
    };
}
