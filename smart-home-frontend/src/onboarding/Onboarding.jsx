import { Navigate, useNavigate } from 'react-router-dom';
import bgImage from '/images/bg-home.jpg'; // đổi tên nếu cần

const Onboarding = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/60 via-black/40 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full px-6 pb-12 text-white">
        <h1 className="text-3xl font-bold mb-3 leading-snug">
          Control your home <br /> from anywhere
        </h1>
        <p className="text-sm text-gray-200 mb-8">
          Monitor your devices, from thermostats, security cameras,
          to any other appliances with a tap or a voice command
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <button 
            onClick={() => navigate('/login')}
            className="bg-white text-emerald-700 font-semibold py-3 rounded-full shadow-md"
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
