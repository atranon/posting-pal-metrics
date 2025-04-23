import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { Eye, EyeOff, UserPlus, Mail, Lock, User } from "lucide-react";
import { supabase } from "@/lib/supabase";

const Signup = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreedToTerms) {
      toast({
        title: "Terms agreement required",
        description: "You must agree to the Terms of Service and Privacy Policy to create an account.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
          },
        },
      });

      if (error) throw error;

      if (data?.user?.identities?.length === 0) {
        toast({
          title: "Email already registered",
          description: "This email is already registered. Please sign in instead.",
          variant: "destructive",
        });
        return;
      }

      if (data?.user?.identities?.[0]?.identity_data) {
        toast({
          title: "Account created successfully",
          description: "Welcome to PostingPal! Your 14-day trial has started.",
        });
        navigate("/dashboard");
      } else {
        toast({
          title: "Confirmation email sent",
          description: "Please check your email to confirm your account.",
        });
        navigate("/login");
      }
    } catch (error: any) {
      toast({
        title: "Signup failed",
        description: error.message || "Could not create your account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignup = async (provider: "google" | "facebook") => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
        },
      });

      if (error) throw error;
    } catch (error: any) {
      toast({
        title: "Social signup failed",
        description: error.message || "Could not connect to the provider. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
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
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="block w-full pl-10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="last-name">Last name</Label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="block w-full pl-10"
                  />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email address</Label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-10"
                />
                <div 
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Password must be at least 6 characters long
              </p>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
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
              <Button 
                type="submit" 
                className="w-full bg-[#6E59A5] hover:bg-[#5E4A95] flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                ) : (
                  <UserPlus className="h-5 w-5 mr-2" />
                )}
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
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => handleSocialSignup("google")}
                disabled={isLoading}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-2">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.45h3.58c2.1-1.96 3.42-4.85 3.42-8.27z"/>
                  <path fill="#34A853" d="M12 23c3 0 5.52-1 7.36-2.67l-3.58-2.45c-1 .66-2.26 1.04-3.78 1.04-2.87 0-5.3-1.95-6.18-4.56H2.18v2.52C3.97 20.29 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.37c-.22-.67-.35-1.39-.35-2.13s.13-1.46.35-2.13V7.59H2.18C1.43 9.03 1 10.63 1 12.5c0 1.87.43 3.47 1.18 4.91l3.66-2.54z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.52 2.08 15 1 12 1 7.7 1 3.97 3.71 2.18 7.59l3.66 2.54c.88-2.61 3.3-4.56 6.18-4.56z"/>
                </svg>
                Google
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => handleSocialSignup("facebook")}
                disabled={isLoading}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-2 text-[#1877F2]">
                  <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
