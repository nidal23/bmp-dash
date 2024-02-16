'use client'

import React from 'react';
import { Icon } from '@iconify/react';

const mediums = [
  {
    name: 'Gmail',
    icon: 'mdi:gmail',
    link: ""
  },
  {
    name: 'Twitter',
    icon: 'pajamas:twitter',
    link: ""
  },
  {
    name: 'LinkedIn',
    icon: 'mdi:linkedin',
    link: ""
  },
  {
    name: 'Medium',
    icon: 'mingcute:medium-fill',
    link: ""
  },
  {
    name: 'Github',
    icon: 'mdi:github',
    link: ""
  },
];

const ContactPage = () => {
  return (
    <div className='flex flex-col justify-center gap-8 items-center p-4'>
      <div>Reach me</div>
      <div className='flex flex-col gap-2'>
        {mediums.map((app) => (
          <div key={app.name} className='flex items-center border border-slate-200 rounded-md p-2 px-4 cursor-pointer transition-all duration-300 hover:bg-slate-200 hover:text-black'>
            <Icon icon={app.icon} className='text-xl mr-2' />
            <div>{app.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
