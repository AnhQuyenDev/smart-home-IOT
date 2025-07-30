import React from 'react';
import { TrendingUp, Zap } from 'lucide-react';

export default function PowerChart() {
  return (
    <div className="bg-white border-gray-100 shadow-xl rounded-3xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Zap className="w-5 h-5 text-emerald-600" />
          </div>
          <h3 className="text-gray-900 font-semibold text-lg">Power Consumed</h3>
        </div>
        <span className="text-gray-500 text-sm">This Week</span>
      </div>
      
      {/* Chart Area */}
      <div className="h-48 relative">
        <svg className="w-full h-full" viewBox="0 0 400 150">
          <defs>
            <linearGradient id="powerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.3" /> {/* emerald-400 */}
              <stop offset="100%" stopColor="#34d399" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Grid Lines */}
          <g className="text-gray-200" stroke="currentColor" strokeWidth="1">
            <line x1="0" y1="37.5" x2="400" y2="37.5" />
            <line x1="0" y1="75" x2="400" y2="75" />
            <line x1="0" y1="112.5" x2="400" y2="112.5" />
          </g>

          {/* Chart Path */}
          <path
            d="M 0 120 Q 50 100 100 80 T 200 60 Q 250 40 300 50 T 400 30"
            fill="none"
            stroke="url(#powerGradient)"
            strokeWidth="3"
          />

          {/* Area Fill */}
          <path
            d="M 0 120 Q 50 100 100 80 T 200 60 Q 250 40 300 50 T 400 30 L 400 150 L 0 150 Z"
            fill="url(#powerGradient)"
          />

          {/* Data Points */}
          <circle cx="100" cy="80" r="4" fill="#10b981" /> {/* emerald-500 */}
          <circle cx="200" cy="60" r="4" fill="#10b981" />
          <circle cx="300" cy="50" r="4" fill="#10b981" />
        </svg>

        {/* Y-axis Labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 -ml-8">
          <span>100</span>
          <span>75</span>
          <span>50</span>
          <span>25</span>
          <span>0</span>
        </div>

        {/* X-axis Labels */}
        <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-400 mt-2">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
    </div>
  );
}
