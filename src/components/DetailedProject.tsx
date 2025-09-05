'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; 
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaLink } from 'react-icons/fa';
import { projectDetails, ProjectDetails as ProjectDetailsType } from '@/utils/data';

interface DetailedProjectProps {
  project: ProjectDetailsType;
}

const DetailedProject = ({ project }: DetailedProjectProps) => {
  const router = useRouter();
  const currentIndex = projectDetails.findIndex(p => p.id === project.id);

  const goToProject = (index: number) => {
    if (index >= 0 && index < projectDetails.length) {
      router.push(`/projects/${projectDetails[index].id}`);
    }
  };

  if (!project) {
    return (
      <div className="min-h-[calc(100vh-320px)] flex items-center justify-center">
        <p className="text-xl font-medium font-body">Project not found.</p>
      </div>
    );
  }

  return (
    <motion.div
      className="p-4 sm:p-8 md:px-30"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      <motion.div
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        className="bg-white/60 backdrop-blur-xl rounded-3xl border border-slate-300 shadow-lg p-6 sm:p-10 flex flex-col gap-8"
      >
        <header className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-1">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl m-0 mb-2.5">
              {project.headline}
            </h1>
            <p className="font-body text-lg sm:text-xl m-0">
              {project.description}
            </p>
          </div>
          <div className="flex flex-col gap-4 items-start md:items-end">
            <div className="flex gap-2.5">
              <button
                onClick={() => goToProject(currentIndex - 1)}
                disabled={currentIndex === 0}
                className="bg-gray-700 text-white py-2 px-5 border-none rounded-lg cursor-pointer text-base disabled:bg-gray-300 disabled:cursor-not-allowed font-body"
              >
                Previous
              </button>
              <button
                onClick={() => goToProject(currentIndex + 1)}
                disabled={currentIndex === projectDetails.length - 1}
                className="bg-gray-700 text-white py-2 px-5 border-none rounded-lg cursor-pointer text-base disabled:bg-gray-300 disabled:cursor-not-allowed font-body"
              >
                Next
              </button>
            </div>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-6 rounded-lg bg-blue-600 text-white font-semibold no-underline flex items-center justify-center gap-2 border-2 border-transparent transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/50 font-body"
              >
                <FaLink />
                Link
              </a>
            )}
          </div>
        </header>

        <div>
          <h2 className="font-heading text-2xl font-bold text-blue-600 mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-blue-600 after:rounded-full">
            Key Features
          </h2>
          <ul className="list-none p-0 flex flex-wrap gap-4">
            {project.features.map((feat, i) => (
              <li key={i} className="flex items-center gap-2 bg-green-100 text-green-800 py-2 px-4 rounded-lg text-base font-body">
                <FaCheckCircle /> {feat}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-bold text-blue-600 mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-blue-600 after:rounded-full">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-8">
            {project.techstack.map((src, index) => (
              <Image
                src={src}
                alt={`Tech ${index}`}
                key={index}
                draggable="false"
                className="h-12 w-auto transition-transform duration-300 hover:scale-110"
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="bg-white/60 backdrop-blur-xl rounded-3xl border border-slate-300 shadow-lg p-6 lg:p-10"
        >
          <h3 className="font-heading text-2xl font-bold text-blue-600 mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-blue-600 after:rounded-full">
            Problem Statement
          </h3>
          <p className="font-body text-base text-black leading-relaxed">
            {project.problemStatement}
          </p>
        </motion.div>
        <div className="flex flex-col gap-5">
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="bg-white/60 backdrop-blur-xl rounded-3xl border border-slate-300 shadow-lg p-6 lg:p-8 flex-1"
          >
            <h3 className="font-heading text-xl font-bold text-blue-600 mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-blue-600 after:rounded-full">
              Challenges
            </h3>
            <p className="font-body text-base text-black leading-relaxed">
              {project.challenges}
            </p>
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="bg-white/60 backdrop-blur-xl rounded-3xl border border-slate-300 shadow-lg p-6 lg:p-8 flex-1"
          >
            <h3 className="font-heading text-xl font-bold text-blue-600 mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-blue-600 after:rounded-full">
              Solution Approach
            </h3>
            <p className="font-body text-base text-black leading-relaxed">
              {project.solutionApproach}
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col gap-5">
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="bg-white/60 backdrop-blur-xl rounded-3xl border border-slate-300 shadow-lg p-6 lg:p-8 flex-1"
          >
            <h3 className="font-heading text-xl font-bold text-blue-600 mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-blue-600 after:rounded-full">
              Learnings
            </h3>
            <p className="font-body text-base text-black leading-relaxed">
              {project.learning}
            </p>
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="bg-white/60 backdrop-blur-xl rounded-3xl border border-slate-300 shadow-lg p-6 lg:p-8 flex-1"
          >
            <h3 className="font-heading text-xl font-bold text-blue-600 mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-blue-600 after:rounded-full">
              Impact
            </h3>
            <p className="font-body text-base text-black leading-relaxed">
              {project.impact}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {project.projectImages.map((item, index) => (
        <motion.div
          key={index}
          className="mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ delay: index * 0.1 }}
        >
          <Image
            src={item}
            alt={`Project Preview ${index}`}
            className="w-full rounded-2xl"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default DetailedProject;
