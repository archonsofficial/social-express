import { FaRocket, FaRobot, FaCalendarCheck, FaRetweet, FaUserTie, FaCommentDots, FaChartLine } from 'react-icons/fa';
import React from 'react';

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    title: 'All-in-One Dashboard',
    description: 'Manage all your social platforms in one unified place.',
    icon: <FaRocket className="text-indigo-500 w-8 h-8" />,
  },
  {
    title: 'AI Content Creation',
    description: 'Generate captions, ideas, and hashtags in your tone.',
    icon: <FaRobot className="text-indigo-500 w-8 h-8" />,
  },
  {
    title: 'Smart Scheduling',
    description: 'Auto-schedule posts for peak engagement times.',
    icon: <FaCalendarCheck className="text-indigo-500 w-8 h-8" />,
  },
  {
    title: 'Content Repurposing',
    description: 'Convert one post into many platform formats.',
    icon: <FaRetweet className="text-indigo-500 w-8 h-8" />,
  },
  {
    title: 'Persona Consistency',
    description: 'Maintain your unique brand voice across content.',
    icon: <FaUserTie className="text-indigo-500 w-8 h-8" />,
  },
  
  {
    title: 'Smart Analytics',
    description: 'Unlock growth insights and personalized tips.',
    icon: <FaChartLine className="text-indigo-500 w-8 h-8" />,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-indigo-400">Current Features</h2>
        <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
          Powerful tools to help you grow, manage, and elevate your digital presence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-indigo-500/50 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
