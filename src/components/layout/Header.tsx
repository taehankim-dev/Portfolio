import Link from 'next/link';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';

export function Header() {
    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="max-w-5xl mx-auto px-6 py-4">
                <nav className="flex items-center justify-between">
                    <Link href="/" className="text-lg font-semibold text-gray-900 hover:text-gray-600 transition-colors">
                        {SITE_CONFIG.name}
                    </Link>

                    <ul className="flex gap-8">
                        {NAV_LINKS.map(link => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
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
