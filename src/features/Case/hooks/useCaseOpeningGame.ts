import { useCallback, useEffect, useReducer, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { availableCases } from "@/data/cases";
import type { Case, CaseItem } from "../types/case";
import { ROLL_DURATION_MS, ROLL_TARGET_INDEX } from "../constants/roll";
import { createRollItems } from "../lib/createRollItems";
import { getRandomDrop } from "../lib/getRandomDrop";
import { createPrizeDrop } from "../lib/wear";
import { useGameStore } from "@/store/gameStore";
import type { InventoryItem } from "@/features/Inventory/types/inventory";

type OpeningState = {
    hasRollStarted: boolean;
    isOpening: boolean;
    lastDrop: CaseItem | null;
    prizeInventoryItem: InventoryItem | null;
    rollItems: CaseItem[];
    rollTargetIndex: number;
};

type OpeningAction =
    | {
        type: "startOpening";
        rollItems: CaseItem[];
    }
    | {
        type: "startRollAnimation";
    }
    | {
        type: "finishOpening";
        prizeInventoryItem: InventoryItem;
        winner: CaseItem;
    }
    | {
        type: "clearPrize";
    };

const initialOpeningState: OpeningState = {
    hasRollStarted: false,
    isOpening: false,
    lastDrop: null,
    prizeInventoryItem: null,
    rollItems: [],
    rollTargetIndex: 0,
};

function openingReducer(state: OpeningState, action: OpeningAction): OpeningState {
    switch (action.type) {
        case "startOpening":
            return {
                ...state,
                hasRollStarted: false,
                isOpening: true,
                lastDrop: null,
                prizeInventoryItem: null,
                rollItems: action.rollItems,
                rollTargetIndex: ROLL_TARGET_INDEX,
            };

        case "startRollAnimation":
            return {
                ...state,
                hasRollStarted: true,
            };

        case "finishOpening":
            return {
                ...state,
                isOpening: false,
                lastDrop: action.winner,
                prizeInventoryItem: action.prizeInventoryItem,
            };

        case "clearPrize":
            return {
                ...state,
                prizeInventoryItem: null,
            };
    }
}

export default function useCaseOpeningGame() {
    const { caseId } = useParams();
    const navigate = useNavigate();
    const defaultCase = availableCases[0];
    const selectedCase = availableCases.find((caseOption) => caseOption.id === caseId) ?? defaultCase;
    const spendBalance = useGameStore((state) => state.spendBalance);
    const addBalance = useGameStore((state) => state.addBalance);
    const addInventoryItem = useGameStore((state) => state.addInventoryItem);
    const sellInventoryItem = useGameStore((state) => state.sellInventoryItem);
    const [openingState, dispatchOpening] = useReducer(openingReducer, initialOpeningState);
    const { hasRollStarted, isOpening, lastDrop, prizeInventoryItem, rollItems, rollTargetIndex } = openingState;
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

        dispatchOpening({
            type: "startOpening",
            rollItems: nextRollItems,
        });

        firstFrameRef.current = window.requestAnimationFrame(() => {
            secondFrameRef.current = window.requestAnimationFrame(() => {
                dispatchOpening({
                    type: "startRollAnimation",
                });
            });
        });

        finishTimeoutRef.current = window.setTimeout(() => {
            dispatchOpening({
                prizeInventoryItem: nextInventoryItem,
                type: "finishOpening",
                winner,
            });
        }, ROLL_DURATION_MS);
    }

    function clearPrizeDrop() {
        dispatchOpening({
            type: "clearPrize",
        });
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
