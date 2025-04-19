
import { useState } from 'react';
import PostGenerator from "../../components/PostGenerator.tsx"

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

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-center pt-8 pb-6 bg-blue-100">
        <div className="text-center font-bold text-3xl">Social Media Dashboard</div>
      </div>

      {/* Platform Selection Section */}
      <div className="flex justify-center gap-8 mb-6">
        {socialPlatforms.map((platform) => (
          <div
            key={platform.name}
            onClick={() => setSelectedPlatform(platform.name)}
            className={`cursor-pointer flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 transition-all 
              ${selectedPlatform === platform.name ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border-blue-600'}`}
          >
            <span className="text-2xl">{platform.icon}</span>
            <span>{platform.name}</span>
          </div>
        ))}
      </div>

      {/* Selected Platform Data */}
      <div className="flex justify-center gap-12 px-6">
        <div className="bg-white shadow-lg rounded-xl p-6 w-72">
          <h3 className="font-semibold text-xl text-gray-800 mb-4">Followers</h3>
          <div className="text-3xl font-bold text-blue-600">{selectedData?.followers}</div>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 w-72">
          <h3 className="font-semibold text-xl text-gray-800 mb-4">Likes</h3>
          <div className="text-3xl font-bold text-blue-600">{selectedData?.likes}</div>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 w-72">
          <h3 className="font-semibold text-xl text-gray-800 mb-4">Comments</h3>
          <div className="text-3xl font-bold text-blue-600">{selectedData?.comments}</div>
        </div>
      </div>

      {/* Engagement & Posts */}
      <div className="flex justify-center gap-12 px-6 mt-8">
        <div className="bg-white shadow-lg rounded-xl p-6 w-72">
          <h3 className="font-semibold text-xl text-gray-800 mb-4">Engagement</h3>
          <div className="text-xl font-semibold">{selectedData?.engagement}</div>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 w-72">
          <h3 className="font-semibold text-xl text-gray-800 mb-4">Posts</h3>
          <div className="text-3xl font-bold text-blue-600">{selectedData?.posts}</div>
        </div>
      </div>

      {/* Additional Insights Section */}
      <div className="px-6 mt-8 text-center text-lg font-semibold">
        <div className="text-gray-600 mb-4">
          <span className="text-blue-600">Current Engagement: </span>
          {selectedData?.engagement}
        </div>
        <div>
          <span className="text-blue-600">Overall Performance: </span>
          {(selectedData?.followers ?? 0) > 15000 ? 'Excellent' : 'Good'}
        </div>
      </div>

      {/* AI Suggestions for Improving Engagement */}
      <div className="mt-8 px-6 bg-white shadow-lg rounded-xl p-6">
        <h3 className="font-semibold text-xl text-gray-800 mb-4">AI Recommendations</h3>
        <div className="text-lg text-gray-600">
          <p><span className="font-semibold">Suggested Action: </span>{aiSuggestions[selectedData?.engagement as keyof typeof aiSuggestions || 'Low']}</p>
        </div>
      </div>
      <PostGenerator/>
    </div>

   
  );
}