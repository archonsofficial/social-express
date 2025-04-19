import { useState } from "react";
import { FaLightbulb } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

export default function PostGenerator() {
  const [idea, setIdea] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [showHints, setShowHints] = useState(false);
  const [tone, setTone] = useState("Informative");
  const [aiContent, setAiContent] = useState("Here’s an AI-generated caption based on your input...");
  const [caption, setCaption] = useState("");
  const [useAiCaption, setUseAiCaption] = useState(true);

  const hints = [
    "Promote your new product drop with a countdown.",
    "Share behind-the-scenes of your process.",
    "Highlight a customer testimonial with a visual.",
    "Create a poll to engage your audience.",
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6 flex justify-center items-start">
      <div className="bg-gray-800 rounded-2xl shadow-xl w-full max-w-5xl p-10 space-y-10">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-100 flex items-center justify-center gap-2">
            <BsStars className="text-indigo-400 text-3xl" />
            Post Generator
          </h2>
          <p className="text-gray-400 mt-2">Create engaging posts with AI assistance</p>
        </div>

        {/* Step 1: Post Idea */}
        <section>
          <h3 className="text-lg font-semibold text-gray-300 mb-2">1. What's Your Post About?</h3>
          <div className="relative">
            <textarea
              rows="4"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="Describe your idea or message..."
              className="w-full p-4 border border-gray-700 bg-gray-700 text-gray-100 rounded-md focus:ring-2 focus:ring-indigo-400 resize-none"
            />
            <FaLightbulb
              onClick={() => setShowHints(!showHints)}
              className="absolute top-4 right-4 text-yellow-400 cursor-pointer text-xl hover:scale-110 transition-transform"
            />
          </div>
          {showHints && (
            <ul className="mt-3 bg-gray-700 border border-gray-600 rounded-lg p-4 text-sm text-gray-300 space-y-1">
              {hints.map((hint, idx) => (
                <li key={idx}>💡 {hint}</li>
              ))}
            </ul>
          )}
        </section>

        {/* Step 2: Upload Asset */}
        <section>
          <h3 className="text-lg font-semibold text-gray-300 mb-2">2. Upload Media</h3>
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
            className="w-full file:bg-gray-700 file:border-none file:py-2 file:px-4 file:rounded file:text-indigo-400 hover:file:bg-gray-600 border border-gray-700 rounded-md cursor-pointer text-gray-100"
          />
          {file && <p className="mt-2 text-sm text-green-400">Selected: {file.name}</p>}
        </section>

        {/* Step 3: Select Tone */}
        <section>
          <h3 className="text-lg font-semibold text-gray-300 mb-2">3. Choose Tone</h3>
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="w-full p-3 border border-gray-700 bg-gray-700 text-gray-100 rounded-md focus:ring-2 focus:ring-indigo-400"
          >
            <option>Informative</option>
            <option>Casual</option>
            <option>Witty</option>
            <option>Professional</option>
          </select>
        </section>

        {/* Step 4: Customize Caption (AI content fetched into this) */}
        <section>
          <h3 className="text-lg font-semibold text-gray-300 mb-2">4. Customize Your Caption</h3>
          <textarea
            rows={3}
            value={caption || aiContent}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Write or edit your caption here..."
            className="w-full p-4 border border-gray-700 bg-gray-700 text-gray-100 rounded-md focus:ring-2 focus:ring-indigo-400 resize-none"
          />

          <div className="mt-3 flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="captionChoice"
                checked={useAiCaption}
                onChange={() => setUseAiCaption(true)}
                className="text-indigo-400 focus:ring-indigo-400"
              />
              Use AI Caption
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="captionChoice"
                checked={!useAiCaption}
                onChange={() => setUseAiCaption(false)}
                className="text-indigo-400 focus:ring-indigo-400"
              />
              Use My Edited Caption
            </label>
          </div>
        </section>

        {/* Step 5: Preview */}
        <section>
          <h3 className="text-lg font-semibold text-gray-300 mb-2">5. Preview Post</h3>
          <div className="bg-gray-700 border border-gray-600 rounded-md shadow-sm p-4 space-y-3">
            {file && (
              <img
                src={URL.createObjectURL(file)}
                alt="preview"
                className="rounded-md max-h-64 object-cover"
              />
            )}
            <p className="text-gray-100">
              {useAiCaption ? aiContent : caption || aiContent}
            </p>
          </div>
        </section>

        <button className="w-full mt-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-lg font-semibold py-3 rounded-md shadow-md hover:shadow-lg transition duration-300">
          🚀 Generate Final Post
        </button>
      </div>
    </div>
  );
}