const API_URL = 'https://jsonplaceholder.typicode.com/posts';

{/*  Fetch all posts*/}
export async function fetchPosts() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch posts');
  return response.json();
}

{/* Fetch a single post*/}
export async function fetchPost(id) {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) throw new Error('Failed to fetch post');
  return response.json();
}

 {/*Create a new post*/}
export async function createPost(data) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to create post');
  const posts = response.json()
  console.log(posts)
  return posts;
}

{/*Update an existing post*/}
export async function updatePost(id, data) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to update post');
  return response.json();
}

{/*Delete a post*/}
export async function deletePost(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete post');
  return response.json();
}
