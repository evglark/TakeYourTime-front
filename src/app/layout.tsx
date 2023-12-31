import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'

import './globals.css'

const inter = Rubik({
  subsets: ['latin', 'cyrillic', 'latin-ext'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
