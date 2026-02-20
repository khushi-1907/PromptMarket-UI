'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Left Navigation Sidebar */}
      <nav className="w-24 glass-effect border-r border-white/20 hidden lg:flex flex-col items-center sticky top-0 h-screen py-8 gap-8 shrink-0">
        <Link href="/" className="flex flex-col items-center group mb-5">
          <div className="bg-primary p-2.5 rounded-xl text-white shadow-md shadow-primary/30">
            <span className="material-symbols-outlined text-[26px] block">electric_bolt</span>
          </div>
        </Link>
        <div className="flex flex-col items-center gap-3 w-full px-4 flex-1">
          <Link 
            href="/" 
            className={`flex flex-col items-center gap-1.5 w-full rounded-xl py-4 transition-all ${
              isActive('/') 
                ? 'bg-primary/10 text-primary' 
                : 'text-slate-400 hover:bg-slate-100 hover:text-slate-700'
            }`}
          >
            <span className="material-symbols-outlined text-[22px]">explore</span>
            <span className="text-[11px] font-bold uppercase tracking-wider">Explore</span>
          </Link>
          <Link 
            href="/profile" 
            className={`flex flex-col items-center gap-1.5 w-full rounded-xl py-4 transition-all ${
              isActive('/profile') 
                ? 'bg-primary/10 text-primary' 
                : 'text-slate-400 hover:bg-slate-100 hover:text-slate-700'
            }`}
          >
            <span className="material-symbols-outlined text-[22px]">person</span>
            <span className="text-[11px] font-bold uppercase tracking-wider">Profile</span>
          </Link>
        </div>
        
        {/* Credits Section */}
        <div className="px-3 mb-4">
          <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-2 overflow-hidden group cursor-pointer hover:border-primary/40 transition-all duration-300">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-1">
              {/* Credits display */}
              <div className="flex items-center gap-1">
                <div className="relative">
                  <span className="material-symbols-outlined text-primary text-xs">monetization_on</span>
                  {/* Subtle pulse animation */}
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm scale-150 animate-pulse"></div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-base font-bold text-slate-800 tracking-tight">120</span>
                  <span className="text-[7px] text-slate-500 font-medium uppercase tracking-wider">Credits</span>
                </div>
              </div>
              
              {/* Top-up button */}
              <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-lg blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <button className="relative bg-primary/90 hover:bg-primary text-white px-2 py-1 rounded-lg font-medium text-[9px] transition-all duration-300 flex items-center gap-0.5 group-hover:scale-105 transform">
                  <span className="material-symbols-outlined text-[9px]">add_circle</span>
                  <span>Top Up</span>
                </button>
              </div>
            </div>
            
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-xl"></div>
          </div>
        </div>
      </nav>
    </>
  );
}
