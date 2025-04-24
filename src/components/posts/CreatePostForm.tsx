
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface CreatePostFormProps {
  onSuccess?: () => void;
}

export function CreatePostForm({ onSuccess }: CreatePostFormProps) {
  const [content, setContent] = useState('');
  const [platform, setPlatform] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!content.trim() || !platform) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.from('posts').insert({
        content,
        platforms: [platform],
        status: 'draft',
      });

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Post created successfully',
      });

      setContent('');
      setPlatform('');
      onSuccess?.();
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

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        className="min-h-[100px]"
        required
      />
      <Select value={platform} onValueChange={setPlatform} required>
        <SelectTrigger>
          <SelectValue placeholder="Select platform" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="twitter">Twitter</SelectItem>
          <SelectItem value="facebook">Facebook</SelectItem>
          <SelectItem value="instagram">Instagram</SelectItem>
          <SelectItem value="linkedin">LinkedIn</SelectItem>
        </SelectContent>
      </Select>
      <Button 
        type="submit" 
        disabled={loading} 
        className="w-full bg-[#6E59A5]"
      >
        {loading ? 'Creating...' : 'Create Post'}
      </Button>
    </form>
  );
}
