import React from 'react'
import { experienceList } from '@/components/helper/experienceList'
import Link from 'next/link';
import { SquareArrowOutUpRight } from 'lucide-react';

const CareerPage = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  const yoe = (currentYear - 2022) + 1;


  return (
    <div className='flex gap-8 justify-center items-center'>
      <div className='w-72'>
      Hey there! 👋 I am currently in my <span className='text-xl font-bold'>{yoe}rd</span> year of crafting awesome software and continuously learning along the way. Let me take you through my journey so far! 🚀

      </div>
      <div className="w-96 flex flex-col gap-4 h-full rounded-lg p-4 ">
          {experienceList.map((item) => (
            <Link
              href={`/career/${item.id}`}
              className=" border flex text-white border-white p-2 justify-around items-center text-center rounded-lg hover:cursor-pointer hover:bg-white hover:text-black"
              key={item.id}
            >
              <div>
                <span>{item.companyName}</span>
                <span className="text-xs underline font-mono text-neutral-400 font-extralight">
                  ({formatDate(item.startDate)} - {formatEndDate(item.endDate)})
                </span>
              </div>
              <SquareArrowOutUpRight size={16}/>
            </Link>
          ))}
        </div>

    </div>
  )
};

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

export default CareerPage