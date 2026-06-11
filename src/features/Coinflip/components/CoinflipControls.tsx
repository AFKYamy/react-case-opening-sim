import CoinSideSelector from "./CoinSideSelector";
import CoinflipBetActions from "./CoinflipBetActions";
import CoinflipBetInput from "./CoinflipBetInput";
import CoinflipBetMessage from "./CoinflipBetMessage";
import type { CoinSide } from "../types/coinflip";

type CoinflipControlsProps = {
    balance: number;
    betInput: string;
    canFlip: boolean;
    hasInsufficientBalance: boolean;
    hasInvalidBet: boolean;
    isFlipping: boolean;
    parsedBetAmount: number | null;
    projectedPayout: number;
    quickBetAmounts: number[];
    selectedSide: CoinSide;
    onBetInputChange: (value: string) => void;
    onFlip: () => void;
    onMaxBet: () => void;
    onQuickBet: (amount: number) => void;
    onSelectedSideChange: (side: CoinSide) => void;
};

export default function CoinflipControls({
    balance,
    betInput,
    canFlip,
    hasInsufficientBalance,
    hasInvalidBet,
    isFlipping,
    parsedBetAmount,
    projectedPayout,
    quickBetAmounts,
    selectedSide,
    onBetInputChange,
    onFlip,
    onMaxBet,
    onQuickBet,
    onSelectedSideChange,
}: CoinflipControlsProps) {
    return (
        <>
            <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
                <CoinSideSelector
                    isDisabled={isFlipping}
                    selectedSide={selectedSide}
                    onSelectedSideChange={onSelectedSideChange}
                />

                <CoinflipBetInput
                    betInput={betInput}
                    isDisabled={isFlipping}
                    onBetInputChange={onBetInputChange}
                />
            </div>

            <CoinflipBetActions
                balance={balance}
                canFlip={canFlip}
                hasInsufficientBalance={hasInsufficientBalance}
                isFlipping={isFlipping}
                parsedBetAmount={parsedBetAmount}
                quickBetAmounts={quickBetAmounts}
                onFlip={onFlip}
                onMaxBet={onMaxBet}
                onQuickBet={onQuickBet}
            />

            <CoinflipBetMessage
                hasInsufficientBalance={hasInsufficientBalance}
                hasInvalidBet={hasInvalidBet}
                projectedPayout={projectedPayout}
            />
        </>
    );
}
