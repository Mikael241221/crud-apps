'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-500 py-5 px-8 flex items-center justify-between">
          <Link href="/" className="text-white hover:scale-105 text-2xl"
          >
            CRUD
          </Link>
      <ul className="flex space-x-4 text-lg">
        <li>
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/posts" className="text-white hover:underline">
            Posts
          </Link>
        </li>
        <li>
          <Link href="/posts/create" className="text-white hover:underline">
            Create Post
          </Link>
        </li>
      </ul>
      
    </nav>
  );
}
