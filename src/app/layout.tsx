import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from "@/app/nav";
import Ecommerce from "@/api/Ecommerce";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ECOMMERCE',
  description: 'Ecommerce APP test',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Nav />
        <main className="flex min-h-screen flex-col items-center justify-between p-12">
            {children}
        </main>
        </body>
        </html>
    )
}
