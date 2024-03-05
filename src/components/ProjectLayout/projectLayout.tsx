'use client'

import React from 'react';
import { Project } from '../helper/projectList';
import { Icon } from '@iconify/react';
import Link from 'next/link';

interface ProjectProps {
  project: Project;
}

const ProjectLayout = ({ project: { name, description, githubLink, url, techStack, summary, slug } }: ProjectProps) => {


  const renderTechStack = () => {
    return techStack.map((tech, index) => (
      <div key={index} className='border rounded-lg bg-white text-black m-1 p-2 font-semibold'>
        {tech}
      </div>
    ));
  };

  return (
    <Link href={`/projects/${slug}`} className='p-3 mx-2 flex flex-col gap-2 justify-center items-center hover:cursor-pointer'>
      <h2 className='text-xl font-semibold leading-tight border border-white p-2 rounded-lg bg-white text-black my-2'>{name}</h2>
      <p>{summary}</p>

    <div>
    <div className='flex flex-wrap'>
        {renderTechStack()}
        </div>
    </div>

      <div className='flex mt-2'>
        <a href={githubLink} target='_blank' rel='noopener noreferrer'>
        <Icon icon='mdi:github' className=' text-3xl mr-2' />
        </a>
        <a href={url} target='_blank' rel='noopener noreferrer'>
        <Icon icon='mdi:gmail' className='text-3xl mr-2' />
        </a>
      </div>
    </Link>
  );
}

export default ProjectLayout;
