import { formatCurrency } from "@/core/lib/formatCurrency";

export const formatPrizePrice = formatCurrency;

export const formatPrizeFloat = (float: number) => float.toFixed(5);
