'use client';

import { fetchPost, deletePost } from '../../../utils/api';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PostDetail({ params }) {
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(null);

  // Unwrap params using React.use()
  useEffect(() => {
    const unwrapParams = async () => {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    };
    unwrapParams();
  }, [params]);

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

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found.</div>;

  return (
    <div className='mt-7  space-y-5' >
      <h1 className="text-3xl font-bold   ">{post.title}</h1>
      <p>{post.body}</p>
      <button className="bg-red-400 text-black text-md px-6 py-3 rounded-md hover:bg-red-800 hover:text-white transition-all duration-300" onClick={handleDelete}>
        Delete Post
      </button>
    </div>
  );
}
