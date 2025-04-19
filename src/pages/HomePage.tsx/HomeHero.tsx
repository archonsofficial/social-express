
// import PrismLogohero from 'path-to-your-image' // Replace with actual image path
// import GridBkg from 'path-to-your-background-image' // Replace with actual image path
import { FaMagic, FaBolt, FaChartLine } from 'react-icons/fa';



function HomeHero() {
  return (
    <section className="bg-gray-900 text-white min-h-[90vh] flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto text-center flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1 text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Your AI-Powered<br />
            <span className="text-indigo-500">Content Command Center</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-xl">
            Automate your social media game – from ideas to scheduling to analytics – all in one place. Let your digital persona thrive, effortlessly.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a href="#get-started" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition">
              Get Started Free
            </a>
            <a href="#demo" className="border border-gray-500 hover:border-indigo-500 text-gray-300 hover:text-white py-3 px-6 rounded-xl transition">
              Watch Demo
            </a>
          </div>

          {/* Perks */}
          <div className="mt-10 flex flex-col sm:flex-row gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <FaMagic className="text-indigo-500" /> AI-Generated Captions
            </div>
            <div className="flex items-center gap-2">
              <FaBolt className="text-indigo-500" /> Smart Scheduling
            </div>
            <div className="flex items-center gap-2">
              <FaChartLine className="text-indigo-500" /> Personalized Analytics
            </div>
          </div>
        </div>

        {/* Right Image / Visual */}
        <div className="flex-1 relative">
          <div className="w-full h-[400px] bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col justify-center items-center text-center">
            <p className="text-indigo-400 text-lg font-semibold mb-2">“Post smarter, not harder.”</p>
            <p className="text-gray-300">Your next viral post is just one click away 💥</p>
            <div className="mt-6 w-full h-32 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur-md opacity-30 absolute -z-10 top-12" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
