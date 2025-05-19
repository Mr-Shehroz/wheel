'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white md:bg-transparent p-6 flex justify-between items-start">
      {/* Logo */}
      <Image
        src="/logo.png"
        alt="Logo"
        width={180}
        height={100}
        className="w-[180px] z-50"
        priority
      />

      {/* Right Section */}
      <div className="flex flex-row-reverse md:flex-col items-center gap-6 z-50 relative">
        {/* Menu Toggle */}
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          <svg
            className="w-[30px] h-[30px]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>

        {/* User Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[30px] h-[30px]"
          aria-label="User"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>

        {/* Contact Link (rotated for desktop) */}
        <Link
          href="#CONTACT"
          className="hidden md:block bg-black text-white py-2 px-4 rounded-full rotate-90 mt-5"
        >
          Contact
        </Link>
      </div>

      {/* Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 text-white z-40 flex items-center justify-center transition duration-300">
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            aria-label="Close Menu"
          >
            &times;
          </button>

          <div className="flex flex-col gap-6 md:flex-row text-center justify-between md:items-end lg:w-[60%] xl:w-[50%] text-xl">
            {/* Column 1 */}
            <div className="flex flex-col md:gap-16 gap-3">
              <Link href="#home" onClick={toggleMenu} className="hover:underline flex md:gap-5 gap-2 items-end cursor-pointer">
                HERE IS{" "}
                <Image
                  src="/wow.png"
                  alt="wow"
                  width={80}
                  height={80}
                  className="w-[50px] md:w-[80px]"
                />
              </Link>
              <Link href="#FREELANCERS" onClick={toggleMenu} className="hover:underline cursor-pointer">FREELANCERS</Link>
              <Link href="#COMPANIES" onClick={toggleMenu} className="hover:underline cursor-pointer">COMPANIES</Link>
              <Link href="#missions" onClick={toggleMenu} className="hover:underline cursor-pointer">MISSIONS</Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col md:gap-16 gap-3">
              <Link href="#ENGINEERING" onClick={toggleMenu} className="hover:underline cursor-pointer">ENGINEERING</Link>
              <Link href="#TECH" onClick={toggleMenu} className="hover:underline cursor-pointer">TECH</Link>
              <Link href="#ADVICE" onClick={toggleMenu} className="hover:underline cursor-pointer">ADVICE</Link>
              <Link href="#SPONSORSHIP" onClick={toggleMenu} className="hover:underline cursor-pointer">SPONSORSHIP</Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col md:gap-16 gap-3">
              <Link href="#TEAM" onClick={toggleMenu} className="hover:underline cursor-pointer">TEAM</Link>
              <Link href="#PARTNERSHIPS" onClick={toggleMenu} className="hover:underline cursor-pointer">PARTNERSHIPS</Link>
              <Link href="#BLOG" onClick={toggleMenu} className="hover:underline cursor-pointer">BLOG</Link>
              <Link href="#CONTACT" onClick={toggleMenu} className="hover:underline cursor-pointer">CONTACT</Link>
            </div>
          </div>

          {/* Decorative Icon */}
          <svg
            className="h-[100px] w-[100px] fill-white absolute bottom-10 right-10 hidden md:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 468.77 468.21"
          >
            <path d="M100.84,315.81l-71.51,33.68-6.15-14.55...Z" />
          </svg>
        </div>
      )}
    </header>
  );
}
