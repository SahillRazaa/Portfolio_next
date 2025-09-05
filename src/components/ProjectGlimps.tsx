'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projectDisplay, ProjectDisplay } from '@/utils/data'; 

const ProjectGlimps = () => {
  const recentProjects = useMemo(() => {
    if (!projectDisplay || projectDisplay.length === 0) return [];
    const startIndex = Math.max(0, projectDisplay.length - 3);
    const endIndex = projectDisplay.length - 1;
    return projectDisplay.slice(startIndex, endIndex).reverse();
  }, []);

  const ArrowIcon = () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="transition-transform duration-200 ease-in-out group-hover:translate-x-1"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );

  return (
    <div id="projects" className="px-4 sm:px-8 md:px-30 py-8 pb-8 relative mt-5 pt-5">
      <div className="flex justify-between items-center mb-16 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl text-gray-800 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-blue-600 after:rounded-full font-bold font-heading">
          Recent Work
        </h2>
        <Link href="/projects" passHref>
          <button className="group bg-blue-600 text-white border-none py-2 px-6 sm:py-3 sm:px-8 lg:py-4 lg:px-12 rounded-lg cursor-pointer font-semibold text-sm sm:text-base lg:text-lg flex items-center gap-2 transition-all duration-200 ease-in-out hover:bg-gray-800 hover:-translate-y-0.5 active:translate-y-0">
            See More
            <ArrowIcon />
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 font-body font-medium">
        {recentProjects.map((project: ProjectDisplay) => (
          <div
            key={project.id}
            className="bg-white rounded-3xl p-8 transition-all duration-300 ease-in-out shadow-lg hover:-translate-y-2.5 hover:shadow-2xl"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex flex-col">
                <h3 className="text-xl sm:text-2xl lg:text-3xl text-gray-800 m-0 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-500 m-0 font-medium">
                  {project.duration}
                </p>
              </div>
              <Link href={`/projects/${project.id}`} passHref>
                <button className="py-2 px-6 sm:py-3 sm:px-6 text-sm sm:text-base bg-blue-600 text-white border-none rounded-lg cursor-pointer font-semibold transition-all duration-200 ease-in-out hover:bg-gray-800 hover:-translate-y-0.5 active:translate-y-0">
                  View
                </button>
              </Link>
            </div>
            <div className="w-full h-[50vh] rounded-2xl overflow-hidden mt-6">
                <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    placeholder="blur"
                    loading="lazy"
                />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGlimps;