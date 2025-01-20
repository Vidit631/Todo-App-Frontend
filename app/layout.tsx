import AppLogo from "@/components/AppLogo";
import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo App Task",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="text-gray-900 min-h-[100vh] w-full m-0 p-0 flex flex-col" style={{
        background: `
          linear-gradient(
            to bottom, 
            #0D0D0D 30vh, 
            #292929 30vh 100%
          )
        `
      }}>
        <div className="w-full md:w-[60%] mx-auto px-4 md:px-0 py-6 min-h-screen">
          <div className="flex items-center justify-center mb-8">
            <AppLogo />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}