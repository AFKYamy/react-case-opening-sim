import { formatCurrency } from "@/core/lib/formatCurrency";
import { formatPrizeFloat } from "@/features/Case/lib/formatPrize";
import { rarityColorClasses } from "@/features/Case/types/case";
import type { InventoryItem } from "../types/inventory";

type InventoryItemCardProps = {
    inventoryItem: InventoryItem;
    onSell: (inventoryId: string) => void;
};

export default function InventoryItemCard({ inventoryItem, onSell }: InventoryItemCardProps) {
    const { inventoryId, item, condition, float, sellPrice } = inventoryItem;
    const itemName = `${item.weapon} ${item.skin}`;

    return (
        <div className="grid h-80 w-56 grid-rows-[0.5rem_3.75rem_1fr_2rem_2.5rem] items-center rounded-lg bg-surface px-3 pb-3 pt-2">
            <div className={`h-2 w-full rounded-full ${rarityColorClasses[item.rarity]}`}></div>

            <div className="self-start pt-4">
                <p className="min-h-6 text-base leading-tight">{item.weapon}</p>
                <p className="min-h-5 text-sm leading-tight text-muted">{item.skin}</p>
            </div>

            <div className="flex h-full min-h-0 w-full items-center justify-center px-3 py-3">
                {item.image && (
                    <img
                        src={item.image}
                        alt={itemName}
                        className="max-h-full max-w-full object-contain"
                    />
                )}
            </div>

            <div className="self-end text-xs leading-tight">
                <p className="font-bold text-text">{condition.label}</p>
                <p className="text-muted">Float {formatPrizeFloat(float)}</p>
            </div>

            <button
                className="self-end rounded-lg bg-secondary px-3 py-2 text-sm font-bold leading-none text-text transition hover:brightness-110"
                onClick={() => onSell(inventoryId)}
                type="button"
            >
                Sell for {formatCurrency(sellPrice)}
            </button>
        </div>
    );
}
