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

    // Lazy sticky 관련
    const containerRef = useRef<HTMLDivElement>(null);
    const frameRef = useRef<number>(0);
    const currentOffsetRef = useRef(0);
    const [offsetY, setOffsetY] = useState(0);

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

    // Lazy Sticky: Lerp 기반 지연 추적
    useEffect(() => {
        // TOC가 페이지에서 처음 위치한 절대 Y좌표
        let initialTopInPage: number | null = null;
        const STICKY_OFFSET = 96;  // 뷰포트 상단으로부터 유지할 거리 (px)
        const LERP = 0.05;          // 값이 낮을수록 지연이 늘어남 (0.05 ≈ 1.5초)

        const animate = () => {
            if (containerRef.current && initialTopInPage === null) {
                // 최초 1회만 TOC의 페이지 내 절대 위치를 기록
                initialTopInPage =
                    containerRef.current.getBoundingClientRect().top + window.scrollY;
            }

            if (initialTopInPage !== null) {
                const scrollY = window.scrollY;
                // 사용자가 스크롤한 만큼, TOC도 아래로 이동해야 뷰포트 안에 머뭄
                const target = Math.max(0, scrollY - initialTopInPage + STICKY_OFFSET);

                // 현재 위치 → 목표 위치로 매 프레임 5%씩 이동 (Lerp)
                currentOffsetRef.current += (target - currentOffsetRef.current) * LERP;

                setOffsetY(Math.round(currentOffsetRef.current * 100) / 100);
            }

            frameRef.current = requestAnimationFrame(animate);
        };

        frameRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameRef.current);
    }, []);

    if (headings.length === 0) return null;

    return (
        <aside className="hidden lg:block w-48 shrink-0 self-start">
            <div
                ref={containerRef}
                style={{ transform: `translateY(${offsetY}px)` }}
                className="w-48"
            >
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-3 px-1">
                    목차
                </p>
                <ul className="space-y-0.5 break-keep">
                    {headings.map(({ id, text, level }) => {
                        const isActive = activeId === id;
                        return (
                            <li key={id} style={{ paddingLeft: level === 3 ? '10px' : '0px' }}>
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
