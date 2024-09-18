"use client";

import React from "react";
import { projectList } from "@/components/helper/projectList";
import { notFound, useParams } from "next/navigation";
import { Icon } from "@iconify/react";
import ReactMarkdown from 'react-markdown';

const Page = () => {
  const router = useParams();

  const { slug } = router;

  const porject = projectList.find((project) => project.id === Number(slug));

  if (!porject) notFound();

  const renderTechStack = () => {
    return porject.techStack.map((tech, index) => (
      <div
        key={index}
        className="rounded-lg bg-customYellow text-customBlue m-1 p-2 font-semibold text-center"
      >
        {tech}
      </div>
    ));
  };

  return (
    <div className="px-2 flex flex-col gap-8 items-center justify-center border-customYellow border border-l-4 border-b-4 rounded-lg mx-auto w-1/2 p-12">
      <div className=" flex gap-8 justify-center items-center">
        <div className="text-customYellow font-bold text-3xl">{porject.name}</div>
        <span className="font-thin text-slate-200 text-sm">built with</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {renderTechStack()}
        </div>
      </div>
      <div>
        <ReactMarkdown className='p-4 rounded-md text-left text-lg'>
            {porject.description}
        </ReactMarkdown>
      </div>
      <div className="flex gap-4 mt-2">
        <a href={porject.githubLink} target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:github" className=" text-4xl mr-2" />
        </a>
        <a href={porject.url} target="_blank" rel="noopener noreferrer" >
          <Icon icon="ion:open-outline" className="text-4xl mr-2" />
        </a>
      </div>
    </div>
  );
};

export default Page;
