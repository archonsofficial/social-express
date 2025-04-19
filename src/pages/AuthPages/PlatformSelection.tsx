import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaPinterest } from 'react-icons/fa';

export default function PlatformSelection() {
  return (
    <section className="bg-gray-100 text-gray-800 h-fit py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-4 sm:mb-6">
          Choose Your Platform
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-10">
          Connect with your favorite social media platforms and streamline your experience.
        </p>

        {/* Platform Selection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Instagram Card */}
          <a href="/audienceSelection">
            <div className="bg-white hover:bg-indigo-100 transition-all duration-300 rounded-lg p-4 sm:p-6 text-center cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-105">
              <FaInstagram className="text-5xl sm:text-6xl text-indigo-600 mb-3 sm:mb-4 mx-auto" />
              <h3 className="text-lg sm:text-xl font-semibold">Instagram</h3>
              <p className="text-sm sm:text-base text-gray-500 mt-1 sm:mt-2">
                Perfect for photo sharing and stories.
              </p>
            </div>
          </a>

          {/* Facebook Card */}
          <div className="bg-white hover:bg-indigo-100 transition-all duration-300 rounded-lg p-4 sm:p-6 text-center cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-105">
            <FaFacebook className="text-5xl sm:text-6xl text-blue-600 mb-3 sm:mb-4 mx-auto" />
            <h3 className="text-lg sm:text-xl font-semibold">Facebook</h3>
            <p className="text-sm sm:text-base text-gray-500 mt-1 sm:mt-2">
              Connect with friends and communities.
            </p>
          </div>

          {/* Twitter Card */}
          <div className="bg-white hover:bg-indigo-100 transition-all duration-300 rounded-lg p-4 sm:p-6 text-center cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-105">
            <FaTwitter className="text-5xl sm:text-6xl text-blue-400 mb-3 sm:mb-4 mx-auto" />
            <h3 className="text-lg sm:text-xl font-semibold">Twitter</h3>
            <p className="text-sm sm:text-base text-gray-500 mt-1 sm:mt-2">
              Engage in real-time discussions and news.
            </p>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-white hover:bg-indigo-100 transition-all duration-300 rounded-lg p-4 sm:p-6 text-center cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-105">
            <FaLinkedin className="text-5xl sm:text-6xl text-blue-700 mb-3 sm:mb-4 mx-auto" />
            <h3 className="text-lg sm:text-xl font-semibold">LinkedIn</h3>
            <p className="text-sm sm:text-base text-gray-500 mt-1 sm:mt-2">
              Professional networking and career building.
            </p>
          </div>

          {/* Pinterest Card */}
          <div className="bg-white hover:bg-indigo-100 transition-all duration-300 rounded-lg p-4 sm:p-6 text-center cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-105">
            <FaPinterest className="text-5xl sm:text-6xl text-red-600 mb-3 sm:mb-4 mx-auto" />
            <h3 className="text-lg sm:text-xl font-semibold">Pinterest</h3>
            <p className="text-sm sm:text-base text-gray-500 mt-1 sm:mt-2">
              Discover and save creative ideas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
