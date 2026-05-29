export type SkinRarity =
    | "Mil-Spec"
    | "Restricted"
    | "Classified"
    | "Covert";

export type SkinPrices = {
    battleScarred: number;
    wellWorn: number;
    minimalWear: number;
    fieldTested: number;
    factoryNew: number;
};

export type CaseSkin = {
    id: string;
    skin: string;
    weapon: string;
    sources: string[];
    rarity: SkinRarity;
    prices: SkinPrices;
    image: string;
};

export type Case = {
    id: string;
    name: string;
    collection: string;
    skins: CaseSkin[];
};
