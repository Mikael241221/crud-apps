'use client';

import Link from 'next/link';

export default function PostList({ posts }) {
  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.id} className="border p-4 rounded-md shadow">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>{post.body}</p>
          <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
            Read More
          </Link>
        </li>
      ))}
    </ul>
  );
}
