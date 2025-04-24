
import { Link } from "react-router-dom";
import LoginForm from "@/components/auth/LoginForm";
import SocialLogin from "@/components/auth/SocialLogin";
import { useState } from "react";
import AuthContainer from "@/components/auth/AuthContainer";
import { supabase } from "@/lib/supabaseClient";

const handleLogin = async (email: string, password: string) => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    alert("Login failed: " + error.message)
  } else {
    console.log("Logged in!")
    // You can also redirect to /dashboard or show a success message
  }
}

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
