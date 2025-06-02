"use client";

import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="mx-auto shadow-md  px-4 sm:px-6 lg:px-8">
        <div className="flex  h-16 items-center justify-between">
          <div className="flex-1 flex items-center gap-4">
            <h2 className="text-3xl font-bold">Logo</h2>
            <div className="hidden md:flex items-center">
              <input type="radio" className="p-2" />
              <label className="mx-2">En</label>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <nav>
              <ul className="flex items-center gap-6 text-sm">
                <li><a className="hover:text-gray-500" href="#">Demos</a></li>
                <li><a className="hover:text-gray-500" href="#">Hosting</a></li>
                <li><a className="hover:text-gray-500" href="#">ProHosting</a></li>
                <li><a className="hover:text-gray-500" href="#">Domains</a></li>
                <li><a className="hover:text-gray-500" href="#">Need Help?</a></li>
                <li><a className="hover:text-gray-500" href="#">Pages</a></li>
                <li><a className="hover:text-gray-500" href="#">Contact Us</a></li>
              </ul>
            </nav>

            <a
              className="rounded-md bg-violet-950 px-5 py-2.5 text-white font-medium shadow-sm"
              href="#"
            >
              Client Login
              <i className="mx-1.5 font-normal text-sm font-mono  fa-solid fa-right-to-bracket"></i>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded bg-gray-100 text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            <nav>
              <ul className="flex flex-col gap-4 text-sm px-2 pb-4">
                <li><a className="block hover:text-gray-500" href="#">Demos</a></li>
                <li><a className="block hover:text-gray-500" href="#">Hosting</a></li>
                <li><a className="block hover:text-gray-500" href="#">ProHosting</a></li>
                <li><a className="block hover:text-gray-500" href="#">Domains</a></li>
                <li><a className="block hover:text-gray-500" href="#">Need Help?</a></li>
                <li><a className="block hover:text-gray-500" href="#">Pages</a></li>
                <li><a className="block hover:text-gray-500" href="#">Contact Us</a></li>
                <li>
                  <a
                    className="block bg-violet-950 text-white px-4 py-2 rounded"
                    href="#"
                  >
                    Client Login
               
                  </a>
                    <i className="mx-1.5 text-sm font-light  fa-solid fa-right-to-bracket"></i>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
