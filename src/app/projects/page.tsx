import React from 'react';
import { Project } from '@/components/helper/projectList';

interface ProjectProps {
  projectList: Project[];
}

const ProjectsPage: React.FC<ProjectProps> = ({ projectList }: ProjectProps) => {
  return (
    <div>
      {projectList ? (projectList.map((project) => (
        <main key={project.id} className='max-w-5xl py-10 px3 flex flex-col'>
          <h2 className='font-bold text-lg tracking-tight'>
            {project.name}
          </h2>
        </main>
      ))):(<p>No Projects to display</p>)}
    </div>
  );
}

export default ProjectsPage;
