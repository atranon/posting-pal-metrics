
interface TermsAgreementProps {
  agreed: boolean;
  setAgreed: (value: boolean) => void;
}

const TermsAgreement = ({ agreed, setAgreed }: TermsAgreementProps) => {
  return (
    <div className="flex items-center">
      <input
        id="terms"
        name="terms"
        type="checkbox"
        checked={agreed}
        onChange={(e) => setAgreed(e.target.checked)}
        className="h-4 w-4 text-[#6E59A5] focus:ring-[#6E59A5] border-gray-300 rounded"
      />
      <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
        I agree to the{" "}
        <a href="#" className="font-medium text-[#6E59A5] hover:text-[#5E4A95]">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="font-medium text-[#6E59A5] hover:text-[#5E4A95]">
          Privacy Policy
        </a>
      </label>
    </div>
  );
};

export default TermsAgreement;
