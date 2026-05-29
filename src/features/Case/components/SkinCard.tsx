import type { CaseItem, ItemRarity } from "../types/case";

type SkinCardProps = {
    skin: CaseItem;
};

const rarityStripeClasses: Record<ItemRarity, string> = {
    "Mil-Spec": "bg-rarity-milspec",
    Restricted: "bg-rarity-restricted",
    Classified: "bg-rarity-classified",
    Covert: "bg-rarity-covert",
    "Rare Special Item": "bg-rarity-gold",
};

export default function SkinCard({ skin }: SkinCardProps) {
    const prices = Object.values(skin.prices);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    return (
        <div className="grid grid-rows-[0.75rem_4.75rem_1fr_1.5rem] items-center rounded-2xl px-4 pb-4 pt-3 w-80 h-96 bg-surface">
            <div className={`rounded-xl w-full h-3 ${rarityStripeClasses[skin.rarity]}`}></div>

            <div className="self-start pt-5">
                <p className="text-lg leading-tight min-h-7">{skin.weapon}</p>
                <p className="text-muted leading-tight min-h-6">{skin.skin}</p>
            </div>

            <div className="flex items-center justify-center h-full min-h-0 w-full px-5 py-4">
                {skin.image && (
                    <img
                        src={skin.image}
                        alt={`${skin.weapon} ${skin.skin}`}
                        className="max-w-full max-h-full object-contain"
                    />
                )}
            </div>
            
            <p className="self-end text-secondary leading-none">${minPrice} - ${maxPrice}</p>
        </div>
    )
}
