export type SkinRarity =
    | "Mil-Spec"
    | "Restricted"
    | "Classified"
    | "Covert";

export type KnifeRarity = "Rare Special Item";

export type ItemRarity = SkinRarity | KnifeRarity;

export type CaseItemCategory = "skin" | "knife";

export type SkinPrices = {
    battleScarred: number;
    wellWorn: number;
    minimalWear: number;
    fieldTested: number;
    factoryNew: number;
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
    skins: CaseSkin[];
    knives: CaseKnife[];
};
