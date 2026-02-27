'use client';

import { useState, useEffect } from 'react';
import type { TocHeading } from './TableOfContents';

interface MobileToCProps {
    headings: TocHeading[];
}

export function MobileToC({ headings }: MobileToCProps) {
    const [open, setOpen] = useState(false);

    // 드로어 열렸을 때 body 스크롤 방지
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    if (headings.length === 0) return null;

    return (
        <div className="lg:hidden">
            {/* 플로팅 버튼 */}
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-6 right-4 z-40 flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white text-xs font-semibold rounded-full shadow-lg hover:bg-gray-700 transition-colors"
                aria-label="목차 열기"
            >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="15" y2="12" />
                    <line x1="3" y1="18" x2="18" y2="18" />
                </svg>
                목차
            </button>

            {/* 딤 오버레이 */}
            {open && (
                <div
                    className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* 슬라이드업 드로어 */}
            <div
                className={`fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl transition-transform duration-300 ${open ? 'translate-y-0' : 'translate-y-full'
                    }`}
            >
                {/* 핸들 바 */}
                <div className="flex justify-center pt-3 pb-1">
                    <div className="w-10 h-1 bg-gray-200 rounded-full" />
                </div>

                <div className="px-6 pt-3 pb-2 flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-900">목차</p>
                    <button
                        onClick={() => setOpen(false)}
                        className="text-gray-400 hover:text-gray-700 transition-colors p-1"
                        aria-label="목차 닫기"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                <nav className="px-4 pb-10 max-h-72 overflow-y-auto">
                    <ul className="space-y-1">
                        {headings.map(({ id, text, level }) => (
                            <li key={id} style={{ paddingLeft: level === 3 ? '12px' : '0px' }}>
                                <a
                                    href={`#${id}`}
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpen(false);
                                        setTimeout(() => {
                                            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                                        }, 300);
                                    }}
                                    className="block py-2 px-3 text-sm text-gray-700 hover:bg-gray-50 rounded-xl transition-colors font-medium"
                                >
                                    {text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}
