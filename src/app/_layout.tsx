import React, { ReactElement, ReactNode } from "react";
import { Inter } from 'next/font/google'
import Header from "./components/Header";
import "@/app/styles/globals.scss";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lucas | Software Engineer',
  description: 'Website for Billy Joe Santos'
}
export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}){
  return(
      <div className={cn("relative h-full font-sans antialiased", inter.className)}>
          <Header/>
          <main className='relative flex flex-col min-h-screen'>
            <div className='flex-grow flex-1'>
              {children}
            </div>
          </main>
      </div>
  )
};


