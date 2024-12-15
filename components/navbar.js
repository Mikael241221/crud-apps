'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-500 py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-bold hover:scale-105 transition-transform">
          CRUD
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-white md:hidden focus:outline-none absolute top-3 right-5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Simple Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-6 text-lg`}
        >
          <li>
            <Link
              href="/"
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/posts"
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              href="/posts/create"
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              Create Post
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
