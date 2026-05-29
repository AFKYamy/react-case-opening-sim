import { ROLL_ITEM_COUNT, ROLL_TARGET_INDEX } from "../constants/roll";
import type { Case, CaseItem } from "../types/case";
import { getRandomDrop } from "./getRandomDrop";

export const createRollItems = (selectedCase: Case, winner: CaseItem) => {
    return Array.from({ length: ROLL_ITEM_COUNT }, (_, index) => {
        if (index === ROLL_TARGET_INDEX) {
            return winner;
        }

        return getRandomDrop(selectedCase) ?? winner;
    });
};
