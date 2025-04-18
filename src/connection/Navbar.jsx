import React from 'react'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
  } from "@/components/ui/dropdown-menu";
  import { ChevronDown, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from '@/components/ui/sidebar';

const Navbar = ({handleSidebar}) => {
  return (
    <nav
    className={`flex items-center justify-between p-2 shadow-md radius-2xl`}
  >
     <SidebarTrigger handleSidebar={handleSidebar} />
    {/* Logo  */}
    <div className=" text-xl  font-semibold">Meatzy</div>

    {/* Navigation Links */}
    <div className="hidden md:flex space-x-4 ">
      <Link to='/'><Button variant="ghost">Home</Button></Link>
      <Button variant="ghost">About</Button>
      <Button variant="ghost">Services</Button>
      <Button variant="ghost">Contact</Button>
    </div>

    {/* Search Input */}
    <div className="hidden md:block">
      <Input type="text" placeholder="Search..." className="w-48" />
    </div>

    {/* User Profile / Dropdown Menu */}
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center">
          Profile <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className={"bg-white"}>
        <DropdownMenuItem>My Account</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    {/* Mobile Menu Button */}
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="p-0">
            <Menu className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Home</DropdownMenuItem>
          <DropdownMenuItem>About</DropdownMenuItem>
          <DropdownMenuItem>Services</DropdownMenuItem>
          <DropdownMenuItem>Contact</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </nav>
  )
}

export default Navbar