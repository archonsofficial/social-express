import { useState } from "react";
import { useAuthStore } from "../../store/useAuthStore"; // adjust path if needed
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" , xPref:[],
    fbPref:[],instaPref:[""]});
  const signup = useAuthStore((state) => state.signup);
  const isLoading = useAuthStore((state) => state.isLoading);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      await signup(formData);
      navigate("/platformchoose");
    } catch (err) {
      // Error is already handled in authStore (via toast)
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gray-800 text-white p-8 rounded-2xl shadow-2xl sm:max-w-lg lg:max-w-xl">
        <h2 className="text-3xl font-bold text-center text-indigo-400 mb-6 sm:text-4xl lg:text-5xl">
          Create Your Account
        </h2>
        <p className="text-sm text-center text-gray-400 mb-8 sm:text-base lg:text-lg">
          Join the AI-powered content revolution.
        </p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name" className="block text-sm text-gray-300 sm:text-base lg:text-lg">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 sm:p-4 lg:p-5"
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-300 sm:text-base lg:text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 sm:p-4 lg:p-5"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-gray-300 sm:text-base lg:text-lg">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 sm:p-4 lg:p-5"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-500 hover:bg-indigo-600 transition duration-300 text-white font-semibold py-3 rounded-lg shadow-md disabled:opacity-60 sm:py-4 lg:py-5"
            onClick={handleSignup}
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-400 mt-6 sm:text-base lg:text-lg">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-400 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
