export const mdxComponents = {
    // ─── H2: 카드 섹션 헤더 (id 자동 생성 → TOC anchor) ───────────────────
    h2: ({ children, ...props }: any) => {
        const text = typeof children === 'string' ? children : String(children ?? '');
        const id = text
            .toLowerCase()
            .replace(/[^a-z0-9가-힣\s]/g, '')
            .trim()
            .replace(/\s+/g, '-');

        return (
            <h2
                id={id}
                className="text-lg font-semibold text-gray-800 pt-10 pb-2 border-b border-gray-100 mb-6 scroll-mt-24 tracking-tight"
                {...props}
            >
                {children}
            </h2>
        );
    },

    // ─── H3: 서브섹션 ────────────────────────────────────────────────────
    h3: ({ children, ...props }: any) => {
        const text = typeof children === 'string' ? children : String(children ?? '');
        const id = text
            .toLowerCase()
            .replace(/[^a-z0-9가-힣\s]/g, '')
            .trim()
            .replace(/\s+/g, '-');

        return (
            <h3
                id={id}
                className="text-sm font-semibold text-gray-700 mt-8 mb-3 scroll-mt-24 tracking-tight"
                {...props}
            >
                {children}
            </h3>
        );
    },

    // ─── Blockquote: Overview Callout ────────────────────────────────────
    blockquote: ({ children }: any) => (
        <div className="relative bg-gray-50 border border-gray-200 rounded-2xl px-6 py-5 my-6 not-prose">
            <div className="flex gap-3">
                <span className="text-gray-400 text-base mt-0.5 shrink-0">📋</span>
                <div className="text-sm text-gray-700 leading-relaxed space-y-2">
                    {children}
                </div>
            </div>
        </div>
    ),

    // ─── HR: 섹션 구분선 (카드 내에서 얇게) ─────────────────────────────
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
        <li className="text-sm text-gray-700 leading-relaxed flex gap-2">
            <span className="text-gray-300 mt-1 shrink-0">•</span>
            <span>{children}</span>
        </li>
    ),

    // ─── Strong ──────────────────────────────────────────────────────────
    strong: ({ children }: any) => (
        <strong className="font-semibold text-gray-900">{children}</strong>
    ),

    // ─── Table: 트레이드오프 비교표 스타일 ──────────────────────────────
    table: (props: any) => (
        <div className="overflow-x-auto my-6 rounded-xl border border-gray-200 shadow-sm not-prose">
            <table className="min-w-full border-collapse text-sm" {...props} />
        </div>
    ),
    thead: (props: any) => <thead className="bg-gray-50" {...props} />,
    tbody: (props: any) => <tbody {...props} />,
    tr: (props: any) => (
        <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors" {...props} />
    ),
    th: (props: any) => (
        <th
            className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
            {...props}
        />
    ),
    td: (props: any) => (
        <td className="px-4 py-3 text-sm text-gray-700 align-top break-keep" {...props} />
    ),

    // ─── Code blocks (pre + code) ────────────────────────────────────────
    pre: ({ children, ...props }: any) => {
        const language = children?.props?.className?.replace('language-', '') ?? null;

        return (
            <div className="relative my-5">
                {language && (
                    <span className="absolute top-3 right-3 text-[10px] font-mono text-gray-500 bg-gray-800 px-2 py-0.5 rounded select-none z-10 pointer-events-none">
                        {language}
                    </span>
                )}
                <pre
                    className="bg-gray-950 text-gray-100 p-5 rounded-xl overflow-x-auto text-xs leading-relaxed [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-inherit shadow-sm"
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
