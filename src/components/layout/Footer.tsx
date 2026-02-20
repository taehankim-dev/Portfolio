import { SITE_CONFIG, CONTACT } from '@/lib/constants';

export function Footer() {
    return (
        <footer className="w-full max-w-4xl mx-auto px-4 md:px-6 py-8 mt-4">
            <div className="flex items-center justify-between text-xs text-gray-400">
                <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>

                <a
                    href={CONTACT.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-700 transition-colors font-medium"
                >
                    GitHub
                </a>
            </div>
        </footer>
    );
}
