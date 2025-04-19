

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-800 text-white p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-indigo-400 mb-6">Welcome Back </h2>
        <p className="text-sm text-center text-gray-400 mb-8">Login to continue managing your brand.</p>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="••••••••"
            />
          </div>

          <a href="/platformchoose">
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 transition duration-300 text-white font-semibold py-3 rounded-lg shadow-md"
          >
            Login
          </button></a>
          
        </form>

        <p className="text-sm text-center text-gray-400 mt-6">
          Don’t have an account? <a href="/signup" className="text-indigo-400 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}
