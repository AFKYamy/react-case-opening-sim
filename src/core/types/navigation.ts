export type AppView = "case" | "coinflip" | "inventory";

export type NavItem = {
    label: string;
    path: string;
    view: AppView;
};
