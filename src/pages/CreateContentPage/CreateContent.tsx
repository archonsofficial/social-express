import { useState } from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa"; // Import icons

export default function CreateContent() {
  const [idea, setIdea] = useState("");
  const [tone, setTone] = useState("Professional");
  const [content, setContent] = useState({
    insta: "",
    fb: "",
    linkedin: "",
  });

  const [selectedTab, setSelectedTab] = useState<"insta" | "fb" | "linkedin">("insta");

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-indigo-400 text-center">
          AI-Powered Content Creator
        </h1>

        {/* Content Idea Input */}
        <div className="space-y-2">
          <label className="text-sm text-gray-400">What's your post about?</label>
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Describe your content idea..."
            className="w-full bg-gray-800 p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={4}
          />
        </div>

        {/* Tone Selector */}
        <div className="space-y-2">
          <label className="text-sm text-gray-400">How do you want your audience to feel?</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              { label: "Professional", emoji: "💼", desc: "Polished & confident" },
              { label: "Funny", emoji: "😂", desc: "Light-hearted & witty" },
              { label: "Casual", emoji: "😎", desc: "Relaxed & relatable" },
              { label: "Bold", emoji: "🔥", desc: "Unapologetic & edgy" },
              { label: "Inspiring", emoji: "🌟", desc: "Motivational & uplifting" },
              { label: "Empathetic", emoji: "🤝", desc: "Warm & understanding" },
              { label: "Sassy", emoji: "💅", desc: "Confident with flair" },
            ].map(({ label, emoji, desc }) => (
              <button
                key={label}
                type="button"
                onClick={() => setTone(label)}
                className={`p-4 rounded-xl border transition-all text-left ${
                  tone === label
                    ? "bg-indigo-500 border-indigo-600 shadow-md"
                    : "bg-gray-800 border-gray-700 hover:border-indigo-400"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{emoji}</span>
                  <div>
                    <p className="font-semibold">{label}</p>
                    <p className="text-sm text-white">{desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <div className="text-center">
          <button
            type="button"
            className="bg-green-500 hover:bg-green-600 transition duration-300 px-8 py-3 rounded-lg font-semibold w-full sm:w-auto"
          >
            Generate Content
          </button>
        </div>

        {/* Platform Preview Tabs */}
        <div>
          <div className="flex justify-center gap-6 border-b border-gray-700 pb-2 mb-4 overflow-x-auto">
            {[
              { platform: "insta", icon: <FaInstagram /> },
              { platform: "fb", icon: <FaFacebook /> },
              { platform: "linkedin", icon: <FaLinkedin /> },
            ].map(({ platform, icon }) => (
              <button
                key={platform}
                className={`capitalize font-medium px-4 py-2 ${
                  selectedTab === platform
                    ? "text-indigo-400 border-b-2 border-indigo-500"
                    : "text-gray-400"
                }`}
                onClick={() => setSelectedTab(platform as "insta" | "fb" | "linkedin")}
              >
                <span className="text-2xl">{icon}</span>
              </button>
            ))}
          </div>

          {/* Preview Box */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg min-h-[150px]">
            <p className="text-gray-300">
              {content[selectedTab] || `Your ${selectedTab} content will appear here.`}
            </p>
          </div>
        </div>

        {/* Post Button */}
        <div className="text-center pt-6">
          <button
            type="button"
            className="w-full md:w-auto bg-indigo-500 hover:bg-indigo-600 transition px-10 py-4 rounded-xl font-bold text-white shadow-xl"
          >
            Post to All Platforms
          </button>
        </div>
      </div>
    </div>
  );
}
