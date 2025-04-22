
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar as CalendarIcon, MessageSquare, User } from "lucide-react";
import { useState } from "react";

// Type for the scheduled posts
type ScheduledPost = {
  id: number;
  content: string;
  date: string;
  time: string;
  platforms: string[];
};

// Sample data for the calendar posts
const scheduledPosts: Record<string, ScheduledPost[]> = {
  "2025-04-22": [
    {
      id: 1,
      content: "We're proud to announce our partnership with @techcorp to bring you better solutions! #partnership",
      date: "2025-04-22",
      time: "13:15",
      platforms: ["twitter", "facebook"]
    },
    {
      id: 2,
      content: "Join our webinar on digital marketing strategies next week. Register now!",
      date: "2025-04-22",
      time: "15:30",
      platforms: ["linkedin", "twitter", "facebook"]
    }
  ],
  "2025-04-23": [
    {
      id: 3,
      content: "Check out our latest product release! #innovation #tech",
      date: "2025-04-23",
      time: "09:00",
      platforms: ["twitter", "linkedin", "facebook"]
    }
  ],
  "2025-04-24": [
    {
      id: 4,
      content: "Join us for an exciting webinar on social media strategies tomorrow at 3 PM EST. Register now at the link in bio!",
      date: "2025-04-24",
      time: "15:00",
      platforms: ["instagram", "facebook"]
    }
  ],
  "2025-04-25": [
    {
      id: 5,
      content: "How our team embraces remote work culture while staying connected and productive. Read our blog post:",
      date: "2025-04-25",
      time: "11:30",
      platforms: ["twitter", "linkedin"]
    }
  ]
};

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<string>("2025-04-22"); // Default to today

  // Function to generate dates for the current month
  const getDaysInMonth = (year: number, month: number) => {
    const date = new Date(year, month, 1);
    const days = [];
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    
    // Add empty cells for days of previous month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    
    // Add days of current month
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    
    return days;
  };

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthYear = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const days = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());

  // Format a date as YYYY-MM-DD for lookup
  const formatDateKey = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  // Navigate to previous/next month
  const prevMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() - 1);
    setCurrentMonth(newMonth);
  };

  const nextMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + 1);
    setCurrentMonth(newMonth);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#6E59A5]">PostingPal</h1>
            
            <nav className="hidden md:flex ml-8">
              <ul className="flex space-x-1">
                <li>
                  <Link to="/dashboard" className="px-4 py-2 text-gray-700 hover:text-[#6E59A5] hover:bg-purple-50 rounded-md">
                    Publishing
                  </Link>
                </li>
                <li>
                  <Link to="/analytics" className="px-4 py-2 text-gray-700 hover:text-[#6E59A5] hover:bg-purple-50 rounded-md">
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link to="/calendar" className="px-4 py-2 text-[#6E59A5] font-medium bg-purple-50 rounded-md">
                    Calendar
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="text-gray-700">
              <MessageSquare className="mr-2 h-4 w-4" />
              Inbox
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Content Calendar</h1>
          <p className="text-gray-600">View and manage your scheduled posts</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Calendar */}
          <Card className="xl:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  <span>{monthYear}</span>
                </div>
              </CardTitle>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" onClick={prevMonth}>Previous</Button>
                <Button variant="outline" size="sm" onClick={nextMonth}>Next</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1">
                {/* Day headers */}
                {daysOfWeek.map((day) => (
                  <div key={day} className="text-center font-medium text-sm py-2">
                    {day}
                  </div>
                ))}
                
                {/* Calendar cells */}
                {days.map((day, index) => {
                  if (!day) {
                    return <div key={`empty-${index}`} className="h-24 p-1 bg-gray-50 border border-gray-100"></div>;
                  }
                  
                  const dateString = formatDateKey(day);
                  const hasEvents = scheduledPosts[dateString] && scheduledPosts[dateString].length > 0;
                  const isSelected = dateString === selectedDate;
                  
                  return (
                    <div 
                      key={index}
                      onClick={() => setSelectedDate(dateString)}
                      className={`h-24 p-1 border ${isSelected ? 'border-[#6E59A5] ring-1 ring-[#6E59A5]' : 'border-gray-200'} cursor-pointer hover:bg-purple-50 transition-colors`}
                    >
                      <div className="flex flex-col h-full">
                        <div className={`text-right font-medium mb-1 ${day.getDate() === new Date().getDate() && day.getMonth() === new Date().getMonth() ? 'bg-[#6E59A5] text-white rounded-full w-6 h-6 ml-auto flex items-center justify-center' : ''}`}>
                          {day.getDate()}
                        </div>
                        {hasEvents && (
                          <div className="flex-1 overflow-y-auto">
                            {scheduledPosts[dateString].map((post, idx) => (
                              <div 
                                key={idx} 
                                className="text-xs p-1 mb-1 truncate rounded bg-purple-100 text-[#6E59A5] border border-purple-200"
                                title={post.content}
                              >
                                {post.time} - {post.content.substring(0, 15)}...
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Scheduled Post Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Posts for {selectedDate}</span>
                <Button size="sm" className="bg-[#6E59A5] hover:bg-[#5E4A95]">
                  + New Post
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {scheduledPosts[selectedDate] && scheduledPosts[selectedDate].length > 0 ? (
                <div className="space-y-4">
                  {scheduledPosts[selectedDate].map((post) => (
                    <div key={post.id} className="bg-white border border-gray-200 rounded-md p-3 hover:shadow-sm transition-shadow">
                      <div className="flex justify-between items-start">
                        <div className="text-sm font-bold">{post.time}</div>
                        <div className="flex space-x-1">
                          {post.platforms.map((platform) => (
                            <span 
                              key={platform} 
                              className={`w-5 h-5 rounded-full flex items-center justify-center text-white text-xs ${
                                platform === 'twitter' ? 'bg-blue-400' : 
                                platform === 'facebook' ? 'bg-blue-600' : 
                                platform === 'instagram' ? 'bg-pink-500' : 
                                'bg-blue-700'
                              }`}
                            >
                              {platform.charAt(0)}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-800">{post.content}</p>
                      <div className="mt-3 flex justify-end space-x-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No posts scheduled for this day</p>
                  <Button className="mt-4 bg-[#6E59A5] hover:bg-[#5E4A95]">
                    Schedule a Post
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Calendar;
