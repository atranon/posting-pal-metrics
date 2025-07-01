
import { Link } from "react-router-dom";
import SignupForm from "@/components/auth/SignupForm";
import SocialLogin from "@/components/auth/SocialLogin";
import { useState } from "react";
import AuthContainer from "@/components/auth/AuthContainer";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AuthContainer
      title="Create your account"
      subtitle={
        <>
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-[#6E59A5] hover:text-[#5E4A95]">
            Sign in here
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
