import { formatCurrency } from "@/core/lib/formatCurrency";
import { formatPrizeFloat } from "@/features/Case/lib/formatPrize";
import { rarityColorClasses } from "@/features/Case/types/case";
import type { InventoryItem } from "../types/inventory";

type SellInventoryItemModalProps = {
    inventoryItem: InventoryItem | null;
    onCancel: () => void;
    onConfirm: () => void;
};

export default function SellInventoryItemModal({
    inventoryItem,
    onCancel,
    onConfirm,
}: SellInventoryItemModalProps) {
    if (!inventoryItem) {
        return null;
    }

    const { item, condition, float, sellPrice } = inventoryItem;
    const itemName = `${item.weapon} | ${item.skin}`;
    const titleId = `sell-inventory-item-title-${inventoryItem.inventoryId}`;

    return (
        <div
            aria-labelledby={titleId}
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 px-4 py-8"
            role="dialog"
        >
            <div className="w-full max-w-md overflow-hidden rounded-xl bg-surface text-text shadow-2xl">
                <div className={`h-2 ${rarityColorClasses[item.rarity]}`}></div>

                <div className="grid gap-5 p-6">
                    <div className="text-center">
                        <p className="text-sm font-bold uppercase tracking-wide text-muted">Confirm sale</p>
                        <h2 id={titleId} className="mt-2 text-2xl font-bold leading-tight">
                            {itemName}
                        </h2>
                    </div>

                    <div className="flex h-40 items-center justify-center rounded-lg bg-surface-secondary p-5">
                        <img
                            src={item.image}
                            alt={itemName}
                            className="max-h-full max-w-full object-contain"
                        />
                    </div>

                    <div className="rounded-lg bg-surface-secondary p-4 text-center">
                        <p className="font-bold">{condition.label}</p>
                        <p className="text-sm text-muted">Float {formatPrizeFloat(float)}</p>
                    </div>

                    <p className="text-center text-sm text-muted">
                        Sell this skin for <span className="font-bold text-text">{formatCurrency(sellPrice)}</span>?
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                        <button
                            className="rounded-lg bg-surface-secondary px-4 py-3 font-bold text-text transition hover:brightness-110"
                            onClick={onCancel}
                            type="button"
                        >
                            Cancel
                        </button>

                        <button
                            className="rounded-lg bg-secondary px-4 py-3 font-bold text-text transition hover:brightness-110"
                            onClick={onConfirm}
                            type="button"
                        >
                            Sell {formatCurrency(sellPrice)}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
