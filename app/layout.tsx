import './globals.css'

import { Inter } from '@next/font/google'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="mx-auto max-w-5xl p-6">{children}</main>
      </body>
    </html>
  )
}
