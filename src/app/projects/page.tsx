import React from 'react';
import { Project, projectList } from '@/components/helper/projectList';
import ProjectLayout from '@/components/ProjectLayout/projectLayout';

const ProjectsPage = () => {

  return (
    <div className='flex justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 m-auto lg:max-w-screen-lg'>
        {projectList.length > 0 ? (
          projectList.map((project) => (
            <div key={project.id} className='border border-white rounded-lg hover:border-slate-500'>
              <ProjectLayout key={project.id} project={project}/>
            </div>
          ))
        ) : (
          <p>No Projects to display</p>
        )}
      </div>
    </div>
  );
}

export default ProjectsPage;
