import React, { useState } from 'react';

export default function Dashboard() {
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);

  return (
    <div className="min-h-screen bg-[#02050E] text-white flex flex-col font-sans relative overflow-hidden select-none">
      
      {/* 🎨 BACKGROUND EFFECTS & GLOWS */}
      <div className="absolute top-[-25%] left-[-20%] w-[140%] h-[60%] bg-gradient-to-b from-[#0e2c6c]/20 via-[#031c44]/5 to-transparent rounded-full blur-[140px] pointer-events-none"></div>
      
      {/* 🔮 CENTER NEON GLOWING ARC RING */}
      <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square max-w-[500px] pointer-events-none z-0">
        <div className="w-full h-full rounded-full border-[1.5px] border-transparent bg-gradient-to-b from-transparent via-[#00d2ff]/40 to-[#7a00ff]/30 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_20%,rgba(0,0,0,1)_70%,rgba(0,0,0,1)_100%)] blur-[1px]"></div>
        <div className="absolute inset-0 rounded-full border-[6px] border-transparent bg-gradient-to-b from-transparent via-[#00d2ff]/10 to-[#7a00ff]/10 blur-[20px]"></div>
      </div>

      {/* ✨ LITTLE SHINING STARS */}
      <div className="absolute inset-0 opacity-40 pointer-events-none z-0">
        <div className="absolute top-[30%] left-[20%] w-1 h-1 bg-cyan-300 rounded-full shadow-[0_0_8px_#00d2ff]"></div>
        <div className="absolute top-[60%] right-[15%] w-1 h-1 bg-purple-400 rounded-full shadow-[0_0_8px_#7a00ff]"></div>
        <div className="absolute bottom-[40%] right-[30%] w-1 h-1 bg-blue-300 rounded-full shadow-[0_0_6px_#00d2ff]"></div>
      </div>

      {/* 1. TOP NAVBAR */}
      <header className="h-16 flex items-center justify-between px-5 z-10 bg-transparent">
        <button className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#091124]/60 border border-slate-800/60 active:scale-95 transition-all">
          <div className="flex flex-col gap-[5px] items-start w-5">
            <span className="w-full h-[2px] bg-gray-200 rounded-full"></span>
            <span className="w-4 h-[2px] bg-gray-200 rounded-full"></span>
            <span className="w-full h-[2px] bg-gray-200 rounded-full"></span>
          </div>
        </button>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1.5">
            <svg className="w-5 h-5" viewBox="0 0 100 100" fill="none">
              <path d="M15 15L43 85L57 85L85 15H68L50 68L32 15H15Z" fill="url(#top-v-grad)" />
              <defs>
                <linearGradient id="top-v-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00d2ff" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
              Vryon<span className="font-semibold text-gray-100">AI</span>
            </span>
          </div>
          <span className="text-[9px] text-gray-400 font-medium tracking-widest uppercase mt-0.5 opacity-60">Ultra • Multimodal</span>
        </div>

        <div className="flex items-center gap-2.5">
          <button className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#0d172e]/80 border border-slate-800 text-xs font-medium text-gray-300">
            <span>✦</span>
          </button>
          <div className="w-[38px] h-[38px] rounded-full p-[1.5px] bg-gradient-to-tr from-[#00d2ff] via-[#0052ff] to-[#7a00ff] relative">
            <div className="w-full h-full bg-[#080d1a] rounded-full overflow-hidden flex items-center justify-center">
              <span className="text-xs font-bold text-cyan-300">PA</span>
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#00ffcc] border-2 border-[#02050E] rounded-full"></span>
          </div>
        </div>
      </header>

      {/* 2. CORE CENTER SPACE */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 z-10 text-center relative -mt-6">
        <div className="relative mb-5">
          <div className="w-[150px] h-[150px] flex items-center justify-center relative">
            <svg className="w-full h-full filter drop-shadow-[0_10px_35px_rgba(0,210,255,0.45)]" viewBox="0 0 100 100" fill="none">
              <path d="M12 15L42 85H58L88 15H69L50 64L31 15H12Z" fill="url(#main-v-3d)" />
              <defs>
                <linearGradient id="main-v-3d" x1="12" y1="15" x2="88" y2="85" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#00d2ff" />
                  <stop offset="35%" stopColor="#0066ff" />
                  <stop offset="75%" strokeColor="#6e00ff" stopColor="#6e00ff" />
                  <stop offset="100%" stopColor="#e879f9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <h1 className="text-[34px] font-bold tracking-tight text-white mb-1.5">Vryon<span className="text-[#00d2ff]">AI</span></h1>
        <p className="text-[15px] text-gray-300 font-medium tracking-wide opacity-85 mb-5">Your All-in-One AI Assistant</p>

        <div className="flex items-center justify-center gap-2 text-[11px] font-medium text-gray-400 bg-[#091124]/30 px-5 py-2 rounded-full border border-slate-900/40 backdrop-blur-sm">
          <span className="hover:text-[#00d2ff] cursor-pointer">Chat</span>
          <span className="text-gray-700">•</span>
          <span className="hover:text-[#00d2ff] cursor-pointer">Search</span>
          <span className="text-gray-700">•</span>
          <span className="hover:text-[#00d2ff] cursor-pointer">Code</span>
          <span className="text-gray-700">•</span>
          <span className="hover:text-[#00d2ff] cursor-pointer">Create</span>
          <span className="text-gray-700">•</span>
          <span className="hover:text-[#00d2ff] cursor-pointer">Analyze</span>
        </div>
      </main>


      {/* 🌊 BOTTOM WAVEY VECTOR (नीचे कैप्सूल बार के ठीक ऊपर वाली चमकती हुई 3D वेव) */}
      <div className="absolute bottom-[80px] left-0 w-full pointer-events-none z-0 overflow-hidden">
        <svg className="w-full h-[120px] opacity-85 filter drop-shadow-[0_-5px_15px_rgba(0,210,255,0.3)]" viewBox="0 0 375 100" preserveAspectRatio="none" fill="none">
          <path d="M-20,70 C40,40 100,85 180,50 C260,15 320,65 400,35" stroke="url(#wave-cyan-blue)" strokeWidth="2" strokeLinecap="round"/>
          <path d="M-20,73 C45,45 95,83 182,53 C258,23 322,63 400,38" stroke="rgba(0, 210, 255, 0.15)" strokeWidth="0.5"/>
          <path d="M-20,67 C35,35 105,87 178,47 C262,7 318,67 400,32" stroke="rgba(122, 0, 255, 0.2)" strokeWidth="0.5"/>
          <defs>
            <linearGradient id="wave-cyan-blue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0052ff" />
              <stop offset="40%" stopColor="#00d2ff" />
              <stop offset="70%" stopColor="#3500ff" />
              <stop offset="100%" stopColor="#7a00ff" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* =========================================================================
          3. BOTTOM COMMAND HUB (शानदार नियॉन बॉर्डर वाला इनपुट कैप्सूल बार)
         ========================================================================= */}
      <div className="p-4 mb-2 z-10 bg-transparent">
        <div className="max-w-md mx-auto bg-[#040918]/80 border-[1.5px] border-[#0052ff]/40 rounded-[32px] p-2 flex items-center justify-between gap-2 shadow-[0_0_40px_rgba(0,82,255,0.25)] backdrop-blur-xl relative group">
          <div className="absolute inset-0 rounded-[32px] border border-[#00d2ff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          {/* Plus (+) Button */}
          <button title="Upload File" className="w-[42px] h-[42px] rounded-full bg-[#0c162e]/90 border border-slate-800/80 flex items-center justify-center hover:bg-[#142347] transition-all active:scale-95 text-gray-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
            </svg>
          </button>

          {/* Text Input */}
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Message VryonAI..." 
            className="flex-1 bg-transparent outline-none border-none text-[15px] text-gray-100 placeholder-gray-500 px-2 font-normal"
          />

          {/* Action Control Pack */}
          <div className="flex items-center gap-1.5 pr-0.5">
            {/* Mic Button */}
            <button 
              onClick={() => setIsListening(!isListening)}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${isListening ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'text-gray-300 hover:text-white'}`}
            >
              <svg className="w-[19px] h-[19px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </button>

            {/* Audio Wave Frequency Icon */}
            <button className="w-9 h-9 rounded-full flex items-center justify-center text-[#00d2ff] bg-[#00d2ff]/10 hover:bg-[#00d2ff]/20 transition-all active:scale-95">
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 9h1v6H4V9zm4-3h1v12H8V6zm4 5h1v4h-1v-4zm4-7h1v16h-1V4zm4 7h1v4h-1v-4z" />
              </svg>
            </button>

            {/* Up Arrow Send Button */}
            <button className="w-[42px] h-[42px] rounded-full bg-gradient-to-b from-[#00d2ff] to-[#0052ff] flex items-center justify-center hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_14px_rgba(0,210,255,0.4)] text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
