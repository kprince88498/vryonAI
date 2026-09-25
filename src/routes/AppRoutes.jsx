import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Auth from '../pages/Auth';

function AppRoutes() {
  return (
    <Routes>
      {/* 👑 मुख्य लिंक खोलते ही सीधे डैशबोर्ड चमकेगा */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/home" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default AppRoutes;
