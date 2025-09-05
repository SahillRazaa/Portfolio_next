'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FilterModal from '@/components/FilterModal';
import { projectDisplay, ProjectDisplay as ProjectDisplayType } from '@/utils/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AllProjects = () => {
  const [activeType, setActiveType] = useState<'Personal' | 'Company' | 'Hackathon'>('Personal');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    sortBy: 'recent',
    techType: 'all',
    difficulty: 'all',
  });

  const filteredProjects = projectDisplay
    .filter(p => p.type === activeType)
    .filter(p => filters.techType === 'all' || p.techType === filters.techType)
    .filter(p => filters.difficulty === 'all' || p.difficulty === filters.difficulty)
    .sort((a, b) => {
      if (filters.sortBy === 'recent') return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (filters.sortBy === 'leastRecent') return new Date(a.date).getTime() - new Date(b.date).getTime();
      if (filters.sortBy === 'lengthy') return b.length - a.length;
      if (filters.sortBy === 'quicky') return a.length - b.length;
      return 0;
    });

  return (
    <div className="bg-gradient-to-br from-slate-100 to-slate-200 transition-all duration-300 ease-in-out relative overflow-hidden min-h-screen">
      <div className="relative z-10">
      <Navbar />
      <main className="px-4 sm:px-8 md:px-30 py-8 pb-8 relative">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl text-gray-800 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-blue-600 after:rounded-full font-bold font-heading">
            All Projects
          </h2>
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex bg-slate-200 rounded-lg overflow-hidden font-body shadow">
              <button
                onClick={() => setActiveType('Personal')}
                className={`py-2 px-4 font-semibold transition-colors duration-300 ${activeType === 'Personal' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 hover:bg-blue-100'}`}
              >
                Personal
              </button>
              <button
                onClick={() => setActiveType('Company')}
                className={`py-2 px-4 font-semibold transition-colors duration-300 ${activeType === 'Company' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 hover:bg-blue-100'}`}
              >
                Company
              </button>
              <button
                onClick={() => setActiveType('Hackathon')}
                className={`py-2 px-4 font-semibold transition-colors duration-300 ${activeType === 'Hackathon' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 hover:bg-blue-100'}`}
              >
                Hackathon
              </button>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="py-2 px-5 bg-blue-600 text-white font-semibold rounded-lg transition-transform duration-200 hover:bg-gray-800 hover:-translate-y-0.5"
            >
              Filter
            </button>
          </div>
        </header>

        {filteredProjects.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 font-body font-medium"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {filteredProjects.map((project: ProjectDisplayType, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-3xl p-8 transition-all duration-300 ease-in-out shadow-lg hover:-translate-y-2.5 hover:shadow-2xl"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl text-gray-800 m-0 mb-2">{project.title}</h3>
                    <p className="text-base text-gray-500 m-0 font-medium">{project.duration}</p>
                  </div>
                  <Link href={`/projects/${project.id}`} passHref>
                    <button className="py-3 px-6 text-base bg-blue-600 text-white border-none rounded-lg cursor-pointer font-semibold transition-all duration-200 ease-in-out hover:bg-gray-800 hover:-translate-y-0.5 active:translate-y-0">
                      View
                    </button>
                  </Link>
                </div>
                <div className="w-full h-[40vh] rounded-2xl overflow-hidden mt-6">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="h-[50vh] flex items-center justify-center">
            <p className="text-xl font-medium">No projects found.</p>
          </div>
        )}
      </main>

      {isModalOpen && (
        <FilterModal
          onClose={() => setIsModalOpen(false)}
          filters={filters}
          setFilters={setFilters}
        />
      )}
      <Footer />
    </div>
    </div>
  );
};

export default AllProjects;