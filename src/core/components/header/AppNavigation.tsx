import type { AppView } from "./AppHeader";

type AppNavigationProps = {
    activeView: AppView;
    onNavigate: (view: AppView) => void;
};

const navItems: Array<{ label: string; view: AppView }> = [
    { label: "Case", view: "case" },
    { label: "Inventory", view: "inventory" },
];

export default function AppNavigation({ activeView, onNavigate }: AppNavigationProps) {
    return (
        <nav aria-label="Primary navigation" className="flex items-center gap-2">
            {navItems.map((item) => {
                const isActive = activeView === item.view;

                return (
                    <button
                        aria-current={isActive ? "page" : undefined}
                        className={`rounded-lg px-3 py-2 text-sm font-bold transition ${isActive ? "bg-surface-secondary text-text" : "text-muted hover:bg-surface-secondary hover:text-text"}`}
                        key={item.view}
                        onClick={() => onNavigate(item.view)}
                        type="button"
                    >
                        {item.label}
                    </button>
                );
            })}
        </nav>
    );
}
