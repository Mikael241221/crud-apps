
import PostList from '@/components/PostList';
import { fetchPosts } from '@/utils/api';

export default async function PostsPage() {
  const posts = await fetchPosts();

  return (
    <div className="mt-10 px-3 lg:px-20">
      {/* Page Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-blue-600 mb-6">
        Posts
      </h1>

      {/* Posts List Container */}
      <div className="bg-gray-200 p-4 md:p-8 rounded-lg shadow-lg">
        <PostList posts={posts} />
      </div>
    </div>
  );
}
