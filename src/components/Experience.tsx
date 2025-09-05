'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import { experience, Experience as ExperienceType } from '@/utils/data';

const Experience = () => {
  const memoizedExperience = useMemo(() => [...experience].reverse(), []);

  return (
    <div id="experience" className="px-4 sm:px-8 md:px-30 py-8">
      <div className="bg-white/60 rounded-3xl p-8 border border-black/10 shadow-lg flex-1">
        <h3 className="text-2xl font-bold text-blue-600 mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-blue-600 after:rounded-full">
          Experience
        </h3>
        <div>
          {memoizedExperience.map((item: ExperienceType) => (
            <div
              key={`exp-${item.id}`}
              className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between py-6 border-b border-black/10 last:border-b-0 before:content-[''] before:absolute before:left-0 before:top-0 before:w-0 before:h-full before:bg-gradient-to-r before:from-blue-500/5 before:to-transparent before:transition-all before:duration-300 hover:before:w-full"
            >
              <div className="flex items-center w-full lg:w-auto">
                <div className="flex-shrink-0 w-16 h-16 lg:w-24 lg:h-24 rounded-xl overflow-hidden bg-white flex items-center justify-center mr-6">
                  <Image
                    src={item.logo}
                    alt={`${item.title} logo`}
                    className="w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h4 className="text-lg lg:text-xl font-semibold text-gray-800 m-0 mb-1 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-base lg:text-lg text-blue-600 m-0 mb-1 font-medium">
                    {item.role}
                  </p>
                  <span className="text-sm lg:text-base text-gray-500 w-full lg:w-11/12 text-justify leading-normal">
                    {item.description}
                  </span>
                </div>
              </div>
              <div className="mt-4 lg:mt-0 flex flex-col items-start lg:items-end flex-shrink-0 min-w-[150px]">
                <div className="font-bold text-sm lg:text-base text-gray-500">
                  {item.date}
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  <b className="font-semibold text-gray-800">Job Type:</b> {item.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;