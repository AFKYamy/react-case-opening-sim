import type { CaseItem, SkinPrices } from "./case";

export type WearConditionKey = keyof SkinPrices;

export type WearCondition = {
    key: WearConditionKey;
    label: string;
    abbreviation: string;
    floatMin: number;
    floatMax: number;
};

export type PrizeDrop = {
    item: CaseItem;
    condition: WearCondition;
    float: number;
    sellPrice: number;
};
