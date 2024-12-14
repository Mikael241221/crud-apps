import PostForm from '../../../../components/PostForm';
import { fetchPost, updatePost } from '../../../../utils/api';
import { useRouter } from 'next/navigation';

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
