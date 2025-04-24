import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Card } from '@/components/ui/card';
import { CreatePostForm } from '@/components/posts/CreatePostForm';
import type { SocialPost } from '@/lib/supabase';

export default function Dashboard() {
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
          <CreatePostForm onSuccess={fetchPosts} />
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
          {loading ? (
            <p>Loading...</p>
          ) : posts.length > 0 ? (
            <div className="grid gap-4">
              {posts.map((post) => (
                <Card key={post.id} className="p-4">
                  <p className="text-sm text-gray-500">
                    {new Date(post.created_at).toLocaleString()}
                  </p>
                  <p className="mt-2">{post.content}</p>
                  <div className="mt-2 flex gap-2">
                    {post.platforms.map((platform) => (
                      <span key={platform} className="text-sm text-blue-500">
                        #{platform}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <p>No posts yet</p>
          )}
        </Card>
      </div>
    </div>
  );
}