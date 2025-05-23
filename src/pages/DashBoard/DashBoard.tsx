import { useState } from 'react';
import PostGenerator from "../../components/PostGenerator.tsx";

const socialPlatforms = [
  { name: 'Instagram', icon: '📸', data: { followers: 15000, likes: 12000, comments: 350, posts: 120, engagement: 'High' } },
  { name: 'Facebook', icon: '📘', data: { followers: 20000, likes: 15000, comments: 500, posts: 150, engagement: 'Medium' } },
  { name: 'Twitter', icon: '🐦', data: { followers: 10000, likes: 8000, comments: 200, posts: 90, engagement: 'Low' } },
  { name: 'LinkedIn', icon: '💼', data: { followers: 5000, likes: 4000, comments: 150, posts: 80, engagement: 'Medium' } },
];

export default function Dashboard() {
  const [selectedPlatform, setSelectedPlatform] = useState('Instagram'); // Default to Instagram

  const selectedData = socialPlatforms.find(platform => platform.name === selectedPlatform)?.data;

  // AI-generated suggestions based on engagement
  const aiSuggestions = {
    High: "You're doing great! Keep up the consistent posting and engagement. Consider experimenting with stories and collaborations.",
    Medium: "Consider posting more often or engaging with your followers through comments and direct messages. Try using more relevant hashtags.",
    Low: "To improve engagement, you can focus on posting at optimal times and interact more with your followers. Look into targeted advertising or partnerships."
  };

  // Dummy user data
  const user = {
    name: "Aarav Mehta",
    username: "@aarav_creative",
    type: "Personal Brand",
    profileImage: "https://i.pravatar.cc/100",
    interests: "Tech, Motivation, Startups",
    preferences: "Reels, Carousels, Quote Posts",
    targetAudience: "Young Entrepreneurs, Students, Tech Enthusiasts"
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex justify-center pt-8 pb-6 bg-blue-800">
        <div className="text-center font-bold text-3xl text-white">Social Media Dashboard</div>
      </div>

      {/* User Detail Panel */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col md:flex-row items-center gap-6">
          <img src={user.profileImage} alt="Profile" className="w-24 h-24 rounded-full shadow-md" />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-100">{user.name}</h2>
            <p className="text-gray-400 mb-1">{user.username}</p>
            <p className="text-sm text-blue-400 font-semibold mb-2">{user.type}</p>
            <div className="text-gray-300 text-sm">
              <p><span className="font-semibold text-gray-100">Interests:</span> {user.interests}</p>
              <p><span className="font-semibold text-gray-100">Post Preferences:</span> {user.preferences}</p>
              <p><span className="font-semibold text-gray-100">Target Audience:</span> {user.targetAudience}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Selection Section */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 px-4">
        {socialPlatforms.map((platform) => (
          <div
            key={platform.name}
            onClick={() => setSelectedPlatform(platform.name)}
            className={`cursor-pointer flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 transition-all 
              ${selectedPlatform === platform.name ? 'bg-blue-600 text-white' : 'bg-gray-700 text-blue-400 border-blue-600'}`}
          >
            <span className="text-2xl">{platform.icon}</span>
            <span>{platform.name}</span>
          </div>
        ))}
      </div>

      {/* Selected Platform Data */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6">
        <div className="bg-gray-800 shadow-lg rounded-xl p-6">
          <h3 className="font-semibold text-xl text-gray-100 mb-4">Followers</h3>
          <div className="text-3xl font-bold text-blue-500">{selectedData?.followers}</div>
        </div>
        <div className="bg-gray-800 shadow-lg rounded-xl p-6">
          <h3 className="font-semibold text-xl text-gray-100 mb-4">Likes</h3>
          <div className="text-3xl font-bold text-blue-500">{selectedData?.likes}</div>
        </div>
        <div className="bg-gray-800 shadow-lg rounded-xl p-6">
          <h3 className="font-semibold text-xl text-gray-100 mb-4">Comments</h3>
          <div className="text-3xl font-bold text-blue-500">{selectedData?.comments}</div>
        </div>
      </div>

      {/* Engagement & Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-6 mt-8">
        <div className="bg-gray-800 shadow-lg rounded-xl p-6">
          <h3 className="font-semibold text-xl text-gray-100 mb-4">Engagement</h3>
          <div className="text-xl font-semibold">{selectedData?.engagement}</div>
        </div>
        <div className="bg-gray-800 shadow-lg rounded-xl p-6">
          <h3 className="font-semibold text-xl text-gray-100 mb-4">Posts</h3>
          <div className="text-3xl font-bold text-blue-500">{selectedData?.posts}</div>
        </div>
      </div>

      {/* Additional Insights Section */}
      <div className="px-4 sm:px-6 mt-8 text-center text-lg font-semibold">
        <div className="text-gray-400 mb-4">
          <span className="text-blue-500">Current Engagement: </span>
          {selectedData?.engagement}
        </div>
        <div>
          <span className="text-blue-500">Overall Performance: </span>
          {(selectedData?.followers ?? 0) > 15000 ? 'Excellent' : 'Good'}
        </div>
      </div>

      {/* AI Suggestions for Improving Engagement */}
      <div className="mt-8 px-4 sm:px-6 bg-gray-800 shadow-lg rounded-xl p-6">
        <h3 className="font-semibold text-xl text-gray-100 mb-4">AI Recommendations</h3>
        <div className="text-lg text-gray-400">
          <p><span className="font-semibold">Suggested Action: </span>{aiSuggestions[selectedData?.engagement as keyof typeof aiSuggestions || 'Low']}</p>
        </div>
      </div>
      <PostGenerator />
    </div>
  );
}
