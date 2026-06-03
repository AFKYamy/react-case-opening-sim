import { isInventorySortMode, type InventorySortMode } from "../lib/sortInventoryItems";

type InventorySortControlProps = {
    sortMode: InventorySortMode;
    onSortModeChange: (sortMode: InventorySortMode) => void;
};

export default function InventorySortControl({
    sortMode,
    onSortModeChange,
}: InventorySortControlProps) {
    return (
        <label className="flex items-center gap-2 text-sm font-bold text-muted" htmlFor="inventory-sort-select">
            Sort by:
            <select
                className="min-w-48 rounded-lg border border-surface-secondary bg-surface px-3 py-2 text-sm font-bold text-text outline-none transition focus:border-primary"
                id="inventory-sort-select"
                onChange={(event) => {
                    if (isInventorySortMode(event.target.value)) {
                        onSortModeChange(event.target.value);
                    }
                }}
                value={sortMode}
            >
                <option value="newest">Newest first</option>
                <option value="rarity">Rarity</option>
                <option value="price">Price</option>
            </select>
        </label>
    );
}
