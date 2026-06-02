import CaseContent from '../components/CaseContent'
import CaseOpeningPanel from '../components/CaseOpeningPanel'
import PrizeModal from '../components/PrizeModal'
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
            prizeDrop,
        },
        actions: {
            openCase,
            openCaseAgain,
        },
    } = useCaseOpeningGame();

    return (
        <div className="container flex flex-col gap-20 mx-auto px-4 py-10">
            <section className="text-center font-bold">
                <h1 className="text-3xl">{selectedCase.name}</h1>
                <p>{selectedCase.collection}</p>
            </section>

            <CaseOpeningPanel
                selectedCase={selectedCase}
                isOpening={isOpening}
                lastDrop={lastDrop}
                rollItems={rollItems}
                rollTargetIndex={rollTargetIndex}
                hasRollStarted={hasRollStarted}
                onOpenCase={openCase}
            />

            <CaseContent skins={selectedCase.skins} knives={selectedCase.knives} />

            <section>
                {/* Button opens Modal that will show odds */}
            </section>

            <PrizeModal prizeDrop={prizeDrop} onOpenAgain={openCaseAgain} />
        </div>
    )
}
