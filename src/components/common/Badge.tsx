import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
    return (
        <span className="inline-block px-2.5 py-0.5 bg-gray-100 text-gray-700 rounded text-sm">
            {children}
        </span>
    );
}
