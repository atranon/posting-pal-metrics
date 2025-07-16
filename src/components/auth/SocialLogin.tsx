
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

interface SocialLoginProps {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const SocialLogin = ({ isLoading, setIsLoading }: SocialLoginProps) => {
  const handleSocialLogin = async (provider: "google" | "facebook") => {
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
        title: "Social login failed",
        description: error.message || "Could not connect to the provider. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => handleSocialLogin("google")}
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
          onClick={() => handleSocialLogin("facebook")}
          disabled={isLoading}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-2 text-[#1877F2]">
            <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
          Facebook
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
