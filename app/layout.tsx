import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const mediaSans = localFont({ src: '../public/fonts/mediasanssemicondensed.otf' })

export const metadata: Metadata = {
  title: 'Mohamed Imran - Freelance Developer & Designer',
  description: 'Freelance Developer & Designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mediaSans.className}>{children}</body>
    </html>
  )
}
