import { Metadata } from "next";

import { Navbar } from "@/components/common/Navbar";
// import { SidebarProvider } from "@/components/ui/sidebar";
// import { SideBar } from "@/components/common/SideBar";
import { Footer } from "@/components/common/Footer";

type rootPropsType = Readonly<{
  children : React.ReactNode;
}>

export const metadata: Metadata = {
  title: "Home | RHT ECommerce",
  description: "Multi Vendor ECommerce",
};

export default function RootLayout({ children } : rootPropsType){

  return (
    <div className="flex flex-col min-h-screen">
      {/* <SidebarProvider defaultOpen={false}>
        <div className="lg:hidden">
          <SideBar />
        </div>
        <main className="flex flex-col w-full">
          
          <Navbar /> 
            {children}
          <Footer />
        </main>
      </SidebarProvider> */}
      <Navbar />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  )
}