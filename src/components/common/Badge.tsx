import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
    return (
        <span
            className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium"
            style={{ borderRadius: '999px' }}
        >
            {children}
        </span>
    );
}
