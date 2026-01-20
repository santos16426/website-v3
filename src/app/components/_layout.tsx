import React, { ReactElement, ReactNode } from 'react'
import { Metadata } from 'next'
import { cn } from '@/app/lib/utils'

export const metadata: Metadata = {
  title: 'Lucas | Software Engineer',
  description: 'Website for Billy Joe Santos',
}
export default function RootLayout({
  children,
  isScrolledTop,
}: {
  children: React.ReactNode
  isScrolledTop?: boolean
}) {
  return (
    <div className={cn('relative h-full antialiased')}>
      <main className="relative flex flex-col min-h-screen">
        <div className="flex-grow flex-1">{children}</div>
      </main>
    </div>
  )
}
