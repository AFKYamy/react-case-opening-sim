import { useState } from "react";
import { useGameStore } from "@/store/gameStore";
import { DEFAULT_BALANCE } from "@/store/slices/walletSlice";
import { QUICK_ADD_BALANCE_AMOUNTS } from "../constants/wallet";
import { parseWalletBalanceInput } from "../lib/parseWalletBalanceInput";

export const useWalletBalance = () => {
    const balance = useGameStore((state) => state.balance);
    const addBalance = useGameStore((state) => state.addBalance);
    const resetStoreBalance = useGameStore((state) => state.resetBalance);
    const setStoreBalance = useGameStore((state) => state.setBalance);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [balanceInput, setBalanceInput] = useState(() => balance.toFixed(2));

    const parsedBalanceInput = parseWalletBalanceInput(balanceInput);
    const hasInvalidBalanceInput = parsedBalanceInput === null;

    const openModal = () => {
        setBalanceInput(balance.toFixed(2));
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const quickAddBalance = (amount: number) => {
        addBalance(amount);
        setBalanceInput(useGameStore.getState().balance.toFixed(2));
    };

    const saveBalance = () => {
        if (parsedBalanceInput === null) {
            return;
        }

        setStoreBalance(parsedBalanceInput);
        setBalanceInput(parsedBalanceInput.toFixed(2));
    };

    const resetBalance = () => {
        resetStoreBalance();
        setBalanceInput(DEFAULT_BALANCE.toFixed(2));
    };

    return {
        values: {
            balance,
            balanceInput,
            defaultBalance: DEFAULT_BALANCE,
            hasInvalidBalanceInput,
            isModalOpen,
            quickAddBalanceAmounts: QUICK_ADD_BALANCE_AMOUNTS,
        },
        setters: {
            setBalanceInput,
        },
        actions: {
            closeModal,
            openModal,
            quickAddBalance,
            resetBalance,
            saveBalance,
        },
    };
};
