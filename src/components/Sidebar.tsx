'use client';

import Link from 'next/link';

export default function Sidebar() {
  return (
    <>
      {/* Left Navigation Sidebar */}
      <nav className="w-24 glass-effect border-r border-white/20 hidden lg:flex flex-col items-center sticky top-0 h-screen py-8 gap-8 shrink-0">
        <Link href="/" className="flex flex-col items-center group mb-5">
          <div className="bg-primary p-2.5 rounded-xl text-white shadow-md shadow-primary/30">
            <span className="material-symbols-outlined text-[26px] block">electric_bolt</span>
          </div>
        </Link>
        <div className="flex flex-col items-center gap-3 w-full px-4">
          <a href="#" className="flex flex-col items-center gap-1.5 w-full rounded-xl py-4 bg-primary/10 text-primary transition-all">
            <span className="material-symbols-outlined text-[22px]">explore</span>
            <span className="text-[11px] font-bold uppercase tracking-wider">Explore</span>
          </a>
          <Link href="/profile" className="flex flex-col items-center gap-1.5 w-full rounded-xl py-4 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-all">
            <span className="material-symbols-outlined text-[22px]">person</span>
            <span className="text-[11px] font-bold uppercase tracking-wider">Profile</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
