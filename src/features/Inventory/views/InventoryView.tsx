import { operationBravoCase } from "@/data/cases/operation-bravo-case";
import { createPrizeDrop } from "@/features/Case/lib/wear";
import InventoryItemCard from "../components/InventoryItemCard";
import type { PrizeDrop } from "@/features/Case/types/prize";

type InventoryViewProps = {
    items?: PrizeDrop[];
};

const gridClassName = "grid w-full grid-cols-[repeat(auto-fill,14rem)] justify-between gap-6 text-center";
const placeholderItems = operationBravoCase.skins.slice(0, 6).map(createPrizeDrop);

export default function InventoryView({ items = placeholderItems }: InventoryViewProps) {
    return (
        <section className="container mx-auto flex flex-col gap-8 px-4 py-10">
            <div>
                <h1 className="text-3xl font-bold">Inventory</h1>
                <p className="text-muted">All skins you own.</p>
            </div>

            {items.length > 0 ? (
                <div className={gridClassName}>
                    {items.map((prizeDrop, index) => (
                        <InventoryItemCard
                            key={`${prizeDrop.item.id}-${prizeDrop.condition.key}-${prizeDrop.float}-${index}`}
                            prizeDrop={prizeDrop}
                        />
                    ))}
                </div>
            ) : (
                <div className="grid min-h-56 place-items-center rounded-xl bg-surface px-6 py-10 text-center">
                    <div>
                        <p className="text-lg font-bold">No skins yet</p>
                        <p className="text-sm text-muted">Open cases build your inventory.</p>
                    </div>
                </div>
            )}
        </section>
    );
}
