
import { useState } from "react";
import { Link } from "react-router-dom";
import SignupForm from "@/components/auth/SignupForm";
import SocialLogin from "@/components/auth/SocialLogin";
import AuthContainer from "@/components/auth/AuthContainer";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

  return (
    <AuthContainer
      title="Start your 14-day free trial"
      subtitle={
        <>
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-[#6E59A5] hover:text-[#5E4A95]">
            Sign in instead
          </Link>
        </>
      }
    >
      <SignupForm />
      <SocialLogin isLoading={isLoading} setIsLoading={setIsLoading} />
    </AuthContainer>
  );
};

export default Signup;
