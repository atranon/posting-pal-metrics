
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import AuthContainer from "@/components/auth/AuthContainer";
import LoadingButton from "@/components/auth/LoadingButton";
import PasswordInput from "@/components/auth/PasswordInput";
import { Label } from "@/components/ui/label";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Check if we have a session on page load
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event) => {
      if (event === 'PASSWORD_RECOVERY') {
        // Password recovery session exists
        toast({
          title: "Ready to reset your password",
          description: "Please enter your new password below.",
        });
      } else if (event !== 'INITIAL_SESSION' && event !== 'SIGNED_IN') {
        // No valid session, redirect to login
        navigate('/login');
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: "Password too short",
        description: "Password must be at least 6 characters long.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password,
      });

      if (error) throw error;

      toast({
        title: "Password reset successful",
        description: "Your password has been updated. You can now log in with your new password.",
      });
      navigate('/login');
    } catch (error: any) {
      toast({
        title: "Failed to reset password",
        description: error.message || "An error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContainer
      title="Reset your password"
      subtitle="Enter your new password below"
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="password">New Password</Label>
          <div className="mt-1">
            <PasswordInput
              value={password}
              onChange={setPassword}
              placeholder="Enter new password"
            />
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Password must be at least 6 characters long
          </p>
        </div>

        <div>
          <Label htmlFor="confirmPassword">Confirm New Password</Label>
          <div className="mt-1">
            <PasswordInput
              value={confirmPassword}
              onChange={setConfirmPassword}
              placeholder="Confirm new password"
            />
          </div>
        </div>

        <div>
          <LoadingButton 
            type="submit" 
            isLoading={isLoading}
          >
            Reset Password
          </LoadingButton>
        </div>
      </form>
    </AuthContainer>
  );
};

export default ResetPassword;
