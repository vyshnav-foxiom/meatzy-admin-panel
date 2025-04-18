
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"
import Slidebar from "./Slidebar"
import { useState } from "react"
import Navbar from "./Navbar"

const Layout = () => {
  const [openSidebar, setOpenSidebar] = useState(true)
  const handleSidebar = () => {
    setOpenSidebar(!openSidebar)
  }
  return (
  
    <div className="flex h-screen">
      {/* Sidebar on the left */}
      <SidebarProvider>
        <Slidebar />   
        
      {/* Navbar on the right */}
      <div className="flex-1 flex flex-col ">
        <Navbar handleSidebar={handleSidebar} openSidebar={openSidebar} />
        <div className='m-2'>
          <Outlet />
        </div>
      </div> 
       </SidebarProvider>
    </div>
 
  )
}

export default Layout