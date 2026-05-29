import type { CaseSkin, SkinRarity } from "../types/case";

type SkinCardProps = {
    skin: CaseSkin;
};

const rarityStripeClasses: Record<SkinRarity, string> = {
    "Mil-Spec": "bg-rarity-milspec",
    Restricted: "bg-rarity-restricted",
    Classified: "bg-rarity-classified",
    Covert: "bg-rarity-covert",
};

export default function SkinCard({ skin }: SkinCardProps) {
    const prices = Object.values(skin.prices);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    return (
        <div className="flex flex-col items-center justify-between rounded-2xl px-3 pb-5 pt-3 w-72 bg-surface">
            <div className={`mb-5 rounded-xl w-full h-3 ${rarityStripeClasses[skin.rarity]}`}></div>

            <div>
                <p className="text-lg">{skin.weapon}</p>
                <p className="text-muted">{skin.skin}</p>
                <p className="text-muted">Factory New</p>
            </div>

            <div className="h-full max-w-3/4 py-7">
                {skin.image && (
                    <img
                        src={skin.image}
                        alt={`${skin.weapon} ${skin.skin}`}
                        className="max-w-full h-auto object-cover"
                    />
                )}
            </div>
            
            <p className="text-secondary">${minPrice} - ${maxPrice}</p>
        </div>
    )
}
