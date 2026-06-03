import { rarityColorClasses } from "@/features/Case/types/case";
import type { InventoryStats as InventoryStatsValue } from "../lib/getInventoryStats";

type InventoryStatsProps = {
    inventoryStats: InventoryStatsValue;
};

export default function InventoryStats({ inventoryStats }: InventoryStatsProps) {
    const visibleRarityCounts = inventoryStats.rarityCounts.filter((rarityCount) => rarityCount.count > 0);
    const itemLabel = inventoryStats.totalItems === 1 ? "item" : "items";

    return (
        <div className="border-y border-surface-secondary py-3">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-bold">
                <p className="text-text">
                    {inventoryStats.totalItems} {itemLabel}
                </p>

                {visibleRarityCounts.length > 0 && (
                    <>
                        <span className="hidden text-muted sm:inline">|</span>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                            {visibleRarityCounts.map(({ count, rarity }) => (
                                <div className="flex items-center gap-2" key={rarity}>
                                    <span className="text-muted">{count}x</span>
                                    <span
                                        className={`h-3 w-3 mt-0.5 rounded-full ${rarityColorClasses[rarity]}`}
                                    ></span>
                                    <span>{rarity}</span>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
