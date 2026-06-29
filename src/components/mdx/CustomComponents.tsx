function makeId(children: React.ReactNode): string {
    const text = typeof children === 'string' ? children : String(children ?? '');
    return text
        .toLowerCase()
        .replace(/[^a-z0-9가-힣\s]/g, '')
        .trim()
        .replace(/\s+/g, '-');
}

export const mdxComponents = {
    // ─── H1: 페이지 최상단 메인 타이틀 ────────────────────────────────
    h1: ({ children, ...props }: any) => (
        <h1
            className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug mb-6 break-keep scroll-mt-24"
            {...props}
        >
            {children}
        </h1>
    ),

    // ─── H2: 대단원 분류 헤더 (id 자동 생성 → TOC anchor) ──────────────
    h2: ({ children, ...props }: any) => (
        <h2
            id={makeId(children)}
            className="text-xl font-bold text-slate-900 mt-16 mb-6 pb-2.5 border-b-2 border-slate-200/80 block break-keep tracking-tight scroll-mt-24"
            {...props}
        >
            {children}
        </h2>
    ),

    // ─── H3: 소단원 케이스 스터디 헤더 ──────────────────────────────────
    h3: ({ children, ...props }: any) => (
        <h3
            id={makeId(children)}
            className="text-base sm:text-lg font-bold text-slate-800 mt-10 mb-4 pb-2 border-b border-slate-100 block break-keep tracking-tight scroll-mt-24"
            {...props}
        >
            {children}
        </h3>
    ),

    // ─── Blockquote: Overview Callout ────────────────────────────────────
    blockquote: ({ children }: any) => (
        <div className="relative bg-gray-50 border border-gray-200 rounded-2xl px-6 py-5 my-6 not-prose">
            <div className="flex gap-3">
                <span className="text-gray-400 text-base mt-0.5 shrink-0">📋</span>
                <div className="text-sm text-gray-700 leading-relaxed space-y-2 break-keep">
                    {children}
                </div>
            </div>
        </div>
    ),

    // ─── HR: 섹션 구분선 ─────────────────────────────────────────────────
    hr: () => (
        <hr className="my-6 border-gray-100" />
    ),

    // ─── Paragraph ───────────────────────────────────────────────────────
    p: ({ children }: any) => (
        <p className="text-sm text-gray-700 leading-[1.9] mb-5 break-keep">
            {children}
        </p>
    ),

    // ─── Lists ───────────────────────────────────────────────────────────
    ul: ({ children }: any) => (
        <ul className="mb-5 space-y-2 pl-1">
            {children}
        </ul>
    ),
    ol: ({ children }: any) => (
        <ol className="mb-5 space-y-2 pl-1 list-decimal list-inside">
            {children}
        </ol>
    ),
    li: ({ children }: any) => (
        <li className="text-sm text-gray-700 leading-relaxed flex gap-2 break-keep">
            <span className="text-gray-300 mt-1 shrink-0">•</span>
            <span>{children}</span>
        </li>
    ),

    // ─── Strong ──────────────────────────────────────────────────────────
    strong: ({ children }: any) => (
        <strong className="font-semibold text-gray-900">{children}</strong>
    ),

    // ─── Table: 트레이드오프 비교표 스타일 ──────────────────────────────
    table: ({ children }: any) => (
        <div className="w-full overflow-x-auto my-6 border border-slate-100 rounded-xl block break-keep not-prose">
            <table className="w-full text-sm text-left text-slate-600 border-collapse">
                {children}
            </table>
        </div>
    ),
    thead: (props: any) => <thead className="bg-slate-50" {...props} />,
    tbody: (props: any) => <tbody {...props} />,
    tr: (props: any) => (
        <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors" {...props} />
    ),
    th: (props: any) => (
        <th
            className="px-4 py-2.5 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-100"
            {...props}
        />
    ),
    td: (props: any) => (
        <td className="px-4 py-3 text-xs text-slate-600 align-top break-keep" {...props} />
    ),

    // ─── Code blocks (pre + code) ────────────────────────────────────────
    pre: ({ children, ...props }: any) => {
        const language = children?.props?.className?.replace('language-', '') ?? null;

        return (
            <div className="relative my-5">
                {language && (
                    <span className="absolute top-3 right-3 text-[10px] font-mono text-gray-400 bg-slate-800 px-2 py-0.5 rounded select-none z-10 pointer-events-none">
                        {language}
                    </span>
                )}
                <pre
                    className="bg-slate-900 text-slate-200 p-5 rounded-xl overflow-x-auto text-[13px] leading-relaxed [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-inherit shadow-sm"
                    {...props}
                >
                    {children}
                </pre>
            </div>
        );
    },
    code: (props: any) => (
        <code
            className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded-md text-xs font-mono not-prose"
            {...props}
        />
    ),
};
