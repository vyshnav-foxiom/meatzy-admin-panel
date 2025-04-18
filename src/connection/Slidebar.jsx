import React from 'react'
import { Calendar, Home, Inbox,ShoppingCart, Search, Settings,HandCoins,Users } from "lucide-react"
import fishBg from "@/assets/images/fish2.png";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const Slidebar = () => {
    const items = [
        {
            title: "Home",
            url: "/",
            icon: Home,
        },
        {
            title: "Vendors",
            url: "/vendor",
            icon: HandCoins,
        },
        {
            title: "Users",
            url: "/user",
            icon: Users,
        },
        {
            title: "Products",
            url: "/product",
            icon: ShoppingCart,
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings,
        },
    ]
  return (
    <div >
    <Sidebar className={"shadow-md"}>
        <SidebarHeader />
        <SidebarContent >
            <SidebarGroup>
                <SidebarGroupLabel>
                    <div className="flex pb-2">
                        <img
                            src={fishBg}
                            alt="Logo"
                            style={{ width: "24px", height: "24px", marginRight: "8px" }}
                        /><span className="text-lg">Admin</span>
                    </div>
                </SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton variant="outline" size="lg" asChild>
                                    <a href={item.url}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
    </Sidebar></div>
  )
}

export default Slidebar