import './globals.css'

import { Inter } from 'next/font/google'
import Link from 'next/link'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Language Transfer',
  description: "It's only as hard as starting...",
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/spanish', label: 'Spanish' },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <ul className="flex flex-row justify-center space-x-4">
              {links.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <div>{children}</div>
      </body>
    </html>
  )
}
