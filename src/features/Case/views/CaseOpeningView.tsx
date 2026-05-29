import CaseContent from '../components/CaseContent'
import useCaseOpeningGame from '../hooks/useCaseOpeningGame'

export default function CaseOpeningView() {
    const {
        values: {
            selectedCase,
            isOpening,
        },
        openCase,
    } = useCaseOpeningGame();

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
                <div className="flex items-center w-full px-10 py-5 rounded-2xl min-h-60 bg-surface-secondary">
                    <div className="w-max h-full p-10 bg-gray-500">
                        <p>Opening...</p>
                    </div>
                </div>

                {/* Controls */}
                <div>
                    <button
                        className="px-5 py-4 rounded-4xl bg-primary font-bold cursor-pointer"
                        disabled={isOpening}
                        onClick={openCase}
                    >
                        Open for $87.29
                    </button>
                </div>
            </section>

            {/* Case Contents */}
            <CaseContent skins={selectedCase.skins} />

            {/* Drop Odds */}
            <section>
                {/* Button opens Modal that will show odds */}
            </section>
        </div>
    )
}
