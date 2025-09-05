'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import MySelf from '../../public/assets/me.png';
import { FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';

const Hero = () => {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        requestAnimationFrame(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        });
      }
    }
  }, [pathname]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      if (prefersReducedMotion) {
        container.style.animation = 'none';
      }
    }
  }, []);

  return (
    <div
      ref={containerRef}
      id="home"
      className="w-full flex flex-col font-sans relative overflow-hidden "
    >
      <div className="flex flex-col xl:flex-row px-4 sm:px-8 md:px-30 py-8 gap-8 items-stretch justify-center pt-5">
        <div className="flex-[2] bg-white/85 backdrop-blur-md rounded-3xl border border-slate-300/30 shadow-xl p-6 lg:p-10 relative overflow-hidden flex flex-col justify-between">
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading leading-tight text-gray-900">
              Turning Ideas
              <br />
              Into <span className="text-blue-600 relative after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-3 after:bg-blue-600/30 after:-z-10 after:rounded-sm">Impactful</span>
              <br />
              Digital Experiences
            </h1>
            <h2 className="text-base sm:text-lg lg:text-xl mt-8 font-normal font-body max-w-xl text-slate-600 leading-relaxed">
              Full-stack developer crafting modern web & mobile apps with
              performance, accessibility, and user delight at the core.
              Passionate about shipping real-world solutions that make a
              difference.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <Link href="/projects" passHref>
                <button className="inline-flex items-center justify-center gap-2 rounded-full text-base py-3.5 px-8 font-medium no-underline border-2 cursor-pointer transition-all duration-200 ease-in-out bg-blue-600 text-white border-blue-600 hover:bg-white/90 hover:text-black hover:border-black hover:-translate-y-0.5 active:translate-y-0 font-body">
                  Explore Work <FiArrowUpRight />
                </button>
              </Link>
              <Link href="#contact" passHref>
                 <button className="inline-flex items-center justify-center gap-2 rounded-full text-base py-3.5 px-8 font-medium no-underline border-2 cursor-pointer transition-all duration-200 ease-in-out text-black bg-white/20 border-black hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:-translate-y-0.5 active:translate-y-0 font-body">
                  Let&apos;s Connect
                </button>
              </Link>
            </div>
          </div>

          <div className="absolute top-1/2 left-[-10%] -translate-y-1/2 text-[10rem] lg:text-[22rem] font-black text-black/5 -z-10 select-none whitespace-nowrap tracking-tighter font-heading">
            SAHILRAZA
          </div>
          <div className="hidden lg:block absolute bottom-0 right-12 w-2/5 z-20 transition-transform duration-300 ease-in-out hover:-translate-y-1">
             <Image
              src={MySelf}
              alt="Portrait of Sahil Raza"
              className="drop-shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;