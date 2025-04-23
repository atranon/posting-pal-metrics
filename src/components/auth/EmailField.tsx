
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EmailFieldProps {
  email: string;
  setEmail: (value: string) => void;
}

const EmailField = ({ email, setEmail }: EmailFieldProps) => {
  return (
    <div>
      <Label htmlFor="email">Email address</Label>
      <div className="mt-1 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Mail className="h-5 w-5 text-gray-400" />
        </div>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full pl-10"
          placeholder="you@example.com"
        />
      </div>
    </div>
  );
};

export default EmailField;
