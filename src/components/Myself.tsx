'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';

import Certimate from '../../public/assets/brands/certimate.png';
import Wams from '../../public/assets/brands/WAMS.png';
import IIITDMK from '../../public/assets/brands/iiitdm_logo.png';

const brands = [IIITDMK, Certimate, Wams];

const Myself = () => {
  const techTags = useMemo(
    () => [
      'React + Vite',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Sequelize ORM',
      'JWT Auth',
      'RBAC',
      'Admin Panel',
    ],
    []
  );

  const duplicatedBrands = useMemo(() => [...brands, ...brands, ...brands, ...brands], []);

  return (
    <div id="recent" className="flex flex-col xl:flex-row px-4 sm:px-8 md:px-30 py-8 gap-8 items-stretch justify-center pt-5">
      <div className="flex-1 flex flex-col gap-8 max-w-full">

        <div className="bg-white/80 rounded-3xl p-8 border border-black/10 shadow-xl">
          <h3 className="text-2xl font-bold text-blue-600 mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-blue-600 after:rounded-full font-heading">
            Hostel Management System
          </h3>
          <div className="text-base text-gray-800 leading-relaxed text-justify space-y-4 mb-6 font-body">
            <p>
              Currently building a full-stack hostel portal for my own college — something the admin staff can actually use to manage everything from student room allotments to fee records, buildings, and wardens.
            </p>
            <p>
              The system is being built from the ground up with a React + Vite dashboard, backed by a Node.js server and PostgreSQL database using Sequelize. I&apos;ve already designed and integrated 10+ relational tables (and counting), covering key hostel workflows.
            </p>
            <p>
              It includes secure role-based access, so different users, from wardens to the Super Admin, can log in and manage only what they're supposed to. It&apos;s one of the biggest real-world apps I&apos;ve worked on so far, and it&apos;s teaching me a lot about structuring large-scale backend logic and database relationships.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {techTags.map((tech) => (
              <span
                key={tech}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium border border-black/10 transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-lg font-body"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Experiences Card */}
        <div className="bg-white/80 rounded-3xl p-8 border border-black/10 shadow-xl">
          <h3 className="text-2xl font-bold text-blue-600 mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-blue-600 after:rounded-full font-heading">
            Experiences
          </h3>
          <div className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
            <div className="flex items-center animate-marquee hover:paused">
                {duplicatedBrands.map((src, index) => (
                <Image
                    key={index}
                    src={src}
                    alt={`Company logo ${index % brands.length + 1}`}
                    className="h-16 w-auto mx-6 flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
                />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myself;