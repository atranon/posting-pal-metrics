
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { ChartBar, MessageSquare, User, TrendingUp, TrendingDown } from "lucide-react";

const Analytics = () => {
  // Sample data for the charts
  const engagementData = [
    { name: 'Apr 16', twitter: 40, facebook: 24, instagram: 60, linkedin: 33 },
    { name: 'Apr 17', twitter: 30, facebook: 28, instagram: 55, linkedin: 45 },
    { name: 'Apr 18', twitter: 20, facebook: 26, instagram: 67, linkedin: 39 },
    { name: 'Apr 19', twitter: 27, facebook: 32, instagram: 58, linkedin: 43 },
    { name: 'Apr 20', twitter: 18, facebook: 35, instagram: 69, linkedin: 48 },
    { name: 'Apr 21', twitter: 23, facebook: 30, instagram: 72, linkedin: 50 },
    { name: 'Apr 22', twitter: 34, facebook: 38, instagram: 65, linkedin: 52 },
  ];

  const followerGrowthData = [
    { name: 'Apr 16', twitter: 1200, facebook: 1900, instagram: 2400, linkedin: 1000 },
    { name: 'Apr 17', twitter: 1250, facebook: 1950, instagram: 2500, linkedin: 1050 },
    { name: 'Apr 18', twitter: 1300, facebook: 1970, instagram: 2600, linkedin: 1100 },
    { name: 'Apr 19', twitter: 1350, facebook: 2000, instagram: 2700, linkedin: 1150 },
    { name: 'Apr 20', twitter: 1400, facebook: 2050, instagram: 2800, linkedin: 1200 },
    { name: 'Apr 21', twitter: 1450, facebook: 2100, instagram: 2900, linkedin: 1250 },
    { name: 'Apr 22', twitter: 1500, facebook: 2150, instagram: 3000, linkedin: 1300 },
  ];

  // Configuration for the chart colors
  const chartConfig = {
    twitter: { 
      label: "Twitter",
      theme: { light: "#1DA1F2", dark: "#1DA1F2" } 
    },
    facebook: { 
      label: "Facebook",
      theme: { light: "#4267B2", dark: "#4267B2" } 
    },
    instagram: { 
      label: "Instagram",
      theme: { light: "#E1306C", dark: "#E1306C" } 
    },
    linkedin: { 
      label: "LinkedIn",
      theme: { light: "#0077B5", dark: "#0077B5" } 
    }
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
                  <Link to="/analytics" className="px-4 py-2 text-[#6E59A5] font-medium bg-purple-50 rounded-md">
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
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">Track and analyze your social media performance</p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Followers</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8,450</div>
              <p className="text-xs text-green-500 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" /> 
                +5.25% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Average Engagement</CardTitle>
              <ChartBar className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.6%</div>
              <p className="text-xs text-green-500 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" /> 
                +0.8% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
              <ChartBar className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">142</div>
              <p className="text-xs text-green-500 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" /> 
                +12 from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Link Clicks</CardTitle>
              <TrendingDown className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,863</div>
              <p className="text-xs text-red-500 flex items-center mt-1">
                <TrendingDown className="h-3 w-3 mr-1" /> 
                -2.3% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Engagement Rate</CardTitle>
              <CardDescription>Engagement rates across all social networks</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-80">
                <LineChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line type="monotone" dataKey="twitter" stroke="var(--color-twitter)" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="facebook" stroke="var(--color-facebook)" />
                  <Line type="monotone" dataKey="instagram" stroke="var(--color-instagram)" />
                  <Line type="monotone" dataKey="linkedin" stroke="var(--color-linkedin)" />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Follower Growth</CardTitle>
              <CardDescription>Growth in followers over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-80">
                <BarChart data={followerGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="twitter" fill="var(--color-twitter)" />
                  <Bar dataKey="facebook" fill="var(--color-facebook)" />
                  <Bar dataKey="instagram" fill="var(--color-instagram)" />
                  <Bar dataKey="linkedin" fill="var(--color-linkedin)" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
