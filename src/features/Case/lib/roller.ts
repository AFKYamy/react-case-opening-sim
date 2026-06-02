import { ROLL_CARD_STEP, ROLL_CARD_WIDTH, ROLLER_PADDING } from "../constants/roll";

type GetTargetTranslateParams = {
    containerWidth: number;
    targetIndex: number;
};

export const getRollerTargetTranslate = ({
    containerWidth,
    targetIndex,
}: GetTargetTranslateParams) => {
    return containerWidth / 2 - ROLLER_PADDING - targetIndex * ROLL_CARD_STEP - ROLL_CARD_WIDTH / 2;
};
