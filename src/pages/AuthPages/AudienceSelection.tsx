import { useState } from 'react';
import {
  FaBasketballBall,
  FaBookOpen,
  FaShoppingCart,
  FaBusinessTime,
  FaLaptopCode,
  FaHeartbeat,
  FaFilm,
  FaPlane,
  FaUtensils,
  FaPaintBrush,
  FaMusic,
} from 'react-icons/fa';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';

export default function AudienceSelection() {
  const [selectedAudiences, setSelectedAudiences] = useState<string[]>([]);

  const handleAudienceSelect = (audience: string) => {
    setSelectedAudiences(prev =>
      prev.includes(audience)
        ? prev.filter(item => item !== audience)
        : [...prev, audience]
    );
  };

  const audienceOptions = [
    {
      name: 'Sports',
      icon: <FaBasketballBall className="text-5xl text-white mx-auto mb-4" />,
      gradient: 'from-green-400 to-green-500 hover:from-green-500 hover:to-green-400',
      description: 'For athletes, fitness lovers, and sports enthusiasts.',
    },
    {
      name: 'Education',
      icon: <FaBookOpen className="text-5xl text-white mx-auto mb-4" />,
      gradient: 'from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-400',
      description: 'For students, educators, and lifelong learners.',
    },
    {
      name: 'Commerce',
      icon: <FaShoppingCart className="text-5xl text-white mx-auto mb-4" />,
      gradient: 'from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400',
      description: 'For businesses, e-commerce platforms, and retailers.',
    },
    {
      name: 'Business',
      icon: <FaBusinessTime className="text-5xl text-white mx-auto mb-4" />,
      gradient: 'from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-400',
      description: 'For entrepreneurs, startups, and corporate professionals.',
    },
    {
      name: 'Technology',
      icon: <FaLaptopCode className="text-5xl text-white mx-auto mb-4" />,
      gradient: 'from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-400',
      description: 'For developers, tech enthusiasts, and innovators.',
    },
    {
      name: 'Healthcare',
      icon: <FaHeartbeat className="text-5xl text-white mx-auto mb-4" />,
      gradient: 'from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-500',
      description: 'For medical professionals, clinics, and health-conscious individuals.',
    },
    {
      name: 'Entertainment',
      icon: <FaFilm className="text-5xl text-white mx-auto mb-4" />,
      gradient: 'from-red-400 to-red-500 hover:from-red-500 hover:to-red-400',
      description: 'For movie lovers, content creators, and music fans.',
    },
    {
      name: 'Travel',
      icon: <FaPlane className="text-5xl text-white mx-auto mb-4" />,
      gradient: 'from-indigo-400 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400',
      description: 'For wanderers, travelers, and explorers of all kinds.',
    },
    {
      name: 'Food & Drink',
      icon: <FaUtensils className="text-5xl text-white mx-auto mb-4" />,
      gradient: 'from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-400',
      description: 'For chefs, foodies, and beverage lovers.',
    },
    {
      name: 'Art & Culture',
      icon: <FaPaintBrush className="text-5xl text-white mx-auto mb-4" />,
      gradient: 'from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-400',
      description: 'For artists, designers, and culture enthusiasts.',
    },
    {
      name: 'Music',
      icon: <FaMusic className="text-5xl text-white mx-auto mb-4" />,
      gradient: 'from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-600',
      description: 'For musicians, music lovers, and performers.',
    },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-800 min-h-screen py-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-indigo-700 mb-8">
          Choose Your Target Audience
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Select multiple audience categories that suit your platform’s target demographic. Choose as many as you'd like!
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {audienceOptions.map(({ name, icon, gradient, description }) => {
            const isSelected = selectedAudiences.includes(name);
            return (
              <div
                key={name}
                onClick={() => handleAudienceSelect(name)}
                className={`relative bg-gradient-to-t ${gradient} transition-all duration-300 rounded-lg p-6 text-center cursor-pointer shadow-lg hover:shadow-xl`}
              >
                {isSelected && (
                  <div className="absolute top-3 right-3 bg-white rounded-full shadow-md p-1">
                    <IoCheckmarkCircleSharp className="text-green-500 text-3xl" />
                  </div>
                )}
                <div className={`transition-transform duration-300 ${isSelected ? 'scale-105 opacity-90' : ''}`}>
                  {icon}
                  <h3 className="text-2xl font-semibold text-white">{name}</h3>
                  <p className="text-gray-100 mt-2">{description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Button */}
        {selectedAudiences.length > 0 && (
          <div className="mt-12">
            <a href="/">
            <button
              onClick={() => {
                console.log('Selected Audiences:', selectedAudiences);
              }}
              className="bg-indigo-700 hover:bg-indigo-800 text-white text-lg px-6 py-3 rounded-full shadow-md transition transform hover:scale-105 active:scale-95"
            >
              Next →
            </button>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
