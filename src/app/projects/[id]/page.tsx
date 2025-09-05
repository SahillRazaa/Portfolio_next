import React from 'react';
import { projectDetails } from '@/utils/data';
import DetailedProject from '@/components/DetailedProject';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { id: string };
}

const SingleProjectPage = ({ params }: PageProps) => {
  const projectId = Number(params.id);
  const project = projectDetails.find(p => p.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-gradient-to-br from-slate-100 to-slate-200 transition-all duration-300 ease-in-out relative overflow-hidden min-h-screen">
      <div className="relative z-10">
        <Navbar />
        <main>
            <DetailedProject project={project} />
        </main>
        <Footer />
        </div>
    </div>
  );
};

export default SingleProjectPage;