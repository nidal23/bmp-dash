'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Item {
    title: string;
    path: string;
}

const NavLinkPage = ({ title, path }: Item) => {
    const pathName = usePathname();

    return (
        <div>
            <Link className={`${pathName === path && ' font-bold text-customYellow'}`} href={path} key={title}>
                {title}
            </Link>
        </div>
    );
};

export default NavLinkPage;
