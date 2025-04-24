
import { motion } from "framer-motion";
import { Calendar, BarChart2, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Schedule your content across multiple platforms with our AI-powered timing optimizer"
  },
  {
    icon: BarChart2,
    title: "Deep Analytics",
    description: "Get detailed insights about your social media performance and audience engagement"
  },
  {
    icon: MessageCircle,
    title: "Engagement Tools",
    description: "Manage all your social conversations from a single, unified inbox"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">Everything you need to succeed on social</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                {<feature.icon className="w-6 h-6 text-[#6E59A5]" />}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
