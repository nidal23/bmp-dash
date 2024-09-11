"use client";

import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const mediums = [
  {
    name: 'Gmail',
    icon: 'mdi:gmail',
    link: "mailto:nidalmwork@gmail.com"
  },
  // {
  //   name: 'Twitter',
  //   icon: 'pajamas:twitter',
  //   link: ""
  // },
  {
    name: 'LinkedIn',
    icon: 'mdi:linkedin',
    link: "https://www.linkedin.com/in/nidal-mohammed-959829193/"
  },
  {
    name: 'Medium',
    icon: 'mingcute:medium-fill',
    link: "https://medium.com/@nidalm"
  },
  {
    name: 'Github',
    icon: 'mdi:github',
    link: "https://github.com/nidal23"
  },
];

const ContactPage = () => {
  return (
    <div className='flex flex-col justify-center gap-8 items-center p-4'>
      <div className='font-semibold'>Reach me</div>
      <div className='flex flex-col gap-2'>
        {mediums.map((app) => (
          <Link href={`${app.link}`} key={app.name} className='flex items-center border border-customYellow border-b-4 border-l-4 rounded-md p-2 px-4 cursor-pointer transition-all duration-300 hover:bg-customYellow hover:text-black' target='_blank'>
            <Icon icon={app.icon} className='text-xl mr-2' />
            <div>{app.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
