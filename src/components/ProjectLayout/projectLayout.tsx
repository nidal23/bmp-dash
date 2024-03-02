'use client'

import React from 'react';
import { Project } from '../helper/projectList';
import { Icon } from '@iconify/react';
import Link from 'next/link';

interface ProjectProps {
  project: Project;
}

const ProjectLayout = ({ project: { name, description, githubLink, url, techStack, summary, slug } }: ProjectProps) => {
  console.log("name", name);

  const renderTechStack = () => {
    return techStack.map((tech, index) => (
      <div key={index} className='border rounded-lg bg-white text-black m-1 p-2 font-semibold'>
        {tech}
      </div>
    ));
  };

  return (
    <div className='p-3 mx-2 flex flex-col gap-2 justify-center items-center'>
      <h2 className='text-xl font-semibold leading-tight border border-white p-2 rounded-lg bg-white text-black my-2'>{name}</h2>
      <p>{summary}</p>

    <div className=''>
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

      <p className='mt-2'>
        <Link href={`/projects/${slug}`}>Read More</Link>
      </p>
    </div>
  );
}

export default ProjectLayout;
