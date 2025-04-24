
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { UserPlus } from "lucide-react";
import { supabase } from "@/lib/supabase";
import PasswordInput from "./PasswordInput";
import NameFields from "./NameFields";
import EmailField from "./EmailField";
import TermsAgreement from "./TermsAgreement";
import LoadingButton from "./LoadingButton";

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
      <NameFields
        firstName={firstName}
        lastName={lastName}
        setFirstName={setFirstName}
        setLastName={setLastName}
      />

      <EmailField email={email} setEmail={setEmail} />

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

      <TermsAgreement agreed={agreedToTerms} setAgreed={setAgreedToTerms} />

      <div>
        <LoadingButton 
          type="submit" 
          isLoading={isLoading}
          icon={<UserPlus className="h-5 w-5" />}
        >
          Create account
        </LoadingButton>
      </div>
    </form>
  );
};

export default SignupForm;
