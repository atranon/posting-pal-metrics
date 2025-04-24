
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Card } from '@/components/ui/card';
import { CreatePostForm } from '@/components/posts/CreatePostForm';
import { useToast } from '@/components/ui/use-toast';
import type { Database } from '@/lib/database.types';

type SocialPost = Database['public']['Tables']['posts']['Row'];

export default function Dashboard() {
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  async function fetchPosts() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

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
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#6E59A5]"></div>
            </div>
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
            <p className="text-center text-gray-500 py-8">No posts yet</p>
          )}
        </Card>
      </div>
    </div>
  );
}
