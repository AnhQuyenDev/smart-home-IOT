import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/dashboard');
  }
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/login-bg.jpg')" }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-700/60 via-black/30 to-black/80 backdrop-blur-sm"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-emerald-700 mb-6 text-center">
            Welcome Back
          </h2>

          <form 
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="text-right text-sm text-emerald-600 hover:underline cursor-pointer">
              Forgot password?
            </div>

            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Sign In
            </button>
          </form>

          <div className="text-center mt-6 text-sm text-gray-600">
            Don't have an account?{' '}
            <span className="text-emerald-600 hover:underline cursor-pointer">
              Sign up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
