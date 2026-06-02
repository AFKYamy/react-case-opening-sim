import { useGameStore } from "@/store/gameStore";
import { formatCurrency } from "../../lib/formatCurrency";

export default function WalletBalance() {
    const balance = useGameStore((state) => state.balance);

    return (
        <div className="flex items-center gap-2 rounded-lg bg-surface-secondary px-4 py-2">
            <span className="text-sm font-bold text-muted">Balance</span>
            <span className="font-bold text-text">{formatCurrency(balance)}</span>
        </div>
    );
}
