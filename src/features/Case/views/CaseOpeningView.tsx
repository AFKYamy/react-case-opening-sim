import CaseContent from '../components/content/CaseContent'
import CaseOpeningPanel from '../components/opening/CaseOpeningPanel'
import PrizeModal from '../components/modals/PrizeModal'
import useCaseOpeningGame from '../hooks/useCaseOpeningGame'

export default function CaseOpeningView() {
    const {
        values: {
            availableCases,
            selectedCase,
            isOpening,
            lastDrop,
            rollItems,
            rollTargetIndex,
            hasRollStarted,
            prizeDrop,
            canOpenCase,
        },
        actions: {
            keepPrizeDrop,
            openCase,
            openCaseAgain,
            selectCase,
            sellPrizeDrop,
        },
    } = useCaseOpeningGame();

    return (
        <div className="container flex flex-col gap-20 mx-auto px-4 py-10">
            <section className="text-center font-bold">
                <h1 className="text-3xl">{selectedCase.name}</h1>
                <p>{selectedCase.collection}</p>
            </section>

            <CaseOpeningPanel
                availableCases={availableCases}
                selectedCase={selectedCase}
                isOpening={isOpening}
                lastDrop={lastDrop}
                rollItems={rollItems}
                rollTargetIndex={rollTargetIndex}
                hasRollStarted={hasRollStarted}
                canOpenCase={canOpenCase}
                onOpenCase={openCase}
                onSelectCase={selectCase}
            />

            <CaseContent skins={selectedCase.skins} knives={selectedCase.knives} />

            <PrizeModal
                prizeDrop={prizeDrop}
                canOpenCase={canOpenCase}
                onSell={sellPrizeDrop}
                onKeep={keepPrizeDrop}
                onOpenAgain={openCaseAgain}
            />
        </div>
    )
}
