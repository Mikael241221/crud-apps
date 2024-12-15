import { fetchPosts } from '../../utils/api';
import PostList from '../../components/postListostList';

export default async function PostsPage() {
  const posts = await fetchPosts();

  return (
    <div>
      <h1 className="text-2xl font-bold">Posts</h1>
      <PostList posts={posts} />
    </div>
  );
}

