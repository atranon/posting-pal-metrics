
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { LogIn, Mail } from "lucide-react";
import { supabase } from "@/lib/supabase";
import PasswordInput from "./PasswordInput";
import EmailField from "./EmailField";
import LoadingButton from "./LoadingButton";
import { Label } from "@/components/ui/label";

const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data?.user) {
        toast({
          title: "Login successful",
          description: "Welcome back to PostingPal!",
        });
        // Store user session
        await supabase.auth.setSession({
          access_token: data.session?.access_token || '',
          refresh_token: data.session?.refresh_token || ''
        });
        navigate("/dashboard");
      }
    } catch (error: any) {
      toast({
        title: "Login failed",
        description: error.message || "Please check your credentials and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <EmailField email={email} setEmail={setEmail} />

      <div>
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <div className="text-sm">
            <Link to="/forgot-password" className="font-medium text-[#6E59A5] hover:text-[#5E4A95]">
              Forgot your password?
            </Link>
          </div>
        </div>
        <div className="mt-1">
          <PasswordInput
            value={password}
            onChange={setPassword}
            placeholder="Enter your password"
          />
        </div>
      </div>

      <div>
        <LoadingButton 
          type="submit" 
          isLoading={isLoading}
          icon={<LogIn className="h-5 w-5" />}
        >
          Sign in
        </LoadingButton>
      </div>
    </form>
  );
};

export default LoginForm;
