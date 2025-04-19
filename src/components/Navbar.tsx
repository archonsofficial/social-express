import { FaUserCircle, FaCaretDown } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-3xl font-semibold text-indigo-600">
            BrandBrainAI
          </div>

          {/* Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="/dashboard" className="text-gray-300 hover:text-white">Dashboard</a>
            <a href="/createcontent" className="text-gray-300 hover:text-white">Content</a>
            <a href="#scheduler" className="text-gray-300 hover:text-white">Scheduler</a>
            <a href="#analytics" className="text-gray-300 hover:text-white">Analytics</a>

            {/* Dropdown for More */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-white flex items-center">
                More <FaCaretDown className="ml-2" />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg hidden group-hover:block">
                <a href="#repurpose" className="block px-4 py-2 text-sm hover:bg-indigo-600">Repurpose</a>
                <a href="#brand" className="block px-4 py-2 text-sm hover:bg-indigo-600">Brand</a>
                <a href="#risk" className="block px-4 py-2 text-sm hover:bg-indigo-600">Risk</a>
                <a href="#help" className="block px-4 py-2 text-sm hover:bg-indigo-600">Help</a>
                <a href="#settings" className="block px-4 py-2 text-sm hover:bg-indigo-600">Settings</a>
              </div>
            </div>
          </div>

          {/* Signup and Login Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="/signup"
              className="text-indigo-400 hover:text-white font-semibold py-2 px-4 rounded-md border border-indigo-500 hover:bg-indigo-500 transition duration-300"
            >
              Sign Up
            </a>
            

            {/* User Profile Icon */}
            <a href="#profile" className="text-gray-300 hover:text-white">
              <FaUserCircle className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
