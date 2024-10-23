'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ title, path }) => {
    const pathname = decodeURIComponent(usePathname());

    return (
        <Link
            href={path}
            className={`hover:text-red-600 ${pathname === path ? "text-red-500" : ""}`}
        >
            {title}
        </Link>
    );
};

export default NavLink;