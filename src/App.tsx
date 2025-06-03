import Navbar from "./layout/navbar/Navbar"
import SideBar from "./layout/sidebar/page/SideBar"





function App() {


  return (
    <>
      <main className="flex bg-gray-200 text-gray-900 w-full min-h-screen">
       
        <SideBar isCollapsed={false} currentPath={""} onNavigate={function (href: string): void {
          throw new Error("Function not implemented.")
        } }/>
      </main>
        <nav className="flex flex-col w-full h-full py-7 px-9 bg-gray-200">
          <Navbar />
        </nav>
    </>
  )
}

export default App
