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
            <Link className={`${pathName === path && ' bg-customYellow font-bold rounded-lg px-4 p-2 text-black border-none'}`} href={path} key={title}>
                {title}
            </Link>
        </div>
    );
};

export default NavLinkPage;
