
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar } from 'lucide-react';

export const CreatePostForm = () => {
  const [content, setContent] = useState('');
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [scheduledFor, setScheduledFor] = useState('');

  const handlePlatformChange = (platform: string, checked: boolean) => {
    if (checked) {
      setPlatforms([...platforms, platform]);
    } else {
      setPlatforms(platforms.filter(p => p !== platform));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating post:', { content, platforms, scheduledFor });
    // Here you would typically save to Supabase
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Textarea
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-h-[100px]"
          required
        />
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Platforms</label>
        <div className="flex space-x-4">
          {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((platform) => (
            <div key={platform} className="flex items-center space-x-2">
              <Checkbox
                id={platform}
                checked={platforms.includes(platform)}
                onCheckedChange={(checked) => handlePlatformChange(platform, checked as boolean)}
              />
              <label htmlFor={platform} className="text-sm">{platform}</label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Schedule for later</label>
        <input
          type="datetime-local"
          value={scheduledFor}
          onChange={(e) => setScheduledFor(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md text-sm w-full"
        />
      </div>

      <div className="flex space-x-2">
        <Button type="submit" className="flex-1">
          Publish Now
        </Button>
        <Button type="button" variant="outline" className="flex-1">
          Save Draft
        </Button>
      </div>
    </form>
  );
};
