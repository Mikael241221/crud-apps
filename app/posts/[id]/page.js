'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { deletePost, fetchPost } from '@/utils/api';

export default function PostDetail({ params }) {
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(null);

  // Unwrap params
  useEffect(() => {
    const unwrapParams = async () => {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    };
    unwrapParams();
  }, [params]);

  // Fetch post
  useEffect(() => {
    if (!id) return;

    const getPost = async () => {
      try {
        const data = await fetchPost(id);
        setPost(data);
      } catch (error) {
        console.error('Failed to fetch post:', error);
      } finally {
        setLoading(false);
      }
    };

    getPost();
  }, [id]);

  // Handle delete
  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this post?')) {
      try {
        await deletePost(id);
        router.push('/posts');
      } catch (error) {
        console.error('Failed to delete post:', error);
      }
    }
  };

  if (loading) return <div className="text-center mt-10 text-xl font-bold">Loading...</div>;
  if (!post) return <div className="text-center mt-10 text-red-500">Post not found.</div>;

  return (
    <div className="mt-10 mx-auto p-6 max-w-2xl bg-cyan-200 shadow-lg rounded-lg space-y-6">
      {/* Post Title */}
      <h1 className="text-4xl font-bold text-gray-800 text-center">{post.title}</h1>
      
      {/* Post Content */}
      <p className="text-lg text-gray-700 leading-relaxed">{post.body}</p>
      
      {/* Delete Button */}
      <div className="text-center">
        <button
          className="bg-red-500 text-white text-md px-6 py-3 rounded-md hover:bg-red-600 transition-all duration-300 shadow-md"
          onClick={handleDelete}
        >
          Delete Post
        </button>
      </div>
    </div>
  );
}
