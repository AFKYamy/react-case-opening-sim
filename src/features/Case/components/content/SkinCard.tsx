import { rarityColorClasses, type CaseItem } from "../../types/case";

type SkinCardProps = {
    skin: CaseItem;
};

export default function SkinCard({ skin }: SkinCardProps) {
    const prices = Object.values(skin.prices);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    return (
        <div className="grid grid-rows-[0.5rem_3.75rem_1fr_1.25rem] items-center rounded-lg px-3 pb-3 pt-2 w-56 h-72 bg-surface">
            <div className={`rounded-full w-full h-2 ${rarityColorClasses[skin.rarity]}`}></div>

            <div className="self-start pt-4">
                <p className="text-base leading-tight min-h-6">{skin.weapon}</p>
                <p className="text-sm text-muted leading-tight min-h-5">{skin.skin}</p>
            </div>

            <div className="flex items-center justify-center h-full min-h-0 w-full px-3 py-3">
                {skin.image && (
                    <img
                        src={skin.image}
                        alt={`${skin.weapon} ${skin.skin}`}
                        className="max-w-full max-h-full object-contain"
                    />
                )}
            </div>
            
            <p className="self-end text-sm text-secondary leading-none">${minPrice} - ${maxPrice}</p>
        </div>
    )
}
