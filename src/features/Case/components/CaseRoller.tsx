import { useEffect, useRef, useState } from "react";
import { rarityColorClasses, type CaseItem } from "../types/case";
import { ROLL_CARD_STEP, ROLL_CARD_WIDTH, ROLL_DURATION_MS, ROLLER_PADDING } from "../constants/roll";

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
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const items = rollItems.length > 0 ? rollItems : skins;
    const targetTranslate = containerWidth / 2 - ROLLER_PADDING - targetIndex * ROLL_CARD_STEP - ROLL_CARD_WIDTH / 2;
    const translateX = rollItems.length > 0 && hasRollStarted ? targetTranslate : 0;

    useEffect(() => {
        const updateContainerWidth = () => {
            setContainerWidth(containerRef.current?.clientWidth ?? 0);
        };

        updateContainerWidth();
        window.addEventListener("resize", updateContainerWidth);

        return () => {
            window.removeEventListener("resize", updateContainerWidth);
        };
    }, []);

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
                {items.map((skin, index) => (
                    <div
                        key={`${skin.id}-${index}`}
                        className={`grid h-40 w-36 shrink-0 grid-rows-[1fr_3rem] rounded-lg px-3 py-3 text-center shadow-lg transition-transform ${lastDrop?.id === skin.id && index === targetIndex ? "scale-105" : ""} ${rarityColorClasses[skin.rarity]}`}
                    >
                        <div className="flex min-h-0 items-center justify-center">
                            <img
                                src={skin.image}
                                alt={`${skin.weapon} ${skin.skin}`}
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>

                        <div className="self-end">
                            <p className="truncate text-sm font-bold leading-tight text-text">{skin.weapon}</p>
                            <p className="truncate text-xs leading-tight text-text/80">{skin.skin}</p>
                        </div>
                    </div>
                ))}
            </div>

            {lastDrop && (
                <div className="pointer-events-none absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-bg/80 px-4 py-1 text-sm font-bold text-text">
                    {lastDrop.weapon} | {lastDrop.skin}
                </div>
            )}
        </div>
    );
}
