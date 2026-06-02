import RollerItemCard from "./RollerItemCard";
import { ROLL_DURATION_MS } from "../constants/roll";
import useRollerLayout from "../hooks/useRollerLayout";
import type { CaseItem } from "../types/case";

type CaseRollerProps = {
    skins: CaseItem[];
    rollItems: CaseItem[];
    targetIndex: number;
    hasRollStarted: boolean;
    isOpening: boolean;
    lastDrop: CaseItem | null;
};

export default function CaseRoller({
    skins,
    rollItems,
    targetIndex,
    hasRollStarted,
    isOpening,
    lastDrop,
}: CaseRollerProps) {
    const items = rollItems.length > 0 ? rollItems : skins;
    const hasRollItems = rollItems.length > 0;
    const { containerRef, translateX } = useRollerLayout({
        hasRollItems,
        hasRollStarted,
        targetIndex,
    });

    return (
        <div ref={containerRef} className="relative flex h-56 w-full items-center overflow-hidden rounded-xl bg-surface-secondary px-6 py-5">
            <div className={`pointer-events-none absolute left-1/2 top-0 z-20 h-full w-1 -translate-x-1/2 ${isOpening ? "bg-rarity-gold" : "bg-neutral-50"}`}></div>

            <div
                className="flex min-h-44 gap-4"
                style={{
                    transform: `translateX(${translateX}px)`,
                    transition: isOpening && hasRollStarted
                        ? `transform ${ROLL_DURATION_MS}ms cubic-bezier(0.12, 0.82, 0.18, 1)`
                        : "none",
                }}
            >
                {items.map((item, index) => (
                    <RollerItemCard
                        key={`${item.id}-${index}`}
                        item={item}
                        isWinner={lastDrop?.id === item.id && index === targetIndex}
                    />
                ))}
            </div>

        </div>
    );
}
