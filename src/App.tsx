import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from "./layout/navbar/Navbar"
import SideBar from "./layout/sidebar/page/SideBar"
import TodoPage from './features/todo/pages/TodoPage';






function App() {
  return (
    <>
      <main className="flex bg-gray-200 text-gray-900 w-full min-h-screen">
        <SideBar/>
        <section className="ml-60 flex flex-col w-full h-full py-7 px-9 bg-gray-200 ${isCollapsed ? 'ml-0 md:ml-16' : 'ml-72 md:ml-64' }">
          <Navbar />
        <BrowserRouter>
           <Routes>
            <Route path={'/todo'} element={<TodoPage/>}  />
          </Routes>
        </BrowserRouter>
        </section>
       
      </main>
    </>
  )
}

export default App
