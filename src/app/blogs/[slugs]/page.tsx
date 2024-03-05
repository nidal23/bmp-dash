'use client'

import React from 'react';
import { notFound, useParams } from 'next/navigation';
import { blogs } from '@/helpers/BlogStorage/blogStorage';

const SingleBlogPage = () => {
  const router = useParams();

  console.log("router", router)
  const { slugs } = router;


  // Find the blog based on the slug
  const blog = blogs.find((blog) => blog.index === Number(slugs));

  if (!blog) notFound();

  return (
    <div className='px-2 flex flex-col justify-center gap-8 items-center'>
      <div className='font-bold text-3xl'>{blog.title}</div>
      <div className='border p-4 rounded-md w-6/12'>{blog.content}</div>
    </div>
  );
};

export default SingleBlogPage;
