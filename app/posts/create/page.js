"use client"


import PostForm from '@/components/PostForm';
import { createPost } from '../../../utils/api';
import { useRouter } from 'next/navigation';

export default function CreatePostPage() {
  const router = useRouter();

  const handleSubmit = async (data) => {
    await createPost(data);
    router.push('/posts');
  };

  return <PostForm onSubmit={handleSubmit} />;
}
