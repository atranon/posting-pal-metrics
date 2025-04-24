
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { ArrowLeft } from "lucide-react";
import { supabase } from "@/lib/supabase";
import EmailField from "@/components/auth/EmailField";
import LoadingButton from "@/components/auth/LoadingButton";
import AuthContainer from "@/components/auth/AuthContainer";

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

  const subtitle = isSubmitted 
    ? "We've sent a password reset link to your email" 
    : "Enter your email address and we'll send you a link to reset your password";

  return (
    <AuthContainer 
      title={isSubmitted ? "Check your email" : "Reset your password"} 
      subtitle={subtitle}
    >
      {isSubmitted ? (
        <div className="space-y-6">
          <p className="text-center text-gray-700">
            If you don't see the email in your inbox, check your spam folder.
          </p>
          <div>
            <LoadingButton 
              type="button" 
              isLoading={false}
              onClick={() => setIsSubmitted(false)}
            >
              Try again
            </LoadingButton>
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
          <EmailField email={email} setEmail={setEmail} />

          <div>
            <LoadingButton 
              type="submit" 
              isLoading={isLoading}
            >
              Send reset link
            </LoadingButton>
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
    </AuthContainer>
  );
};

export default ForgotPassword;
