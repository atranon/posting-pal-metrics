
import { useState } from 'react';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Plus } from 'lucide-react';

const scheduledPosts = [
  {
    id: 1,
    date: new Date(2025, 6, 15),
    time: '09:00',
    content: 'Check out our new feature update! 🚀',
    platforms: ['Twitter', 'LinkedIn'],
    status: 'scheduled'
  },
  {
    id: 2,
    date: new Date(2025, 6, 16),
    time: '14:30',
    content: 'Behind the scenes: How we built our latest tool',
    platforms: ['Facebook', 'Instagram'],
    status: 'scheduled'
  },
  {
    id: 3,
    date: new Date(2025, 6, 18),
    time: '11:00',
    content: 'Weekly tips for social media growth 📈',
    platforms: ['Twitter'],
    status: 'draft'
  }
];

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  
  const postsForSelectedDate = scheduledPosts.filter(
    post => post.date.toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Content Calendar</h1>
          <Button className="bg-[#6E59A5] hover:bg-[#5E4A95]">
            <Plus className="h-4 w-4 mr-2" />
            Schedule Post
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Schedule Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <CalendarComponent
                mode="single"
                selected={selectedDate}
                onSelect={(date) => date && setSelectedDate(date)}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          {/* Scheduled Posts for Selected Date */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                {selectedDate.toLocaleDateString()}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {postsForSelectedDate.length > 0 ? (
                  postsForSelectedDate.map((post) => (
                    <div key={post.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm font-medium">{post.time}</span>
                        <Badge variant={post.status === 'scheduled' ? 'default' : 'secondary'}>
                          {post.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{post.content}</p>
                      <div className="flex gap-1">
                        {post.platforms.map((platform) => (
                          <Badge key={platform} variant="outline" className="text-xs">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm">No posts scheduled for this date</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Posts */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Upcoming Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scheduledPosts.map((post) => (
                <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium">
                        {post.date.toLocaleDateString()} at {post.time}
                      </span>
                      <Badge variant={post.status === 'scheduled' ? 'default' : 'secondary'}>
                        {post.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{post.content}</p>
                    <div className="flex gap-1">
                      {post.platforms.map((platform) => (
                        <Badge key={platform} variant="outline" className="text-xs">
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Calendar;
