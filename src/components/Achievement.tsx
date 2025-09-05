'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import { achievements, Achievement as AchievementType } from '@/utils/data';

const Achievement = () => {
  const memoizedAchievements = useMemo(() => [...achievements].reverse(), []);

  return (
    <div id="achievement" className="px-4 sm:px-8 md:px-30 py-8 pt-5">
      <div className="bg-white/60 rounded-3xl p-8 border border-black/10 shadow-lg flex-1">
        <h3 className="text-2xl font-bold text-blue-600 mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-blue-600 after:rounded-full font-heading">
          Achievements
        </h3>
        <div>
          {memoizedAchievements.map((item: AchievementType) => (
            <div
              key={`achievement-${item.id}`}
              className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between py-6 border-b border-black/10 last:border-b-0 before:content-[''] before:absolute before:left-0 before:top-0 before:w-0 before:h-full before:bg-gradient-to-r before:from-blue-500/5 before:to-transparent before:transition-all before:duration-300 hover:before:w-full"
            >
              <div className="flex items-center w-full lg:w-auto mb-4 lg:mb-0">
                <div className="group relative flex-shrink-0 w-16 h-16 lg:w-24 lg:h-24 rounded-xl overflow-hidden bg-white flex items-center justify-center mr-6 shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
                  <Image
                    src={item.logo}
                    alt={`${item.title} achievement`}
                    draggable="false"
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center relative z-10">
                  <h4 className="text-lg lg:text-xl font-bold text-blue-600 m-0 mb-1 font-heading">
                    {item.title}
                  </h4>
                  <p className="text-sm lg:text-base text-gray-500 m-0 leading-snug font-body">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="relative z-10 flex-shrink-0 text-sm lg:text-base text-gray-500 font-medium min-w-[100px] text-left lg:text-right font-body">
                {item.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievement;