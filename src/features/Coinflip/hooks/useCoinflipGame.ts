import { useEffect, useMemo, useRef, useState } from "react";
import { useGameStore } from "@/store/gameStore";
import {
    FLIP_DURATION_MS,
    MAX_HISTORY_ITEMS,
    PAYOUT_MULTIPLIER,
    QUICK_BET_AMOUNTS,
} from "../constants/coinflip";
import { calculateCoinflipPayout, calculateCoinflipProfit, parseCoinflipBetInput } from "../lib/bet";
import { getRandomCoinSide } from "../lib/coin";
import type { CoinSide, FlipHistoryItem } from "../types/coinflip";

export default function useCoinflipGame() {
    const balance = useGameStore((state) => state.balance);
    const addBalance = useGameStore((state) => state.addBalance);
    const spendBalance = useGameStore((state) => state.spendBalance);
    const [selectedSide, setSelectedSide] = useState<CoinSide>("ct");
    const [betInput, setBetInput] = useState("10");
    const [isFlipping, setIsFlipping] = useState(false);
    const [historyItems, setHistoryItems] = useState<FlipHistoryItem[]>([]);
    const timeoutRef = useRef<number | null>(null);

    const parsedBetAmount = useMemo(() => parseCoinflipBetInput(betInput), [betInput]);
    const hasInvalidBet = parsedBetAmount === null;
    const hasInsufficientBalance = parsedBetAmount !== null && parsedBetAmount > balance;
    const projectedPayout = parsedBetAmount === null
        ? 0
        : calculateCoinflipPayout(parsedBetAmount, PAYOUT_MULTIPLIER);
    const projectedProfit = calculateCoinflipProfit(parsedBetAmount, projectedPayout);
    const latestFlip = historyItems[0] ?? null;
    const canFlip = !isFlipping && !hasInvalidBet && !hasInsufficientBalance;

    useEffect(() => {
        return () => {
            if (timeoutRef.current !== null) {
                window.clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const setQuickBet = (amount: number) => {
        setBetInput(amount.toFixed(2));
    };

    const setMaxBet = () => {
        setBetInput(balance.toFixed(2));
    };

    const flipCoin = () => {
        if (parsedBetAmount === null || parsedBetAmount <= 0 || !spendBalance(parsedBetAmount)) {
            return;
        }

        const outcome = getRandomCoinSide();
        const didWin = outcome === selectedSide;
        const payout = didWin ? calculateCoinflipPayout(parsedBetAmount, PAYOUT_MULTIPLIER) : 0;

        setIsFlipping(true);

        timeoutRef.current = window.setTimeout(() => {
            if (payout > 0) {
                addBalance(payout);
            }

            setHistoryItems((currentHistoryItems) => [
                {
                    id: Date.now(),
                    betAmount: parsedBetAmount,
                    choice: selectedSide,
                    outcome,
                    payout,
                    didWin,
                },
                ...currentHistoryItems,
            ].slice(0, MAX_HISTORY_ITEMS));
            setIsFlipping(false);
            timeoutRef.current = null;
        }, FLIP_DURATION_MS);
    };

    return {
        values: {
            balance,
            betInput,
            canFlip,
            hasInsufficientBalance,
            hasInvalidBet,
            historyItems,
            isFlipping,
            latestFlip,
            parsedBetAmount,
            payoutMultiplier: PAYOUT_MULTIPLIER,
            projectedPayout,
            projectedProfit,
            quickBetAmounts: QUICK_BET_AMOUNTS,
            selectedSide,
        },
        setters: {
            setBetInput,
            setSelectedSide,
        },
        actions: {
            flipCoin,
            setMaxBet,
            setQuickBet,
        },
    };
}
