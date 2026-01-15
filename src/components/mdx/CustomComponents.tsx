export const mdxComponents = {
    // Tables need special wrapper handling
    table: (props: any) => (
        <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300" {...props} />
        </div>
    ),
    thead: (props: any) => <thead {...props} />,
    tbody: (props: any) => <tbody {...props} />,
    tr: (props: any) => <tr className="border-b border-gray-200" {...props} />,
    th: (props: any) => (
        <th className="px-4 py-3 bg-gray-50 text-left text-sm font-semibold text-gray-900 border border-gray-300" {...props} />
    ),
    td: (props: any) => (
        <td className="px-4 py-3 text-sm text-gray-700 border border-gray-300" {...props} />
    ),

    // Code blocks - pre handles the dark background
    pre: (props: any) => (
        <pre className="bg-gray-900 text-gray-100 p-5 rounded-lg overflow-x-auto my-6 text-sm [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-inherit" {...props} />
    ),

    // Inline code only - code blocks are handled by pre
    code: (props: any) => (
        <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono not-prose" {...props} />
    ),

    // Other elements handled by prose classes
};
