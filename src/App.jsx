import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#060A17] text-white">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
