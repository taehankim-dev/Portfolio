import Link from 'next/link';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full" style={{ backgroundColor: '#ebebea' }}>
            <div className="max-w-4xl mx-auto px-4 md:px-6 py-4">
                <nav className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-sm font-semibold text-gray-900 hover:text-gray-500 transition-colors tracking-tight"
                    >
                        {SITE_CONFIG.name}
                    </Link>

                    <ul className="flex items-center gap-1">
                        {NAV_LINKS.map(link => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="px-4 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-white rounded-full transition-all font-medium"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
