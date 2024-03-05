import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <Link href={'/contact'} className=' mt-4 px-4 border rounded-md border-gray-100 p-2 w-fit ml-5 cursor-pointer mb-6 transition-all duration-300 hover:bg-slate-200 hover:text-black'>Contact me ☎️</Link>
    </div>
  )
}

export default Footer