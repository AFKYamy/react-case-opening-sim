import CaseContent from '../components/CaseContent'
import CaseIdlePreview from '../components/CaseIdlePreview'
import CaseRoller from '../components/CaseRoller'
import useCaseOpeningGame from '../hooks/useCaseOpeningGame'

export default function CaseOpeningView() {
    const {
        values: {
            selectedCase,
            isOpening,
            lastDrop,
            rollItems,
            rollTargetIndex,
            hasRollStarted,
        },
        openCase,
    } = useCaseOpeningGame();
    const hasOpenedCase = rollItems.length > 0;

    return (
        // Game
        <div className="container flex flex-col gap-20 mx-auto px-4 py-10">
            {/* Case Name / Info */}
            <section className="text-center font-bold">
                <h1 className="text-3xl">{selectedCase.name}</h1>
                <p>{selectedCase.collection}</p>
            </section>

            {/* Opening section */}
            <section className="flex flex-col items-center gap-10 rounded-2xl p-10 bg-surface">
                {/* Case Picture / Roulette */}
                {hasOpenedCase ? (
                    <CaseRoller
                        skins={selectedCase.skins}
                        rollItems={rollItems}
                        targetIndex={rollTargetIndex}
                        hasRollStarted={hasRollStarted}
                        isOpening={isOpening}
                        lastDrop={lastDrop}
                    />
                ) : (
                    <CaseIdlePreview selectedCase={selectedCase} />
                )}

                {/* Controls */}
                <div>
                    <button
                        className="px-5 py-4 rounded-4xl bg-primary font-bold cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
                        disabled={isOpening}
                        onClick={openCase}
                    >
                        Open for $87.29
                    </button>
                </div>
            </section>

            {/* Case Contents */}
            <CaseContent skins={selectedCase.skins} knives={selectedCase.knives} />

            {/* Drop Odds */}
            <section>
                {/* Button opens Modal that will show odds */}
            </section>
        </div>
    )
}
