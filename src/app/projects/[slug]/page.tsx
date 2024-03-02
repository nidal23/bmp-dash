'use client'

import React from 'react'
import { projectList } from '@/components/helper/projectList';
import { useParams } from 'next/navigation';


const Page = () => {
    const router = useParams()
  return (
    <div>Page</div>
  )
}

export default Page