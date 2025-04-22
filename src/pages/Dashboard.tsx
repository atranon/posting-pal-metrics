
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Calendar, ChartBar, MessageSquare, Settings, User } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("queued");
  
  // Mock data for the social media posts
  const posts = [
    {
      id: 1,
      content: "Check out our latest product release! #innovation #tech",
      image: "https://buffer.com/static/illustrations/social-homepage-visuals@2x.png",
      scheduled: "2025-04-23T09:00:00",
      platforms: ["twitter", "linkedin", "facebook"],
      status: "queued"
    },
    {
      id: 2,
      content: "Join us for an exciting webinar on social media strategies tomorrow at 3 PM EST. Register now at the link in bio!",
      image: null,
      scheduled: "2025-04-24T15:00:00",
      platforms: ["instagram", "facebook"],
      status: "queued"
    },
    {
      id: 3,
      content: "How our team embraces remote work culture while staying connected and productive. Read our blog post:",
      image: "https://buffer.com/static/illustrations/social-homepage-visuals@2x.png",
      scheduled: "2025-04-25T11:30:00",
      platforms: ["twitter", "linkedin"],
      status: "queued"
    },
    {
      id: 4,
      content: "We're proud to announce our partnership with @techcorp to bring you better solutions! #partnership",
      image: null,
      scheduled: "2025-04-22T13:15:00",
      platforms: ["twitter", "facebook"],
      status: "sent"
    },
    {
      id: 5,
      content: "Our latest case study shows a 40% increase in customer satisfaction after implementing our new approach. Learn more:",
      image: "https://buffer.com/static/illustrations/social-homepage-visuals@2x.png",
      scheduled: "2025-04-21T10:00:00",
      platforms: ["linkedin", "twitter", "facebook"],
      status: "sent"
    }
  ];

  const filteredPosts = posts.filter(post => post.status === activeTab);

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
                  <Link to="/dashboard" className="px-4 py-2 text-[#6E59A5] font-medium bg-purple-50 rounded-md">
                    Publishing
                  </Link>
                </li>
                <li>
                  <Link to="/analytics" className="px-4 py-2 text-gray-700 hover:text-[#6E59A5] hover:bg-purple-50 rounded-md">
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link to="/calendar" className="px-4 py-2 text-gray-700 hover:text-[#6E59A5] hover:bg-purple-50 rounded-md">
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
            <Menubar className="border-none">
              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer">
                  <User className="h-4 w-4" />
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Profile</MenubarItem>
                  <MenubarItem>
                    <Link to="/settings">Settings</Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link to="/login">Logout</Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64">
            <Card>
              <CardContent className="p-4">
                <nav className="space-y-1">
                  <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-purple-50 text-[#6E59A5]">
                    <span className="truncate">Posts</span>
                  </a>
                  <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-purple-50 hover:text-[#6E59A5]">
                    <span className="truncate">Channels</span>
                  </a>
                  <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-purple-50 hover:text-[#6E59A5]">
                    <span className="truncate">Campaigns</span>
                  </a>
                </nav>
                
                <div className="mt-8">
                  <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Connected Accounts
                  </h3>
                  <div className="mt-2 space-y-1">
                    <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-purple-50 hover:text-[#6E59A5]">
                      <span className="w-6 h-6 mr-2 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                        f
                      </span>
                      <span className="truncate">Facebook Page</span>
                    </a>
                    <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-purple-50 hover:text-[#6E59A5]">
                      <span className="w-6 h-6 mr-2 rounded-full bg-blue-400 flex items-center justify-center text-white text-xs">
                        t
                      </span>
                      <span className="truncate">Twitter</span>
                    </a>
                    <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-purple-50 hover:text-[#6E59A5]">
                      <span className="w-6 h-6 mr-2 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs">
                        i
                      </span>
                      <span className="truncate">Instagram</span>
                    </a>
                    <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-purple-50 hover:text-[#6E59A5]">
                      <span className="w-6 h-6 mr-2 rounded-full bg-blue-700 flex items-center justify-center text-white text-xs">
                        l
                      </span>
                      <span className="truncate">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Content</CardTitle>
                  <CardDescription>Manage your social media posts</CardDescription>
                </div>
                <Button className="bg-[#6E59A5] hover:bg-[#5E4A95]">
                  Create Post
                </Button>
              </CardHeader>
              <CardContent>
                <div className="border-b border-gray-200">
                  <nav className="flex space-x-8" aria-label="Tabs">
                    <button
                      onClick={() => setActiveTab("queued")}
                      className={`px-1 py-4 text-sm font-medium border-b-2 ${
                        activeTab === "queued"
                          ? "border-[#6E59A5] text-[#6E59A5]"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Queued ({posts.filter(p => p.status === "queued").length})
                    </button>
                    <button
                      onClick={() => setActiveTab("sent")}
                      className={`px-1 py-4 text-sm font-medium border-b-2 ${
                        activeTab === "sent"
                          ? "border-[#6E59A5] text-[#6E59A5]"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Sent ({posts.filter(p => p.status === "sent").length})
                    </button>
                  </nav>
                </div>

                <div className="mt-6 space-y-4">
                  {filteredPosts.map((post) => (
                    <div key={post.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <p className="text-gray-800">{post.content}</p>
                          {post.image && (
                            <div className="mt-2 w-24 h-24 bg-gray-100 rounded overflow-hidden">
                              <img src={post.image} alt="Post visual" className="w-full h-full object-cover" />
                            </div>
                          )}
                          <div className="mt-4 flex items-center justify-between">
                            <div className="flex space-x-2">
                              {post.platforms.map((platform) => (
                                <span 
                                  key={platform} 
                                  className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs ${
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
                            <div className="text-sm text-gray-500">
                              {new Date(post.scheduled).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          {post.status === "queued" && (
                            <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                              Delete
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
