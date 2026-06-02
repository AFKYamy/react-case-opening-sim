export type SkinRarity =
    | "Mil-Spec"
    | "Restricted"
    | "Classified"
    | "Covert";

export type KnifeRarity = "Rare Special Item";

export type ItemRarity = SkinRarity | KnifeRarity;

export const rarityColorClasses: Record<ItemRarity, string> = {
    "Mil-Spec": "bg-rarity-milspec",
    Restricted: "bg-rarity-restricted",
    Classified: "bg-rarity-classified",
    Covert: "bg-rarity-covert",
    "Rare Special Item": "bg-rarity-gold",
};

export type CaseItemCategory = "skin" | "knife";

export type SkinPrices = {
    battleScarred: number;
    wellWorn: number;
    minimalWear: number;
    fieldTested: number;
    factoryNew: number;
};

export type WearConditionKey = keyof SkinPrices;

export type WearCondition = {
    key: WearConditionKey;
    label: string;
    abbreviation: string;
    floatMin: number;
    floatMax: number;
};

export type CaseItem = {
    id: string;
    skin: string;
    weapon: string;
    category: CaseItemCategory;
    sources: string[];
    rarity: ItemRarity;
    prices: SkinPrices;
    image: string;
};

export type PrizeDrop = {
    item: CaseItem;
    condition: WearCondition;
    float: number;
    sellPrice: number;
};

export type CaseSkin = CaseItem & {
    category: "skin";
    rarity: SkinRarity;
};

export type CaseKnife = CaseItem & {
    category: "knife";
    rarity: KnifeRarity;
};

export type Case = {
    id: string;
    name: string;
    collection: string;
    openPrice: number;
    image?: string;
    skins: CaseSkin[];
    knives: CaseKnife[];
};
