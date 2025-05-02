"use client"
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavbarItemProps {
  href: string,
  children : React.ReactNode,
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

const navbarItemList = [
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

  const pathname = usePathname()

  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href="/" className="pl-6 flex items-center">
        <span className="text-3xl font-semibold">RHT ECom</span>
      </Link>
      <div className="items-center gap-4 hidden lg:flex">
        { navbarItemList.map((navItem) => (
            <NavbarItem {...navItem} key={navItem.href} isActive={pathname === navItem.href}>
              {navItem.children}
            </NavbarItem>
          ))
        }
      </div>
      <div className="flex items-center border-l-2 min-w-2xs text-lg font-semibold">
        <Link href={"/sign-in"} className="flex-1/2 text-center h-full content-center hover:bg-main hover:text-black">Login</Link>
        <Link href={"/sign-up"} className="bg-black text-white h-full content-center flex-1/2 text-center hover:bg-main hover:text-black">Start Selling</Link>
      </div>
    </nav>
  )
}

export {Navbar}