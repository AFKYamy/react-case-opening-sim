import InventoryItemCard from "../components/InventoryItemCard";
import InventorySortControl from "../components/InventorySortControl";
import InventoryStats from "../components/InventoryStats";
import SellInventoryItemModal from "../components/SellInventoryItemModal";
import useInventory from "../hooks/useInventory";

const gridClassName = "grid w-full grid-cols-[repeat(auto-fill,14rem)] justify-between gap-6 text-center";

export default function InventoryView() {
    const {
        values: {
            inventoryStats,
            inventoryItems,
            itemPendingSale,
            sortMode,
        },
        setters: {
            setItemPendingSale,
            setSortMode,
        },
        actions: {
            cancelSale,
            confirmSale,
        },
    } = useInventory();

    return (
        <section className="container mx-auto flex flex-col gap-8 px-4 py-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Inventory</h1>
                    <p className="text-muted">All skins you own.</p>
                </div>

                <InventorySortControl
                    onSortModeChange={setSortMode}
                    sortMode={sortMode}
                />
            </div>

            <InventoryStats inventoryStats={inventoryStats} />

            {inventoryItems.length > 0 ? (
                <div className={gridClassName}>
                    {inventoryItems.map((inventoryItem) => (
                        <InventoryItemCard
                            key={inventoryItem.inventoryId}
                            inventoryItem={inventoryItem}
                            onSell={setItemPendingSale}
                        />
                    ))}
                </div>
            ) : (
                <div className="grid min-h-56 place-items-center rounded-xl bg-surface px-6 py-10 text-center">
                    <div>
                        <p className="text-lg font-bold">No skins yet</p>
                        <p className="text-sm text-muted">Open cases to build your inventory.</p>
                    </div>
                </div>
            )}

            <SellInventoryItemModal
                inventoryItem={itemPendingSale}
                onCancel={cancelSale}
                onConfirm={confirmSale}
            />
        </section>
    );
}
