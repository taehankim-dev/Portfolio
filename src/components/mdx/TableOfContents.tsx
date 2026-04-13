'use client';

import { useEffect, useRef, useState } from 'react';

export interface TocHeading {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    headings: TocHeading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>('');
    const observerRef = useRef<IntersectionObserver | null>(null);

    // 현재 읽는 섹션 감지
    useEffect(() => {
        const handleObserver = (entries: IntersectionObserverEntry[]) => {
            const visible = entries
                .filter(e => e.isIntersecting)
                .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
            if (visible.length > 0) setActiveId(visible[0].target.id);
        };

        observerRef.current = new IntersectionObserver(handleObserver, {
            rootMargin: '-80px 0px -60% 0px',
            threshold: 0,
        });

        headings.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observerRef.current?.observe(el);
        });

        return () => observerRef.current?.disconnect();
    }, [headings]);

    if (headings.length === 0) return null;

    return (
        // shrink-0: flex 컨테이너에서 너비 유지
        // self-start: 컬럼 상단 기준으로 sticky 작동
        <aside className="hidden lg:block w-44 shrink-0 self-start sticky top-6">
            <div className="max-h-[calc(100vh-4rem)] overflow-y-auto pb-4">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-3 px-1">
                    목차
                </p>
                <ul className="space-y-0.5 break-keep">
                    {headings.map(({ id, text, level }) => {
                        const isActive = activeId === id;
                        return (
                            <li key={id} style={{ paddingLeft: level === 3 ? '8px' : '0px' }}>
                                <a
                                    href={`#${id}`}
                                    onClick={e => {
                                        e.preventDefault();
                                        document.getElementById(id)?.scrollIntoView({
                                            behavior: 'smooth',
                                        });
                                        setActiveId(id);
                                    }}
                                    className={`block py-1.5 px-2 text-xs leading-snug rounded-lg transition-all duration-200 ${isActive
                                        ? 'text-gray-900 font-semibold bg-gray-100'
                                        : 'text-gray-400 hover:text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    {text}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
}
