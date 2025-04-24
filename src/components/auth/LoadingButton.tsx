
import React from "react";
import { Button } from "@/components/ui/button";

interface LoadingButtonProps {
  isLoading: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

const LoadingButton = ({
  isLoading,
  children,
  icon,
  className = "",
  type = "button",
  onClick,
  disabled = false,
}: LoadingButtonProps) => {
  return (
    <Button 
      type={type} 
      className={`w-full bg-[#6E59A5] hover:bg-[#5E4A95] flex items-center justify-center ${className}`}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
      ) : (
        icon && <span className="mr-2">{icon}</span>
      )}
      {children}
    </Button>
  );
};

export default LoadingButton;
