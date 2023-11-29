import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '김태한의 포트폴리오 사이트',
  description: '김태한의 포트폴리오 사이트입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
