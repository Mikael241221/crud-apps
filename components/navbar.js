'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
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
