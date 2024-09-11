"use client";

import React from "react";
import { Project } from "../helper/projectList";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface ProjectProps {
  project: Project;
}

const ProjectLayout = ({
  project: { name, description, githubLink, url, techStack, summary, slug },
}: ProjectProps) => {
  const renderTechStack = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {techStack.slice(0, 4).map((tech, index) => (
        <div
          key={index}
          className="border border-customYellow rounded-lg bg-customYellow text-black m-1 p-2 font-semibold"
        >
          {tech}
        </div>
      ))}
    </div>
  );
};

  return (
    <Link
      href={`/projects/${slug}`}
      className="p-3 mx-2 flex flex-col gap-2 justify-center items-center hover:cursor-pointer"
    >
      <h2 className="text-xl font-semibold leading-tight border border-customYellow p-2 rounded-lg bg-customYellow text-black my-2">
        {name}
      </h2>
      <p>{summary}</p>

      <div>
        <div className="flex flex-wrap">{renderTechStack()}</div>
      </div>
    </Link>
  );
};

export default ProjectLayout;
