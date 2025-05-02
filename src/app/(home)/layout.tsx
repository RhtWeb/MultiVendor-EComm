import { Metadata } from "next";

import { Navbar } from "@/components/common/Navbar";

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
      <Navbar />
      {children}
    </div>
  )
}