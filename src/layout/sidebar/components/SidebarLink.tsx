import type { SidebarLinkProps } from "../types/SidebarTypes";

const SidebarLink = ({ href, icon: Icon, label, isCollapsed, isActive, onClick }:SidebarLinkProps) => {
    return (
        <div 
            onClick={() => onClick(href)}
            className={`cursor-pointer flex items-center 
            ${isCollapsed ? "justify-center py-4 " : "justify-start px-8 py-4"
                } hover:text-blue-500 hover:bg-blue-100 transition-colors ${isActive ? "bg-blue-200 text-blue-600 " : ""}
                }`}>
            <Icon className='w-6 h-6 text-gray-700' />
            <span className={`ml-4 ${isCollapsed ? "hidden" : "block"} font-medium text-gray-700`}>
                {label}
            </span>
        </div>
    );
};

export default SidebarLink;