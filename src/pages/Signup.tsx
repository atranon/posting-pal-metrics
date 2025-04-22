
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

const Signup = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would create a new user
    // For now, we'll just simulate success and redirect
    toast({
      title: "Account created successfully",
      description: "Welcome to PostingPal! Your 14-day trial has started.",
    });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-3xl font-bold text-center text-[#6E59A5] mb-2">PostingPal</h1>
        <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
          Start your 14-day free trial
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-[#6E59A5] hover:text-[#5E4A95]">
            Sign in instead
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="first-name">First name</Label>
                <div className="mt-1">
                  <Input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    required
                    className="block w-full px-3 py-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="last-name">Last name</Label>
                <div className="mt-1">
                  <Input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    required
                    className="block w-full px-3 py-2"
                  />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email address</Label>
              <div className="mt-1">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full px-3 py-2"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <div className="mt-1">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full px-3 py-2"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Password must be at least 8 characters long
              </p>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-[#6E59A5] focus:ring-[#6E59A5] border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                I agree to the{" "}
                <a href="#" className="font-medium text-[#6E59A5] hover:text-[#5E4A95]">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="font-medium text-[#6E59A5] hover:text-[#5E4A95]">
                  Privacy Policy
                </a>
              </label>
            </div>

            <div>
              <Button type="submit" className="w-full bg-[#6E59A5] hover:bg-[#5E4A95]">
                Create account
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or sign up with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <Button variant="outline" className="w-full">
                  <svg className="h-5 w-5 mr-2" fill="#4285F4" viewBox="0 0 24 24">
                    <path d="M12.545 10.239v3.818h5.556c-.23 1.438-.926 2.653-1.969 3.46v2.869h3.183c1.862-1.708 2.938-4.215 2.938-7.194 0-.692-.063-1.36-.183-2.002l-9.525.049z" />
                    <path d="M5.61 14.086l-2.173 1.677c1.392 2.755 4.264 4.649 7.565 4.649 2.292 0 4.219-.755 5.624-2.052l-3.183-2.469c-.891.611-2.049.941-3.394.941-2.594 0-4.791-1.754-5.572-4.113l-2.125.124 2.058 1.243z" />
                    <path d="M5.609 9.458c-.203-.612-.319-1.269-.319-1.958 0-.69.116-1.347.319-1.957L3.28 3.936l-.263.088C1.779 5.141 1 6.986 1 9c0 2.014.779 3.856 2.117 5.243l2.492-2.785z" />
                    <path d="M12.002 4.65c1.618 0 3.074.568 4.214 1.583L19 3.366C17.172 1.73 14.786.75 12.002.75 7.603.75 3.947 3.352 2.918 6.977l2.672 2.078c.786-2.36 2.981-4.068 5.574-4.068" />
                  </svg>
                  Google
                </Button>
              </div>
              <div>
                <Button variant="outline" className="w-full">
                  <svg className="h-5 w-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
