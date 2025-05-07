import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { Button } from "../ui/button";

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface Props {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NavSideBar = ({ items, open, onOpenChange } : Props) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center">
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {items.map((item) => (
            <Link key={item.href} href={item.href}
              className="flex p-4 w-full text-left hover:bg-main font-semibold text-xl"
              onClick={() => onOpenChange(false)}
            >
              {item.children}
            </Link>
          ))}
          <Button asChild 
            className="flex w-2xs m-auto mt-4 font-bold text-2xl p-6"
            onClick={() => onOpenChange(false)}
          >
            <Link href={"/sign-in"}>Login</Link>
          </Button>
          <Button asChild 
            className="flex w-2xs m-auto mt-4 font-bold text-2xl p-6"
            onClick={() => onOpenChange(false)}
          >
            <Link href={"/sign-up"}>Start Selling</Link>
          </Button>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

export {NavSideBar}