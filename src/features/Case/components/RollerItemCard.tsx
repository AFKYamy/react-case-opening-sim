import { rarityColorClasses, type CaseItem } from "../types/case";

type RollerItemCardProps = {
    item: CaseItem;
    isWinner: boolean;
};

export default function RollerItemCard({ item, isWinner }: RollerItemCardProps) {
    const itemName = `${item.weapon} ${item.skin}`;

    return (
        <div
            className={`grid h-40 w-36 shrink-0 grid-rows-[1fr_3rem] rounded-lg px-3 py-3 text-center shadow-lg transition-transform ${isWinner ? "scale-105" : ""} ${rarityColorClasses[item.rarity]}`}
        >
            <div className="flex min-h-0 items-center justify-center">
                <img
                    src={item.image}
                    alt={itemName}
                    className="max-h-full max-w-full object-contain"
                />
            </div>

            <div className="self-end">
                <p className="truncate text-sm font-bold leading-tight text-text">{item.weapon}</p>
                <p className="truncate text-xs leading-tight text-text/80">{item.skin}</p>
            </div>
        </div>
    );
}
