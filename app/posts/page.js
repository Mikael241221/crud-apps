import PostList from '@/components/PostList';
import { fetchPosts } from '../../utils/api';

export default async function PostsPage() {
  const posts = await fetchPosts();

  return (
    <div className="mt-5 px-5">
      <h1 className="text-2xl font-bold mb-2 text-center">Posts</h1>
      <PostList posts={posts} />
    </div>
  );
}

