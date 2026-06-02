import { formatCurrency } from "./formatCurrency";

export const formatPrizePrice = formatCurrency;

export const formatPrizeFloat = (float: number) => float.toFixed(5);
