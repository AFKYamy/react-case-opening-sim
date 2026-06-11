import { COIN_SIDES } from "../constants/coinflip";
import type { CoinSide } from "../types/coinflip";

type CoinSideSelectorProps = {
    isDisabled: boolean;
    selectedSide: CoinSide;
    onSelectedSideChange: (side: CoinSide) => void;
};

const getSideButtonClassName = (side: CoinSide, selectedSide: CoinSide) => {
    if (side !== selectedSide) {
        return "bg-surface-secondary text-muted hover:brightness-110";
    }

    return side === "ct" ? "bg-primary text-text" : "bg-secondary text-text";
};

export default function CoinSideSelector({
    isDisabled,
    selectedSide,
    onSelectedSideChange,
}: CoinSideSelectorProps) {
    return (
        <div className="grid gap-3">
            <p className="text-sm font-bold text-muted">Choose side</p>
            <div className="grid grid-cols-2 gap-3">
                {COIN_SIDES.map((side) => (
                    <button
                        className={`rounded-lg px-4 py-4 text-lg font-bold transition ${getSideButtonClassName(side.value, selectedSide)}`}
                        disabled={isDisabled}
                        key={side.value}
                        onClick={() => onSelectedSideChange(side.value)}
                        type="button"
                    >
                        {side.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
