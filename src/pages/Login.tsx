
import { Link } from "react-router-dom";
import LoginForm from "@/components/auth/LoginForm";
import SocialLogin from "@/components/auth/SocialLogin";
import { useState } from "react";
import AuthContainer from "@/components/auth/AuthContainer";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AuthContainer
      title="Sign in to your account"
      subtitle={
        <>
          Or{" "}
          <Link to="/signup" className="font-medium text-[#6E59A5] hover:text-[#5E4A95]">
            start your 14-day free trial
          </Link>
        </>
      }
    >
      <LoginForm />
      <SocialLogin isLoading={isLoading} setIsLoading={setIsLoading} />
    </AuthContainer>
  );
};

export default Login;
