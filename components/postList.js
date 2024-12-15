'use client';

import Link from 'next/link';

export default function PostList({ posts }) {
  return (
    <ul className="space-y-6 p-3">
      {posts.map((post) => (
        <li
          key={post.id}
          className="bg-blue-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200"
        >
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            {post.title}
          </h2>

          {/* Body */}
          <p className="text-gray-600 mb-4 line-clamp-2">
            {post.body}
          </p>

          {/* Read More Link */}
          <Link
            href={`/posts/${post.id}`}
            className="inline-block text-cyan-600 font-semibold hover:text-cyan-800 transition-colors duration-300"
          >
            Read More &rarr;
          </Link>
        </li>
      ))}
    </ul>
  );
}
