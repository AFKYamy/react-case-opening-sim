import type { Case } from "@/features/Case/types/case";
import { csgoWeaponCase } from "./csgo-weapon-case";
import { operationBravoCase } from "./operation-bravo-case";

export const availableCases: Case[] = [
    operationBravoCase,
    csgoWeaponCase,
];

export {
    csgoWeaponCase,
    operationBravoCase
}
