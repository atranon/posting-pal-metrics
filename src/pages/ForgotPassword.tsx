
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { Mail, ArrowLeft } from "lucide-react";
import { supabase } from "@/lib/supabase";

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Password reset email sent",
        description: "Check your email for a link to reset your password.",
      });
    } catch (error: any) {
      toast({
        title: "Failed to send reset email",
        description: error.message || "An error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-3xl font-bold text-center text-[#6E59A5] mb-2">PostingPal</h1>
        <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
          {isSubmitted ? "Check your email" : "Reset your password"}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {isSubmitted 
            ? "We've sent a password reset link to your email" 
            : "Enter your email address and we'll send you a link to reset your password"}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {isSubmitted ? (
            <div className="space-y-6">
              <p className="text-center text-gray-700">
                If you don't see the email in your inbox, check your spam folder.
              </p>
              <div>
                <Button 
                  type="button" 
                  className="w-full bg-[#6E59A5] hover:bg-[#5E4A95]"
                  onClick={() => setIsSubmitted(false)}
                >
                  Try again
                </Button>
              </div>
              <div className="text-center">
                <Link 
                  to="/login" 
                  className="flex items-center justify-center text-sm font-medium text-[#6E59A5] hover:text-[#5E4A95]"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to login
                </Link>
              </div>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
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
                <Button 
                  type="submit" 
                  className="w-full bg-[#6E59A5] hover:bg-[#5E4A95]"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  ) : (
                    "Send reset link"
                  )}
                </Button>
              </div>

              <div className="text-center">
                <Link 
                  to="/login" 
                  className="flex items-center justify-center text-sm font-medium text-[#6E59A5] hover:text-[#5E4A95]"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to login
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
