import { operationBravoCase } from "@/data/cases/operation-bravo-case";
import { createPrizeDrop } from "@/features/Case/lib/wear";

export const placeholderInventoryItems = operationBravoCase.skins.slice(0, 6).map(createPrizeDrop);
