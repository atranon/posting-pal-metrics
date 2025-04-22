
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#6E59A5]">PostingPal</h1>
            
            <NavigationMenu className="hidden md:flex ml-8">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-[#6E59A5]">
                    Features
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-50 to-purple-100 p-6 no-underline outline-none focus:shadow-md"
                            href="#"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-[#6E59A5]">
                              All-in-One Platform
                            </div>
                            <p className="text-sm leading-tight text-gray-600">
                              Manage all your social media accounts in one place
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-50 focus:bg-purple-50">
                          <div className="text-sm font-medium leading-none text-[#6E59A5]">Publishing</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Schedule and publish your content across platforms
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-50 focus:bg-purple-50">
                          <div className="text-sm font-medium leading-none text-[#6E59A5]">Analytics</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Measure performance and track engagement
                          </p>
                        </a>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-[#6E59A5]">
                    Pricing
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-50 focus:bg-purple-50">
                          <div className="text-sm font-medium leading-none text-[#6E59A5]">Free</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Get started with basic features
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-50 focus:bg-purple-50">
                          <div className="text-sm font-medium leading-none text-[#6E59A5]">Pro</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Advanced features for growing businesses
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-50 focus:bg-purple-50">
                          <div className="text-sm font-medium leading-none text-[#6E59A5]">Business</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Enterprise-grade tools for teams
                          </p>
                        </a>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#" className="text-gray-700 hover:text-[#6E59A5] px-4 py-2">
                    Resources
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost" className="text-gray-700 hover:text-[#6E59A5]">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild className="bg-[#6E59A5] hover:bg-[#5E4A95] text-white">
              <Link to="/signup">Get started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-purple-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Grow your audience with <span className="text-[#6E59A5]">PostingPal</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The all-in-one platform to schedule posts, analyze performance, and engage with your audience across all your social networks.
          </p>
          <Button className="bg-[#6E59A5] hover:bg-[#5E4A95] text-white px-8 py-6 text-lg rounded-md">
            Start your 14-day free trial
          </Button>
          <p className="mt-4 text-gray-500 text-sm">No credit card required</p>
          
          <div className="mt-16 bg-white shadow-xl rounded-lg p-6 max-w-4xl mx-auto">
            <img 
              src="https://buffer.com/static/illustrations/social-homepage-visuals@2x.png" 
              alt="PostingPal Dashboard" 
              className="w-full h-auto" 
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Everything you need to succeed on social
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#6E59A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Publishing</h3>
              <p className="text-gray-600">
                Plan and publish your content for Instagram, Facebook, Twitter, Pinterest, and LinkedIn, all from one dashboard.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#6E59A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Analytics</h3>
              <p className="text-gray-600">
                Analyze performance and create reports with easy-to-understand data visualizations.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#6E59A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Engagement</h3>
              <p className="text-gray-600">
                Respond to comments and messages across all your social channels from one dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to grow your audience?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using PostingPal to manage their social media presence.
          </p>
          <Button className="bg-[#6E59A5] hover:bg-[#5E4A95] text-white px-8 py-6 text-lg rounded-md">
            Start your free trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">PostingPal</h3>
              <p className="text-gray-600 mb-4">
                The all-in-one social media management platform.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#6E59A5]">Publishing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#6E59A5]">Analytics</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#6E59A5]">Engagement</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#6E59A5]">Start Page</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#6E59A5]">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#6E59A5]">Content Library</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#6E59A5]">Guides</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#6E59A5]">Tools</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#6E59A5]">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#6E59A5]">Customers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#6E59A5]">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#6E59A5]">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
            <p>© 2025 PostingPal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
