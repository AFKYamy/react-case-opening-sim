import AppNavigation from "./AppNavigation";
import WalletBalance from "@/features/Wallet/components/WalletBalance";

export default function AppHeader() {
    return (
        <header className="sticky top-0 z-40 border-b border-white/10 bg-bg/95 backdrop-blur">
            <div className="container mx-auto flex min-h-16 items-center justify-between gap-4 px-4">
                <div className="flex items-center gap-8">
                    <p className="text-lg font-bold leading-tight">Case Opening Sim</p>

                    <AppNavigation />
                </div>

                <WalletBalance />
            </div>
        </header>
    );
}
