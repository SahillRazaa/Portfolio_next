'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import MyLogo from '../../public/assets/mylogo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const menuItems = ['Home', 'Recent', 'Projects', 'Experience', 'Contact'];
  const getLinkHref = (item: string) => {
    const anchor = item.toLowerCase();
    return anchor === 'home' ? '/' : isHome ? `#${anchor}` : `/#${anchor}`;
  };

  return (
    <>
      <div className="h-20 py-5 px-10 my-10 mx-5 rounded-full bg-white/60 border border-slate-300 shadow-lg text-black flex items-center justify-between box-border relative max-w-full lg:px-10 lg:mx-20 xl:mx-10">

        <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
          <Image src={MyLogo} alt="My Logo" width={30} height={30} />
          <p className="text-black text-xl font-medium">Sahil Raza</p>
        </Link>

        <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
          {menuItems.map((item) => (
            <li key={item}>
              <Link
                href={getLinkHref(item)}
                className="no-underline text-zinc-800 font-medium text-lg transition-all duration-300 ease-in-out py-2.5 border-b border-transparent hover:text-blue-600 hover:border-b hover:border-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-6">
          <a
            href="/Sahil_Raza_Ansari_Resume_SDE.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="py-2.5 px-6 rounded-full bg-blue-600 cursor-pointer text-white font-semibold no-underline flex items-center gap-2 border-2 border-transparent transition-all duration-300 ease-in-out hover:bg-transparent hover:text-blue-600 hover:border-blue-600">
              Resume
            </button>
          </a>
        </div>

        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={28} />
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 w-2/5 h-screen bg-white/95 backdrop-blur-lg shadow-[-5px_0_30px_rgba(0,0,0,0.1)] p-8 pt-24 flex flex-col gap-8 z-50 rounded-l-2xl transition-transform duration-300 ease-in-out md:w-3/5">
            {/* Close Button */}
            <div
              className="absolute top-8 right-8 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={28} />
            </div>

            {/* Mobile Nav Items */}
            {menuItems.map((item) => (
              <Link
                key={item}
                href={getLinkHref(item)}
                className="no-underline text-zinc-800 font-medium text-xl transition-all duration-300 ease-in-out py-2.5 border-b border-transparent hover:text-blue-600 hover:border-b hover:border-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}

            {/* Mobile Resume Button */}
            <a
              href="/Sahil_Raza_Ansari_Resume_SDE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              <button className="w-full justify-center py-2.5 px-6 rounded-full bg-blue-600 cursor-pointer text-white font-semibold no-underline flex items-center gap-2 border-2 border-transparent transition-all duration-300 ease-in-out hover:bg-transparent hover:text-blue-600 hover:border-blue-600">
                Resume
              </button>
            </a>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
