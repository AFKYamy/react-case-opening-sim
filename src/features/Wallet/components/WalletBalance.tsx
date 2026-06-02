import { createPortal } from "react-dom";
import { formatCurrency } from "@/core/lib/formatCurrency";
import { useWalletBalance } from "../hooks/useWalletBalance";

export default function WalletBalance() {
    const {
        actions: { closeModal, openModal, quickAddBalance, resetBalance, saveBalance },
        setters: { setBalanceInput },
        values: {
            balance,
            balanceInput,
            defaultBalance,
            hasInvalidBalanceInput,
            isModalOpen,
            quickAddBalanceAmounts,
        },
    } = useWalletBalance();

    return (
        <>
            <button
                className="flex items-center gap-2 rounded-lg bg-surface-secondary px-4 py-2 transition hover:brightness-110"
                onClick={openModal}
                type="button"
            >
                <span className="text-sm font-bold text-muted">Balance</span>
                <span className="font-bold text-text">{formatCurrency(balance)}</span>
            </button>

            {isModalOpen &&
                createPortal(
                    <div
                        aria-labelledby="wallet-balance-title"
                        aria-modal="true"
                        className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 px-4 py-8"
                        role="dialog"
                    >
                        <div className="w-full max-w-md rounded-xl bg-surface p-6 text-text shadow-2xl">
                            <div className="grid gap-6">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-sm font-bold uppercase tracking-wide text-muted">Wallet</p>
                                        <h2 id="wallet-balance-title" className="mt-1 text-2xl font-bold leading-tight">
                                            Balance
                                        </h2>
                                    </div>

                                    <button
                                        className="rounded-lg bg-surface-secondary px-3 py-2 text-sm font-bold text-text transition hover:brightness-110"
                                        onClick={closeModal}
                                        type="button"
                                    >
                                        Close
                                    </button>
                                </div>

                                <div className="rounded-lg bg-surface-secondary p-4">
                                    <p className="text-xs font-bold uppercase tracking-wide text-muted">
                                        Current balance
                                    </p>
                                    <p className="mt-1 text-3xl font-bold">{formatCurrency(balance)}</p>
                                </div>

                                <div className="grid grid-cols-3 gap-3">
                                    {quickAddBalanceAmounts.map((amount) => (
                                        <button
                                            className="rounded-lg bg-primary px-3 py-3 font-bold text-text transition hover:bg-primary-dark"
                                            key={amount}
                                            onClick={() => quickAddBalance(amount)}
                                            type="button"
                                        >
                                            +{formatCurrency(amount)}
                                        </button>
                                    ))}
                                </div>

                                <div className="grid gap-2">
                                    <label className="text-sm font-bold text-muted" htmlFor="wallet-balance-input">
                                        Set balance
                                    </label>

                                    <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                                        <input
                                            className="min-w-0 rounded-lg bg-surface-secondary px-4 py-3 font-bold text-text outline-none ring-1 ring-transparent transition focus:ring-primary"
                                            id="wallet-balance-input"
                                            inputMode="decimal"
                                            onChange={(event) => setBalanceInput(event.target.value)}
                                            type="text"
                                            value={balanceInput}
                                        />

                                        <button
                                            className="rounded-lg bg-secondary px-4 py-3 font-bold text-text transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                                            disabled={hasInvalidBalanceInput}
                                            onClick={saveBalance}
                                            type="button"
                                        >
                                            Save
                                        </button>
                                    </div>

                                    {hasInvalidBalanceInput && (
                                        <p className="text-sm font-bold text-secondary">
                                            Enter a valid positive number, with up to 2 decimals.
                                        </p>
                                    )}
                                </div>

                                <button
                                    className="rounded-lg bg-surface-secondary px-4 py-3 font-bold text-text transition hover:brightness-110"
                                    onClick={resetBalance}
                                    type="button"
                                >
                                    Reset to {formatCurrency(defaultBalance)}
                                </button>
                            </div>
                        </div>
                    </div>,
                    document.body,
                )}
        </>
    );
}
