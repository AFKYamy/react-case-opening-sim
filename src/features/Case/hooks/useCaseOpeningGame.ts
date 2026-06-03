import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { availableCases } from "@/data/cases";
import type { Case, CaseItem } from "../types/case";
import { ROLL_DURATION_MS, ROLL_TARGET_INDEX } from "../constants/roll";
import { createRollItems } from "../lib/createRollItems";
import { getRandomDrop } from "../lib/getRandomDrop";
import { createPrizeDrop } from "../lib/wear";
import { useGameStore } from "@/store/gameStore";
import type { InventoryItem } from "@/features/Inventory/types/inventory";

export default function useCaseOpeningGame() {
    const { caseId } = useParams();
    const navigate = useNavigate();
    const defaultCase = availableCases[0];
    const selectedCase = availableCases.find((caseOption) => caseOption.id === caseId) ?? defaultCase;
    const spendBalance = useGameStore((state) => state.spendBalance);
    const addBalance = useGameStore((state) => state.addBalance);
    const addInventoryItem = useGameStore((state) => state.addInventoryItem);
    const sellInventoryItem = useGameStore((state) => state.sellInventoryItem);
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

    const clearScheduledRoll = useCallback(() => {
        if (finishTimeoutRef.current) {
            window.clearTimeout(finishTimeoutRef.current);
            finishTimeoutRef.current = null;
        }

        if (firstFrameRef.current) {
            window.cancelAnimationFrame(firstFrameRef.current);
            firstFrameRef.current = null;
        }

        if (secondFrameRef.current) {
            window.cancelAnimationFrame(secondFrameRef.current);
            secondFrameRef.current = null;
        }
    }, []);

    useEffect(() => {
        return () => {
            clearScheduledRoll();
        };
    }, [clearScheduledRoll]);

    useEffect(() => {
        if (caseId !== selectedCase.id) {
            navigate(`/case/${selectedCase.id}`, { replace: true });
        }
    }, [caseId, navigate, selectedCase.id]);

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

        clearScheduledRoll();

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

        navigate(`/case/${nextCase.id}`);
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
