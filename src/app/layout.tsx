import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ko">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="flex flex-col min-h-screen" style={{ backgroundColor: '#ebebea' }}>
                <Header />
                <main className="flex-1 w-full max-w-4xl mx-auto px-4 md:px-6 pb-8">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
