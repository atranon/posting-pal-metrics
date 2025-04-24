
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-purple-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Grow your audience with{" "}
            <span className="text-[#6E59A5]">PostingPal</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Schedule, analyze, and engage across all your social networks from one dashboard
          </p>
          <Button className="bg-[#6E59A5] hover:bg-[#5E4A95] text-white px-8 py-6 text-lg">
            Start your 14-day free trial
          </Button>
          <p className="mt-4 text-gray-500 text-sm">No credit card required</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 relative"
        >
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <img 
              src="https://buffer.com/static/illustrations/social-homepage-visuals@2x.png" 
              alt="PostingPal Dashboard Preview"
              className="w-full h-auto" 
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
