import React from 'react';
import { Cloud, Snowflake } from 'lucide-react';

export default function WeatherCard() {
  return (
    <div className="bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600 rounded-3xl p-6 text-white relative overflow-hidden shadow-xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-4 right-8 w-24 h-24 rounded-full bg-white/20 blur-sm"></div>
        <div className="absolute top-12 right-16 w-16 h-16 rounded-full bg-white/10 blur-md"></div>
        <div className="absolute bottom-8 left-8 w-32 h-32 rounded-full bg-white/5 blur-sm"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold mb-1">Hi, Jasica! Good Evening...</h2>
            <p className="text-white/80 text-sm">Welcome Home, it's snowing outside — stay safe</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-white/80">12 May 2022 • 10:23 PM</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Snowflake className="w-8 h-8 text-white" />
            <span className="text-3xl font-bold">-15°C</span>
          </div>
          <Cloud className="w-12 h-12 text-white/60" />
        </div>
      </div>
    </div>
  );
}
