'use client';

import { useState } from 'react';
import Link from 'next/link';
import { promptData } from '@/lib/data';

const profileData = {
    name: 'NeuralArchitect',
    verified: true,
    bio: 'Specializing in hyper-realistic Midjourney prompts and complex GPT-4 workflow architectures. 5 years in prompt engineering.',
    stats: {
        totalPrompts: 142,
        creditsEarned: '12.4K',
        avgRating: 4.9
    },
    balance: 120
};

const userPrompts = [
    {
        id: 1,
        title: 'Cyberpunk Portrait v6.1',
        category: 'Midjourney',
        description: 'Highly detailed portrait prompt for creating neon-lit futuristic characters with custom lighting...',
        rating: 4.9,
        reviews: 42,
        price: 12,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYqRhNaAc26Ljr6kDY1bV-lLSEJ3kFSGbi6R_Mk1yQaql4sMl3Vj42QGkpDMhKREkstEIesiXxSpaMOk2igEIKpeKeaZw2hbgQM0sM8TGmdTob_z_DpjefZsSwKO8ak0U4dCJlNh2PXV04bxZHO-dO4H5tOO3bot6KKHkQz7Idi2ZWsAEVkzTy8Z7QK2CTuVsPhOKwCl4apYKZGreHL4QaXSjG4LgObCht7_fHS8OhcNOGLPpJT15z3Y6mQwZY4JBeWIrKf5ibO5g'
    },
    {
        id: 2,
        title: 'Advanced Logic Chain Master',
        category: 'GPT-4',
        description: 'System prompt to force step-by-step reasoning for complex mathematical and coding tasks...',
        rating: 5.0,
        reviews: 18,
        price: 25,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7k6BjnvceNRJqEaK6dMUcj8i2O2sEpo-FOXPqS30SrQM4zTrBUk0HbQqheCMhHmN-LvcAgp3mYQvxZAKZPigkV2DNlVS6ymDuB35oayEvkh3Sv1103b2UpZjLOQ_twSrZ-MBsDUL5QOiv34K7UYDc-vnp6s7B220WZKLVDtPiPgmSaheDBq_Wzw3IniUIBpaKfSMg7gFDZFuE8C9s_nZ_vP5RObvWgzMyiJfBJ-7PmYeOqCLs65-YW2J7dXKTzhJkJPFrVQYjk7w'
    },
    {
        id: 3,
        title: 'Minimalist Isometric Icons',
        category: 'DALL-E 3',
        description: 'Consistent icon set generator for UI/UX design presentation and high-quality web assets...',
        rating: 4.8,
        reviews: 89,
        price: 8,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCa0yLeL1J4tmogYh7wt9ArjRTfsnMgdC5WwS70B1gxC0B05Mw0fXVOvYMGcLDi0eFKrYqw38JA6GJWvEiET5W7xQySU0bMEHJbKwOODyOmiYnlUFiC0e4PTaDIH5x8R9FbGhKM1BRU28MoJOsAt-184kfvv3uxdLAd3brVOXzEooLE0Y9pw4v6JcpC4Uoe7G24F6VzUuM2OlGVVP5En0Kl0PNWe69R0etJRO_ZyGm1VZpQ29MHc3FmHES73n-ktU3A4ZOfRLe3Gr4'
    },
    {
        id: 4,
        title: 'Deep Space Nebula Generator',
        category: 'Midjourney',
        description: 'Create breathtaking 8K cosmic landscapes with scientifically accurate light scattering...',
        rating: 4.7,
        reviews: 112,
        price: 15,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_3mnOcER6nM2_9xwVq87ZLKgpj99hdc07YGqN86P0fA4or8XlDVbzvopfa464nd-wDvrJyumJJNMgiwi3erVyH6Agip2uJFds4PCDDyhnnABR8HpyEdu6I8fWHFpu3PHWqN3zf5Mo6WO0UC--0G2AMdPwJptarkHz57-xjxm-rvbBuvr4VFUyH6gIw82ifek4iz-9hmzTBMvWUeKHHncoZdEXVm6o4oouTq0prxe0c4zfV0WT_IQs6Pomhg3UnZCKIZ-N9uzsOK4'
    },
    {
        id: 5,
        title: 'Fluid Dynamics Abstract',
        category: 'Midjourney',
        description: 'Generate organic liquid flow patterns and explosive color mixing for background designs...',
        rating: 4.9,
        reviews: 56,
        price: 10,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcnp_AXJ8yr8jEvW4XKQohVa4kkMFjmCDGFLxaLKdF5ac5Cff8Vseb7xoBTQmo4GJr3nJS4adBnmyHoVHk4v_f5xfhNCRkusG7Rc_FBph0cSjNStH9_fE7M8Gp23iC4HB8SFK14XE6PJ3YPv1sFQ0tOj7mGCXPD3-bJZU5741EW2EfPyOKLGRe7GAL7vunlZSiuNjxtBfDCJ1TcNta-wJgq2vkdU_Wqsrm-rDaB3lSssCf6c1Lc1bXTjIUpT4BWyv46RDGpRs9drA'
    }
];


export default function Profile() {
    const [activeTab, setActiveTab] = useState<'latest' | 'popular'>('latest');
    const [activeSection, setActiveSection] = useState<'prompts' | 'sales'>('prompts');
    const [bookmarkedPrompts, setBookmarkedPrompts] = useState<Set<number>>(new Set());

    const toggleBookmark = (promptId: number, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setBookmarkedPrompts(prev => {
            const newSet = new Set(prev);
            if (newSet.has(promptId)) {
                newSet.delete(promptId);
            } else {
                newSet.add(promptId);
            }
            return newSet;
        });
    };

    return (
        <div className="flex-1 p-4 sm:p-6 lg:p-8 w-full">
            {/* Profile Header */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 lg:mb-10 relative overflow-hidden border border-slate-100">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>

                {/* Settings Icon */}
                <button className="absolute top-6 right-6 p-2 rounded-lg hover:bg-slate-100 transition-colors z-20">
                    <span className="material-symbols-outlined text-slate-600 text-xl">settings</span>
                </button>

                {/* Sales Button */}
                <button 
                    onClick={() => setActiveSection('sales')}
                    className={`absolute top-16 right-6 p-2 rounded-lg transition-colors z-20 ${
                        activeSection === 'sales' 
                            ? 'bg-primary text-white' 
                            : 'hover:bg-slate-100'
                    }`}
                >
                    <span className={`material-symbols-outlined text-xl ${
                        activeSection === 'sales' ? 'text-white' : 'text-slate-600'
                    }`}>sell</span>
                </button>

                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center relative z-10">
                    {/* Avatar */}
                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden border-4 border-primary/20 p-1 bg-white">
                        <div
                            className="w-full h-full object-cover rounded-xl bg-cover bg-center"
                            style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuA5NVkO5I5Y5ADmTu5nHMEiGCYl68Vq3XbAUO40vdKlbhDYxoE2wCfDFQLp88bR26qaiQKfBx0CDZdmyilOhB3evvEwvUfMQOnybArTv4owqwuNhYytyh9Jie5Qwwt5sTJRDpFuPtY7YRKZgkMyg63f7lnBCxAx7PagW6kMcpuXyqEgc3hwXhJcGAvMUfRyvP66ChahF-zXw_EnLTWmiLNRBAvbEpMuwoza7OWgMk3-XHxmuQkB9cIG-Y_oj3LCkt6ztRl7DpxKLpo)' }}
                        />
                    </div>

                    {/* User Info */}
                    <div className="flex-1 text-center md:text-left">
                        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{profileData.name}</h2>
                        </div>
                        <p className="text-slate-500 max-w-full sm:max-w-lg lg:max-w-xl mb-4 sm:mb-6 text-sm sm:text-base">{profileData.bio}</p>
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 lg:gap-8">
                            <div className="text-center md:text-left">
                                <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Total Prompts</p>
                                <p className="text-xl sm:text-2xl font-bold">{profileData.stats.totalPrompts}</p>
                            </div>
                            <div className="w-px h-10 bg-primary/20"></div>
                            <div className="text-center md:text-left">
                                <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Credits Earned</p>
                                <p className="text-xl sm:text-2xl font-bold text-primary">{profileData.stats.creditsEarned}</p>
                            </div>
                            <div className="w-px h-10 bg-primary/20"></div>
                            <div className="text-center md:text-left">
                                <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Avg. Rating</p>
                                <div className="flex items-center gap-2">
                                    <p className="text-xl sm:text-2xl font-bold">{profileData.stats.avgRating}</p>
                                    <span className="material-symbols-outlined text-amber-400 text-xl">star</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Prompts Section */}
            {activeSection === 'prompts' && (
                <>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
                        <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Published Prompts</h3>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setActiveTab('latest')}
                                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium border transition-all ${activeTab === 'latest'
                                    ? 'bg-primary text-white border-primary'
                                    : 'bg-white border-slate-200 text-slate-600 hover:border-primary/30'
                                    }`}
                            >
                                Latest
                            </button>
                            <button
                                onClick={() => setActiveTab('popular')}
                                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium border transition-all ${activeTab === 'popular'
                                    ? 'bg-primary text-white border-primary'
                                    : 'bg-white border-slate-200 text-slate-600 hover:border-primary/30'
                                    }`}
                            >
                                Most Popular
                            </button>
                        </div>
                    </div>

                    {/* Prompt Grid */}
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
                        {/* Upload New Prompt Card */}
                        <Link href="/post-prompt" className="border-2 border-dashed border-primary/20 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center p-6 sm:p-8 group hover:border-primary/50 transition-all cursor-pointer bg-primary/5">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-all">
                                <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">add</span>
                            </div>
                            <p className="font-bold text-slate-400 group-hover:text-primary transition-colors text-sm sm:text-base">Upload New Prompt</p>
                        </Link>
                        {promptData.slice(0, 5).map((prompt) => (
                            <Link key={prompt.id} href={`/prompt/${prompt.id}`} className="block">
                                <div className="prompt-card group bg-white rounded-lg xs:rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
                                    {/* Card Image Area */}
                                    <div className="relative aspect-square overflow-hidden bg-slate-900">
                                        <div
                                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                            style={{ backgroundImage: `url(${prompt.image})` }}
                                        />

                                        {/* Bookmark Button */}
                                        <button
                                            onClick={(e) => toggleBookmark(prompt.id, e)}
                                            className="absolute top-1.5 xs:top-2 sm:top-3 right-1.5 xs:right-2 sm:right-3 bg-white/90 backdrop-blur-md p-1.5 xs:p-2 sm:p-2.5 rounded-full flex items-center justify-center shadow-sm border border-white/20 hover:bg-white hover:scale-110 transition-all duration-200"
                                        >
                                            <span className={`material-symbols-outlined text-[14px] xs:text-[16px] sm:text-[18px] transition-colors duration-200 ${
                                                bookmarkedPrompts.has(prompt.id) 
                                                    ? 'text-primary fill-[1]' 
                                                    : 'text-slate-400 hover:text-slate-600'
                                            }`}>
                                                {bookmarkedPrompts.has(prompt.id) ? 'bookmark' : 'bookmark_border'}
                                            </span>
                                        </button>
                                    </div>

                                    {/* Card Content Area */}
                                    <div className="p-2 xs:p-2.5 sm:p-3 flex flex-col flex-1">
                                        {/* Title & Price Row */}
                                        <div className="flex justify-between items-start mb-1.5">
                                            <h4 className="font-extrabold text-[10px] xs:text-sm sm:text-base text-slate-800 leading-tight group-hover:text-primary transition-colors flex-1 line-clamp-1 xs:line-clamp-2">
                                                {prompt.title}
                                            </h4>
                                        </div>

                                        {/* Description Text */}
                                        <p className="text-slate-400 text-[9px] xs:text-xs sm:text-sm leading-relaxed line-clamp-1 xs:line-clamp-2 mb-1.5 xs:mb-2 sm:mb-3 font-medium">
                                            {prompt.fullDescription}
                                        </p>

                                        {/* Footer Stats & Credit Price */}
                                        <div className="mt-auto pt-1 xs:pt-1.5 sm:pt-2 border-t border-slate-50">
                                            <div className="flex items-center justify-between gap-2">
                                                <div className="flex items-center gap-1.5 text-slate-400">
                                                    <span className="material-symbols-outlined text-[8px] xs:text-[10px] sm:text-[12px]">favorite</span>
                                                    <span className="text-[6px] xs:text-[7px] sm:text-[9px] font-bold leading-none">{prompt.impact}</span>
                                                    <span className="material-symbols-outlined text-[8px] xs:text-[10px] sm:text-[12px]">download</span>
                                                    <span className="text-[6px] xs:text-[7px] sm:text-[9px] font-bold leading-none">{prompt.sales || '840'}</span>
                                                </div>
                                                <div className="flex items-center gap-0.5 bg-primary/10 px-1.5 py-0.5 rounded-full flex-shrink-0">
                                                    <span className="material-symbols-outlined text-primary text-[8px] xs:text-[9px] sm:text-[11px] fill-[1]">monetization_on</span>
                                                    <span className="text-[6px] xs:text-[8px] sm:text-[10px] font-black text-primary">{prompt.price.split(' ')[0]}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </>
            )}

            {/* Sales Section */}
            {activeSection === 'sales' && (
                <>

                    <div className="space-y-8 relative">
                        {/* Close Button */}
                        <button 
                            onClick={() => setActiveSection('prompts')}
                            className="absolute top-0 right-0 p-2 rounded-lg hover:bg-slate-100 transition-colors z-20"
                        >
                            <span className="material-symbols-outlined text-slate-600 text-xl">close</span>
                        </button>

                        {/* Page Title & Subtitle */}
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Internal Wallet</h1>
                            <p className="text-slate-500 mt-2 text-base sm:text-lg">Track your earnings and usage across the marketplace.</p>
                        </div>

                        {/* Dashboard Grid */}
                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
                            {/* Main Balance & Trend Section */}
                            <div className="xl:col-span-2 space-y-6 lg:space-y-8">
                                {/* Credits Hero Card */}
                                <div className="bg-primary rounded-2xl p-6 sm:p-8 text-white shadow-xl shadow-primary/20 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8 opacity-10">
                                        <span className="material-symbols-outlined text-9xl">account_balance_wallet</span>
                                    </div>
                                    <div className="relative z-10">
                                        <p className="text-primary-100 text-sm font-medium uppercase tracking-widest opacity-80">Available Credits</p>
                                        <div className="mt-4 flex items-baseline gap-2">
                                            <span className="text-5xl sm:text-6xl font-bold tracking-tighter">{profileData.balance}.00</span>
                                            <span className="text-xl sm:text-2xl font-medium opacity-70">CR</span>
                                        </div>
                                        <div className="mt-8 flex items-center gap-4">
                                            <div className="bg-white/20 backdrop-blur-md rounded-lg px-3 py-1.5 flex items-center gap-2">
                                                <span className="material-symbols-outlined text-sm">trending_up</span>
                                                <span className="text-sm font-medium">+12.5% this month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Trend Visualization */}
                                <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-100 shadow-sm">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-slate-800 font-bold">Credit Activity (30 Days)</h3>
                                        <div className="flex gap-2">
                                            <button className="px-3 py-1 rounded-full text-xs font-bold bg-primary text-white">Month</button>
                                            <button className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-500">Year</button>
                                        </div>
                                    </div>
                                    <div className="h-48 w-full">
                                        {/* Custom Sparkline SVG */}
                                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 500 150">
                                            <defs>
                                                <linearGradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                                                    <stop offset="0%" stopColor="#2b4bee" stopOpacity="0.15"></stop>
                                                    <stop offset="100%" stopColor="#2b4bee" stopOpacity="0"></stop>
                                                </linearGradient>
                                            </defs>
                                            <path d="M0,120 C50,110 80,40 120,60 S180,100 250,80 S350,20 420,40 S500,10 500,10 L500,150 L0,150 Z" fill="url(#chartGradient)"></path>
                                            <path d="M0,120 C50,110 80,40 120,60 S180,100 250,80 S350,20 420,40 S500,10 500,10" fill="none" stroke="#2b4bee" strokeLinecap="round" strokeWidth="3"></path>
                                        </svg>
                                    </div>
                                    <div className="flex justify-between mt-4 px-2">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Week 1</span>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Week 2</span>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Week 3</span>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Week 4</span>
                                    </div>
                                </div>
                            </div>

                            {/* Transaction Sidebar */}
                            <div className="xl:col-span-1 space-y-6">
                                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col h-full">
                                    <div className="p-4 sm:p-6 border-b border-slate-50 flex items-center justify-between">
                                        <h3 className="text-slate-800 font-bold text-sm sm:text-base">Recent Activity</h3>
                                        <button className="text-primary text-sm font-semibold hover:underline text-xs sm:text-sm">View All</button>
                                    </div>
                                    <div className="divide-y divide-slate-50 overflow-y-auto max-h-[500px]">
                                        {/* Transaction Item 1 */}
                                        <div className="p-3 sm:p-5 hover:bg-slate-50/80 transition-colors group">
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-8 sm:size-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                                                        <span className="material-symbols-outlined text-sm sm:text-lg">shopping_cart</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">Cyberpunk Portrait</p>
                                                        <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-0.5">Prompt Purchase • Today</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm font-bold text-red-500">-20.00</p>
                                                    <p className="text-[10px] text-slate-400 uppercase font-bold">CR</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Transaction Item 2 */}
                                        <div className="p-3 sm:p-5 hover:bg-slate-50/80 transition-colors group">
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-8 sm:size-10 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center">
                                                        <span className="material-symbols-outlined text-sm sm:text-lg">sell</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">Minimalist Logo Gen</p>
                                                        <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-0.5">Sale Earning • Yesterday</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm font-bold text-emerald-500">+45.00</p>
                                                    <p className="text-[10px] text-slate-400 uppercase font-bold">CR</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Transaction Item 3 */}
                                        <div className="p-3 sm:p-5 hover:bg-slate-50/80 transition-colors group">
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-8 sm:size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                                        <span className="material-symbols-outlined text-sm sm:text-lg">card_giftcard</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">Marketplace Reward</p>
                                                        <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-0.5">Platform Bonus • 2d ago</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm font-bold text-primary">+10.00</p>
                                                    <p className="text-[10px] text-slate-400 uppercase font-bold">CR</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 sm:p-6 bg-slate-50/50 flex flex-col items-center justify-center text-center">
                                        <span className="material-symbols-outlined text-slate-300 mb-2">history</span>
                                        <p className="text-xs font-medium text-slate-400">Showing last 7 days of activity</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Stats / Meta Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                                <div className="size-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                                    <span className="material-symbols-outlined">trending_down</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Spent</p>
                                    <p className="text-xl font-bold text-slate-800">450.00 CR</p>
                                </div>
                            </div>
                            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                                <div className="size-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                                    <span className="material-symbols-outlined">payments</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Lifetime Earned</p>
                                    <p className="text-xl font-bold text-slate-800">{profileData.stats.creditsEarned} CR</p>
                                </div>
                            </div>
                            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                                <div className="size-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                                    <span className="material-symbols-outlined">auto_graph</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Profit Margin</p>
                                    <p className="text-xl font-bold text-emerald-500">84%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
