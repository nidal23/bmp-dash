import React from 'react'
import Link from 'next/link'
import NavLinkPage from './NavLinkPage/navLinkPage'

const links = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Projects",
        path: "/projects"
    },
    {
        title: "Blogs",
        path: "/blogs"
    },
    {
        title: "Contact",
        path: "/contact"
    },
]

const Navbar = () => {
  return (
    <div className='flex justify-between mt-8'>
        <div className=' px-4 border rounded-md border-gray-100 p-2 w-fit ml-5 cursor-pointer mb-6 transition-all duration-300 hover:bg-slate-200 hover:text-black'>
            <Link href={'/'} className='cursor-pointer'>NM</Link>
        </div>
        <div className='flex flex-row space-x-4 justify-between mr-5'>
            {links.map((link) => (
                <NavLinkPage key={link.title} title={link.title} path={link.path} />
            ))}
        </div>
    </div>
  )
}

export default Navbar