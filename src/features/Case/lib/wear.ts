import type { CaseItem, PrizeDrop, WearCondition, WearConditionKey } from "../types/case";

const wearConditions: WearCondition[] = [
    {
        key: "factoryNew",
        label: "Factory New",
        abbreviation: "FN",
        floatMin: 0,
        floatMax: 0.07,
    },
    {
        key: "minimalWear",
        label: "Minimal Wear",
        abbreviation: "MW",
        floatMin: 0.07,
        floatMax: 0.15,
    },
    {
        key: "fieldTested",
        label: "Field-Tested",
        abbreviation: "FT",
        floatMin: 0.15,
        floatMax: 0.38,
    },
    {
        key: "wellWorn",
        label: "Well-Worn",
        abbreviation: "WW",
        floatMin: 0.38,
        floatMax: 0.45,
    },
    {
        key: "battleScarred",
        label: "Battle-Scarred",
        abbreviation: "BS",
        floatMin: 0.45,
        floatMax: 1,
    },
];

const wearWeights: Record<WearConditionKey, number> = {
    factoryNew: 3,
    minimalWear: 18,
    fieldTested: 58,
    wellWorn: 16,
    battleScarred: 5,
};

const getRandomFloat = (min: number, max: number) => {
    const value = min + Math.random() * (max - min);

    return Number(value.toFixed(5));
};

const getRandomWearCondition = () => {
    const totalWeight = wearConditions.reduce((total, condition) => total + wearWeights[condition.key], 0);
    let roll = Math.random() * totalWeight;

    for (const condition of wearConditions) {
        roll -= wearWeights[condition.key];

        if (roll <= 0) {
            return condition;
        }
    }

    return wearConditions[wearConditions.length - 1];
};

export const createPrizeDrop = (item: CaseItem): PrizeDrop => {
    const condition = getRandomWearCondition();

    return {
        item,
        condition,
        float: getRandomFloat(condition.floatMin, condition.floatMax),
        sellPrice: item.prices[condition.key],
    };
};

