"use client"
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavSideBar } from "./NavSideBar";

import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
// import { SidebarTrigger } from "../ui/sidebar";

export interface NavbarItemProps {
  href: string,
  children : string,
  isActive?: boolean
}

const NavbarItem = ({
  href,
  children,
  isActive,
}: NavbarItemProps) => {
  return(
    <Button 
      asChild
      variant="reverse"
      className={cn("px-3.5 text-lg", isActive && "bg-black text-white hover:bg-main hover:text-black")}
    >
      <Link href={href}>
        {children}
      </Link>
    </Button>
  )
};

export const navbarItemList = [
  {
    href: "/",
    children: "Home"
  },
  {
    href: "/about",
    children: "About"
  },
  {
    href: "/features",
    children: "Features"
  },
  {
    href: "/pricing",
    children: "Pricing"
  },
  {
    href: "/contact",
    children: "Contact"
  },
];

const Navbar = () => {

  const pathname = usePathname();
  const [ isSidebarOpen, setIsSidebarOpen ] = useState(false)

  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white w-full">
      <Link href="/" className="pl-6 flex items-center">
        <span className="text-3xl font-semibold">RHT ECom</span>
      </Link>

      <NavSideBar 
        items={navbarItemList}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />
      
      <div className="items-center gap-4 hidden lg:flex">
        { navbarItemList.map((navItem) => (
            <NavbarItem {...navItem} key={navItem.href} isActive={pathname === navItem.href}>
              {navItem.children}
            </NavbarItem>
          ))
        }
      </div>
      <div className="items-center border-l-2 min-w-2xs text-lg font-semibold hidden lg:flex">
        <Link href={"/sign-in"} className="flex-1/2 text-center h-full content-center hover:bg-main hover:text-black">Login</Link>
        <Link href={"/sign-up"} className="bg-black text-white h-full content-center flex-1/2 text-center hover:bg-main hover:text-black">Start Selling</Link>
      </div>

      <div className="flex lg:hidden items-center justify-center">
        <Button 
          variant="noShadow"
          onClick={() => setIsSidebarOpen(true)}
          className="m-4"
        >
          <MenuIcon />
        </Button>
      </div>


      {/* <div className="lg:hidden flex items-center">
        <SidebarTrigger />
      </div> */}
        
    </nav>
  )
}

export {Navbar}