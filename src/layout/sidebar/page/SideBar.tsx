import SidebarLink from "../components/SidebarLink";
import type { SidebarProps } from "../types/SidebarTypes"
import { Archive, CircleDollarSign, Clipboard, Layout, Settings2, Users, Menu, ListTodo } from "lucide-react";



const SideBar = () => {
  const { isCollapsed, currentPath, onNavigate }: SidebarProps = {
    isCollapsed: false,
    currentPath: '',
    onNavigate: () => { }
  }
  const sidebarClass = `fixed flex flex-col ${isCollapsed ? 'w-0 md:w-16' : 'w-72 md:w-64'
    } bg-gray-50 transition-all duration-300 overflow-hidden h-full shadow-md z-40`

  const menuItems = [
    { href: '/dashboard', icon: Layout, label: 'Dashboard' },
    { href: '/todo', icon: ListTodo, label: 'Todo' },
    { href: '/inventory', icon: Archive, label: 'Inventory' },
    { href: '/products', icon: Clipboard, label: 'Products' },
    { href: '/users', icon: Users, label: 'Users' },
    { href: '/settings', icon: Settings2, label: 'Settings' },
    { href: '/expenses', icon: CircleDollarSign, label: 'Expenses' }
  ];
  return (
    <section id="sidebar" className={sidebarClass}>

      {/* Top Logo */}
      <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isCollapsed ? "px-5" : "px-8   "}`}>
        {/* <img src="" alt="logo" className="" /> */}
        <div className="">logo</div>
        <h1 className={` ${isCollapsed ? "hidden" : "block"}  font-extrabold text-2xl`}>Tech Nest</h1>

        <button className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100" onClick={() => { }}>
          <Menu className='w-4 h-4' />
        </button>
      </div>


      {/* Links */}
      <div className="flex-grow mt-8">
        {menuItems.map((item) => (
          <SidebarLink
            key={item.href}
            href={item.href}
            icon={item.icon}
            isCollapsed={isCollapsed}
            label={item.label}
            isActive={currentPath === item.href || (currentPath === '/' && item.href === '/dashboard')}
            onClick={onNavigate}
          />
        ))}
      </div>


      {/* Footer */}
      <footer className={`${isCollapsed ? "hidden" : "block"}`}>
        <p className="text-center text-xs text-gray-500">&copy; 2025 Tech Nest</p>

      </footer>
    </section>
  )
}

export default SideBar