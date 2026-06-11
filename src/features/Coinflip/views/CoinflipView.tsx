import CoinDisplay from "../components/CoinDisplay";
import CoinflipControls from "../components/CoinflipControls";
import CoinflipSidebar from "../components/CoinflipSidebar";
import useCoinflipGame from "../hooks/useCoinflipGame";

export default function CoinflipView() {
    const {
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
            payoutMultiplier,
            projectedPayout,
            projectedProfit,
            quickBetAmounts,
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
    } = useCoinflipGame();

    return (
        <section className="container mx-auto flex flex-col gap-8 px-4 py-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Coinflip</h1>
                    <p className="text-muted">Pick a side and play against a simulated flip.</p>
                </div>

                <div className="rounded-lg bg-surface-secondary px-4 py-3 text-sm font-bold">
                    <span className="text-muted">Payout </span>
                    <span>{payoutMultiplier.toFixed(2)}x</span>
                </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
                <section className="grid gap-8 rounded-2xl bg-surface p-6 sm:p-10">
                    <CoinDisplay
                        isFlipping={isFlipping}
                        latestFlip={latestFlip}
                        selectedSide={selectedSide}
                    />

                    <CoinflipControls
                        balance={balance}
                        betInput={betInput}
                        canFlip={canFlip}
                        hasInsufficientBalance={hasInsufficientBalance}
                        hasInvalidBet={hasInvalidBet}
                        isFlipping={isFlipping}
                        parsedBetAmount={parsedBetAmount}
                        projectedPayout={projectedPayout}
                        quickBetAmounts={quickBetAmounts}
                        selectedSide={selectedSide}
                        onBetInputChange={setBetInput}
                        onFlip={flipCoin}
                        onMaxBet={setMaxBet}
                        onQuickBet={setQuickBet}
                        onSelectedSideChange={setSelectedSide}
                    />
                </section>

                <CoinflipSidebar
                    historyItems={historyItems}
                    latestFlip={latestFlip}
                    projectedProfit={projectedProfit}
                    selectedSide={selectedSide}
                />
            </div>
        </section>
    );
}
