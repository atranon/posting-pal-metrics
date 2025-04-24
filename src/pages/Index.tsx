import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";

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

      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
      </main>

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
