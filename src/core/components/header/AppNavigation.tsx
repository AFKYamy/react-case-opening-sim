import { NavLink } from "react-router-dom";
import type { NavItem } from "@/core/types/navigation";

const navItems: NavItem[] = [
    { label: "Case", path: "/case", view: "case" },
    { label: "Coinflip", path: "/coinflip", view: "coinflip" },
    { label: "Inventory", path: "/inventory", view: "inventory" },
];

export default function AppNavigation() {
    return (
        <nav aria-label="Primary navigation" className="flex items-center gap-2">
            {navItems.map((item) => (
                <NavLink
                    className={({ isActive }) => `rounded-lg px-3 py-2 text-sm font-bold transition ${isActive ? "bg-surface-secondary text-text" : "text-muted hover:bg-surface-secondary hover:text-text"}`}
                    key={item.view}
                    to={item.path}
                >
                    {item.label}
                </NavLink>
            ))}
        </nav>
    );
}
