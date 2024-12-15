"use client"

import PostForm from 'components/PostForm';
import { useRouter } from 'next/navigation';
import { fetchPost, updatePost } from 'utils/api';

export default async function EditPostPage({ params }) {
  const { id } = params;
  const post = await fetchPost(id);
  const router = useRouter();

  const handleSubmit = async (data) => {
    await updatePost(id, data);
    router.push('/posts');
  };

  return <PostForm initialData={post} onSubmit={handleSubmit} />;
}
