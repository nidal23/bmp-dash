"use client";

import React from 'react';
import Link from "next/link";
import { notFound, useParams } from 'next/navigation';
import { experienceList } from '@/components/helper/experienceList';
import { SquareArrowOutUpRight } from 'lucide-react';

const SingleCareerPage = () => {
    const router = useParams();

    const { slugs } = router;
    const experience = experienceList.find((experience) => experience.id === Number(slugs));

    if(!experience) notFound();

    return (
        <div className='px-2 flex flex-col justify-center gap-8 items-center'>
            <div className='flex flex-col items-center gap-2'>
                <Link href={experience.companyUrl} className='flex items-center justify-center gap-2'>
                    <div className=' text-yellow-400 font-bold text-3xl'>{experience.companyName}</div>
                    <SquareArrowOutUpRight size={16} color='white'/>
                </Link>
                <div className='text-customYellow text-sm font-mono'>
                    <span className="font-bold">{experience.role}</span>
                </div>
                <div className='text-customYellow text-sm font-mono'>
                    {formatDate(experience.startDate)} - {formatEndDate(experience.endDate)}
                </div>
            </div>
            <div className='w-full max-w-3xl border border-customYellow border-b-4 border-l-4 p-4 rounded-lg'>
                {experience.contributions.map((contribution, index) => (
                    <div key={index} className='mb-4'>
                        <span className='font-medium'>•</span> {contribution}
                    </div>
                ))}
            </div>
        </div>
    );
};

// Utility functions to format date
const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString("en-US", options);
};

const formatEndDate = (endDate: Date | string) => {
    if (endDate === 'current') {
        return 'Present';
    } else {
        return formatDate(new Date(endDate));
    }
};

export default SingleCareerPage;
