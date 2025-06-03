export interface SidebarLinkProps {
    href: string;
    icon: any;
    label: string;
    isCollapsed: boolean;
    isActive: boolean;
    onClick: (href: string) => void;
}
export interface SidebarProps {
    isCollapsed: boolean;
    currentPath: string;
    onNavigate : (href: string) => void;
}