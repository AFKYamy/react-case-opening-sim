type CoinflipBetInputProps = {
    betInput: string;
    isDisabled: boolean;
    onBetInputChange: (value: string) => void;
};

export default function CoinflipBetInput({
    betInput,
    isDisabled,
    onBetInputChange,
}: CoinflipBetInputProps) {
    return (
        <div className="grid gap-3">
            <label className="text-sm font-bold text-muted" htmlFor="coinflip-bet">
                Bet amount
            </label>
            <input
                className="min-w-0 rounded-lg bg-surface-secondary px-4 py-4 text-lg font-bold text-text outline-none ring-1 ring-transparent transition focus:ring-primary"
                disabled={isDisabled}
                id="coinflip-bet"
                inputMode="decimal"
                onChange={(event) => onBetInputChange(event.target.value)}
                type="text"
                value={betInput}
            />
        </div>
    );
}
