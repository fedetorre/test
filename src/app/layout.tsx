import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from "@/app/nav";
import Ecommerce from '@/context/ecommerce';
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: {
        template: '%s | ECOMMERCE',
        default: 'ECOMMERCE'
    },
    description: 'Ecommerce APP test',
    metadataBase: new URL('https://ecommerce-umber-delta.vercel.app'),
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
        <body className={inter.className}>
            <NextTopLoader />
            <Ecommerce>
                <Nav />
                <main className="flex min-h-screen flex-col items-center justify-between p-12">
                    {children}
                </main>
            </Ecommerce>
        </body>
        </html>
    )
}
