export type AppView = "case" | "inventory";

export type NavItem = {
    label: string;
    path: string;
    view: AppView;
};
