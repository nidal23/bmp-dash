import Link from 'next/link'
import React from 'react'

const Blog = () => {
  
  return (
    <div className='px-2 flex flex-col justify-center gap-8 items-center w-1/4'>
    <div>
        Hey, I have not written any blogs recently, so when I find the time, this page will list out all the blogs.
        But you can check out some of the blogs I have written on Medium over the years <Link href="https://medium.com/@nidalm" className='text-pink-400' >here</Link>.
    </div>

    </div>  
  )
}

export default Blog
