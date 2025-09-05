'use client';

import React from 'react';
import Image from 'next/image';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import MyLogo from '../../public/assets/mylogo.png';

const Footer = () => {
  return (
    <footer className="h-20 py-5 px-10 my-10 mx-4 sm:mx-20 rounded-full bg-white border border-slate-300 text-black flex items-center justify-between box-border flex-col sm:flex-row gap-4 sm:gap-0 sm:h-auto sm:py-2 sm:px-5 sm:rounded-2xl">
      <div className="hidden lg:flex items-center gap-2.5">
        <Image src={MyLogo} alt="My Logo" width={30} height={30} />
        <p className="text-black text-lg font-medium font-heading">Sahil Raza</p>
      </div>

      <div className="text-sm text-center text-gray-600 font-body">
        &copy; {new Date().getFullYear()} Sahil Raza Ansari. All rights reserved.
      </div>

      <div className="flex items-center gap-4">
        <a
          href="https://github.com/SahillRazaa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white text-lg no-underline transition-all duration-300 ease-in-out border-2 border-transparent hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-600/50 hover:border-blue-600 hover:bg-white hover:text-blue-600"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sahil-raza-ansari-7b1b98270/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white text-lg no-underline transition-all duration-300 ease-in-out border-2 border-transparent hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-600/50 hover:border-blue-600 hover:bg-white hover:text-blue-600"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://x.com/RazaSahil7170"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white text-lg no-underline transition-all duration-300 ease-in-out border-2 border-transparent hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-600/50 hover:border-blue-600 hover:bg-white hover:text-blue-600"
        >
          <FiTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;