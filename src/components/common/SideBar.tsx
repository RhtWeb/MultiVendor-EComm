"use client"
import Link from "next/link"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"
import { navbarItemList, NavbarItemProps } from "./Navbar"
import { Button } from "../ui/button"


const SideBar = () => {
  return (
    <Sidebar variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarHeader>MENU</SidebarHeader>
          <SidebarGroupContent>
            <SidebarMenu>
              {navbarItemList.map((navItem: NavbarItemProps) => (
                <SidebarMenuItem key={navItem.href}>
                  <SidebarMenuButton asChild>
                    <Link href={navItem.href}>
                      
                      <span>{navItem.children}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button>
          <Link href={"/sign-in"}>Login</Link>
        </Button>
        <Button>
          <Link href={"/sign-up"}>Start Selling</Link>
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}

export {SideBar}