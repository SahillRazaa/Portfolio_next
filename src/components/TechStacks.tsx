'use client';

import React from 'react';
import Image from 'next/image';
import { techStack } from '@/utils/data';

const TechStacks = () => {
  return (
    <div id="tech" className="px-4 sm:px-8 md:px-30 py-8 pt-5">
      <div className="bg-white/60 rounded-3xl p-8 border border-black/10 shadow-lg flex-1">
        <h3 className="text-2xl font-bold text-blue-600 mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-blue-600 after:rounded-full font-heading">
          Technologies
        </h3>
        <div className="w-full overflow-hidden relative py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12 p-5">
            {techStack.map((src, index) => (
              <div key={`tech-${index}`} className="group">
                <Image
                  src={src}
                  alt={`Technology logo ${index + 1}`}
                  draggable="false"
                  loading="lazy"
                  className="h-8 sm:h-12 md:h-16 w-auto transition-all duration-300 ease-in-out grayscale-[30%] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStacks;