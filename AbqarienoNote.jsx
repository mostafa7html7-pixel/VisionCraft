import React from 'react';

const AbqarienoNote = () => {
  const videos = [
    "https://res.cloudinary.com/dzwrz9qzb/video/upload/v1777585445/WhatsApp_Video_2026-05-01_at_12.22.58_AM_dhduh3.mp4",
    "https://res.cloudinary.com/dzwrz9qzb/video/upload/v1777585445/WhatsApp_Video_2026-05-01_at_12.22.58_AM_dhduh3.mp4",
    "https://res.cloudinary.com/dzwrz9qzb/video/upload/v1777585447/WhatsApp_Video_2026-05-01_at_12.32.00_AM_fihws6.mp4"
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-sans selection:bg-gold-500 overflow-x-hidden px-4 md:px-0">

      {/* Hero Section with Legendary Frame */}
      <section className="relative pt-16 md:pt-24 pb-10 flex flex-col items-center">
        <h1 className="text-3xl md:text-7xl font-black mb-12 text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-yellow-600 tracking-tighter text-center uppercase">
          Exclusive Moments
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 w-full max-w-7xl mx-auto">
          {videos.map((src, index) => (
            <div key={index} className="relative group">
              {/* Red Lightning Beam Frame - Optimized for Speed */}
              <div className="absolute -inset-[1.5px] bg-[conic-gradient(from_0deg,transparent_0%,#fff_1%,#ff2e2e_4%,transparent_15%)] rounded-xl animate-[spin_1.5s_linear_infinite] opacity-100 shadow-[0_0_30px_rgba(255,46,46,0.5)] will-change-transform"></div>
              
              <div className="relative aspect-[9/16] bg-black rounded-lg overflow-hidden border border-white/10 shadow-2xl z-10">
                <video 
                  src={src} 
                  controls
                  playsInline
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                {/* Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Note Content (Minimalist & Clean) */}
      <section className="max-w-2xl mx-auto py-20 px-6 text-center">
        <div className="p-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-2xl" style={{ boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}>
          <div className="bg-[#111] p-10 rounded-2xl backdrop-blur-xl">
            <p className="text-xl leading-relaxed italic text-gray-300">
              "كلمات بسيطة.. لصاحبة أهدى حضور"
            </p>
            <div className="mt-6 h-[1px] w-24 bg-gold-500 mx-auto opacity-50"></div>
          </div>
        </div>
      </section>

      {/* CSS Styles (Standard Tailwind Colors) */}
      <style jsx>{`
        .from-gold-400 { --tw-gradient-from: #d4af37; --tw-gradient-to: rgb(212 175 55 / 0); }
        .to-gold-600 { --tw-gradient-to: #996515; }
        .bg-gold-500 { background-color: #af8a2c; }
      `}</style>
    </div>
  );
};

export default AbqarienoNote;