import React from 'react';
import Link from 'next/link';
import Blog from '@/components/Blog/blog';
import { blogs } from '@/helpers/BlogStorage/blogStorage';
// import SingleBlogPage from './[slugs]/page';

const BlogPage = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-14'>
      <Blog />
      <div className='flex gap-3 flex-col mt-8'>
        {blogs.map((blog) => (
          <div key={blog.index} className='cursor-pointer border rounded-md border-slate-200 p-2 transition-all duration-300 hover:bg-slate-200 hover:text-black'>
            <Link href={`/blogs/${blog.index}`}>
                {blog.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
