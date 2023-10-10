import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { Providers } from "@/providers/Providers";

const lato = Lato({ subsets: ['latin'], weight: ['400', '700', '900'] })

export const metadata: Metadata = {
  title: "It's a match! - rekrutacja SSPWr",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={lato.className}>
    <Providers>
      {children}
    </Providers>
    </body>
    </html>
  )
}
