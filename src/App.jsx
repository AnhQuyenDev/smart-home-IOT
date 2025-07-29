// App.jsx
import React from 'react';
import Dashboard from './dashboard';
import Devices from './devices';
import SettingsPage from './setting';
import Message from './message';
import Onboarding from './onboarding/Onboarding';
import LoginForm from './onboarding/LoginForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="flex">
        <div className="flex-1 bg-gray-50 min-h-screen">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/message" element={<Message />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/login" element={<LoginForm />} />
            {/* Redirect mặc định nếu path là / */}
            <Route path="/" element={<Onboarding />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
