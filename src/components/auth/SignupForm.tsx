
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { Mail, UserPlus, User } from "lucide-react";
import { supabase } from "@/lib/supabase";
import PasswordInput from "./PasswordInput";

const SignupForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  return (
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
        <div className="mt-1">
          <PasswordInput
            value={password}
            onChange={setPassword}
            placeholder="Create a password"
          />
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
  );
};

export default SignupForm;

