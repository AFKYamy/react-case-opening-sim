import type { SkinPrices } from "@/features/Case/types/case";

export const createWearPrices = (min: number, max = min): SkinPrices => {
    const step = (max - min) / 4;

    return {
        battleScarred: Number(min.toFixed(2)),
        wellWorn: Number((min + step).toFixed(2)),
        minimalWear: Number((min + step * 3).toFixed(2)),
        fieldTested: Number((min + step * 2).toFixed(2)),
        factoryNew: Number(max.toFixed(2)),
    };
};
