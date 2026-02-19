'use client';

import { useState } from 'react';
import Link from 'next/link';

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
    const [activeTab, setActiveTab] = useState('latest');
    const [activeSection, setActiveSection] = useState('dashboard');

    return (
        <div className="flex flex-1">
            {/* Sidebar */}
            <aside className="w-72 border-r border-primary/10 bg-white/50 hidden lg:flex flex-col sticky top-0 h-screen p-6">
                <nav className="space-y-1 mb-8">
                    <button
                        onClick={() => setActiveSection('dashboard')}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-all ${activeSection === 'dashboard'
                                ? 'bg-primary/10 text-primary'
                                : 'text-slate-500 hover:bg-primary/5 hover:text-primary'
                            }`}
                    >
                        <span className="material-symbols-outlined text-xl">dashboard</span>
                        Dashboard
                    </button>
                    <button
                        onClick={() => setActiveSection('sales')}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-all ${activeSection === 'sales'
                                ? 'bg-primary/10 text-primary'
                                : 'text-slate-500 hover:bg-primary/5 hover:text-primary'
                            }`}
                    >
                        <span className="material-symbols-outlined text-xl">analytics</span>
                        My Sales
                    </button>
                    <button
                        onClick={() => setActiveSection('settings')}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-all ${activeSection === 'settings'
                                ? 'bg-primary/10 text-primary'
                                : 'text-slate-500 hover:bg-primary/5 hover:text-primary'
                            }`}
                    >
                        <span className="material-symbols-outlined text-xl">settings</span>
                        Settings
                    </button>
                </nav>


                {/* Wallet Widget */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mt-auto">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-slate-400 font-medium">Your Balance</span>
                        <span className="material-symbols-outlined text-primary text-sm">account_balance_wallet</span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-3xl font-bold text-slate-800">{profileData.balance}</span>
                        <span className="text-sm text-primary font-bold tracking-widest uppercase">Credits</span>
                    </div>
                    <button className="w-full bg-primary hover:bg-primary/90 text-white py-2.5 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-base">add_circle_outline</span>
                        Top Up
                    </button>
                </div>

            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 max-w-7xl mx-auto">
                {/* Profile Header */}
                <div className="bg-white rounded-2xl p-8 mb-10 relative overflow-hidden border border-slate-100">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                        {/* Avatar */}
                        <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-primary/20 p-1 bg-white">
                            <div
                                className="w-full h-full object-cover rounded-xl bg-cover bg-center"
                                style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuA5NVkO5I5Y5ADmTu5nHMEiGCYl68Vq3XbAUO40vdKlbhDYxoE2wCfDFQLp88bR26qaiQKfBx0CDZdmyilOhB3evvEwvUfMQOnybArTv4owqwuNhYytyh9Jie5Qwwt5sTJRDpFuPtY7YRKZgkMyg63f7lnBCxAx7PagW6kMcpuXyqEgc3hwXhJcGAvMUfRyvP66ChahF-zXw_EnLTWmiLNRBAvbEpMuwoza7OWgMk3-XHxmuQkB9cIG-Y_oj3LCkt6ztRl7DpxKLpo)' }}
                            />
                        </div>

                        {/* User Info */}
                        <div className="flex-1 text-center md:text-left">
                            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                                <h2 className="text-3xl font-bold">{profileData.name}</h2>
                            </div>
                            <p className="text-slate-500 max-w-xl mb-6">{profileData.bio}</p>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-8">
                                <div className="text-center md:text-left">
                                    <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Total Prompts</p>
                                    <p className="text-2xl font-bold">{profileData.stats.totalPrompts}</p>
                                </div>
                                <div className="w-px h-10 bg-primary/20"></div>
                                <div className="text-center md:text-left">
                                    <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Credits Earned</p>
                                    <p className="text-2xl font-bold text-primary">{profileData.stats.creditsEarned}</p>
                                </div>
                                <div className="w-px h-10 bg-primary/20"></div>
                                <div className="text-center md:text-left">
                                    <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Avg. Rating</p>
                                    <div className="flex items-center gap-2">
                                        <p className="text-2xl font-bold">{profileData.stats.avgRating}</p>
                                        <span className="material-symbols-outlined text-amber-400 text-xl">star</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Content Grid Section - Only show for dashboard */}
                {activeSection === 'dashboard' && (
                    <>
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-bold">Published Prompts</h3>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setActiveTab('latest')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${activeTab === 'latest'
                                        ? 'bg-primary text-white border-primary'
                                        : 'bg-white border-slate-200 text-slate-600 hover:border-primary/30'
                                        }`}
                                >
                                    Latest
                                </button>
                                <button
                                    onClick={() => setActiveTab('popular')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${activeTab === 'popular'
                                        ? 'bg-primary text-white border-primary'
                                        : 'bg-white border-slate-200 text-slate-600 hover:border-primary/30'
                                        }`}
                                >
                                    Most Popular
                                </button>
                            </div>
                        </div>

                        {/* Prompt Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                            {/* Upload New Prompt Card */}
                            <Link href="/post-prompt" className="border-2 border-dashed border-primary/20 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center p-6 sm:p-8 group hover:border-primary/50 transition-all cursor-pointer bg-primary/5">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-all">
                                    <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">add</span>
                                </div>
                                <p className="font-bold text-slate-400 group-hover:text-primary transition-colors text-sm sm:text-base">Upload New Prompt</p>
                            </Link>
                            {userPrompts.map((prompt) => (
                                <div key={prompt.id} className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-slate-100 hover:border-primary/40 transition-all">
                                    <div className="aspect-video relative overflow-hidden">
                                        <div
                                            className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                                            style={{ backgroundImage: `url(${prompt.image})` }}
                                        />
                                        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex gap-2">
                                            <span className="bg-black/60 backdrop-blur-md text-[8px] sm:text-[10px] text-white font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded uppercase tracking-wider">
                                                {prompt.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-3 sm:p-4 md:p-5">
                                        <h4 className="font-bold text-sm sm:text-base md:text-lg mb-2 line-clamp-1 sm:line-clamp-2 group-hover:text-primary transition-colors">{prompt.title}</h4>
                                        <p className="text-slate-500 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-1 sm:line-clamp-2 leading-relaxed">{prompt.description}</p>
                                        <div className="flex items-center justify-between pt-2 sm:pt-4 border-t border-slate-100">
                                            <div className="flex items-center gap-1">
                                                <span className="material-symbols-outlined text-amber-400 text-sm sm:text-base">star</span>
                                                <span className="text-sm sm:text-base font-bold">{prompt.rating}</span>
                                                <span className="text-xs text-slate-500 ml-1">({prompt.reviews})</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="text-base sm:text-lg font-bold text-primary">{prompt.price}</span>
                                                <span className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Credits</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Sales Section */}
                {activeSection === 'sales' && (
                    <div className="space-y-8">
                        {/* Page Title & Subtitle */}
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight text-slate-900">Internal Wallet</h1>
                            <p className="text-slate-500 mt-2 text-lg">Track your earnings and usage across the marketplace.</p>
                        </div>

                        {/* Dashboard Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Main Balance & Trend Section */}
                            <div className="lg:col-span-2 space-y-8">
                                {/* Credits Hero Card */}
                                <div className="bg-primary rounded-2xl p-8 text-white shadow-xl shadow-primary/20 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8 opacity-10">
                                        <span className="material-symbols-outlined text-9xl">account_balance_wallet</span>
                                    </div>
                                    <div className="relative z-10">
                                        <p className="text-primary-100 text-sm font-medium uppercase tracking-widest opacity-80">Available Credits</p>
                                        <div className="mt-4 flex items-baseline gap-2">
                                            <span className="text-6xl font-bold tracking-tighter">{profileData.balance}.00</span>
                                            <span className="text-2xl font-medium opacity-70">CR</span>
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
                                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
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
                            <div className="lg:col-span-1 space-y-6">
                                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col h-full">
                                    <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                                        <h3 className="text-slate-800 font-bold">Recent Activity</h3>
                                        <button className="text-primary text-sm font-semibold hover:underline">View All</button>
                                    </div>
                                    <div className="divide-y divide-slate-50 overflow-y-auto max-h-[500px]">
                                        {/* Transaction Item 1 */}
                                        <div className="p-5 hover:bg-slate-50/80 transition-colors group">
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                                                        <span className="material-symbols-outlined text-lg">shopping_cart</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">Cyberpunk Portrait</p>
                                                        <p className="text-[11px] text-slate-400 font-medium mt-0.5">Prompt Purchase • Today</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm font-bold text-red-500">-20.00</p>
                                                    <p className="text-[10px] text-slate-400 uppercase font-bold">CR</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Transaction Item 2 */}
                                        <div className="p-5 hover:bg-slate-50/80 transition-colors group">
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-10 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center">
                                                        <span className="material-symbols-outlined text-lg">sell</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">Minimalist Logo Gen</p>
                                                        <p className="text-[11px] text-slate-400 font-medium mt-0.5">Sale Earning • Yesterday</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm font-bold text-emerald-500">+45.00</p>
                                                    <p className="text-[10px] text-slate-400 uppercase font-bold">CR</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Transaction Item 3 */}
                                        <div className="p-5 hover:bg-slate-50/80 transition-colors group">
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                                        <span className="material-symbols-outlined text-lg">card_giftcard</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">Marketplace Reward</p>
                                                        <p className="text-[11px] text-slate-400 font-medium mt-0.5">Platform Bonus • 2d ago</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm font-bold text-primary">+10.00</p>
                                                    <p className="text-[10px] text-slate-400 uppercase font-bold">CR</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Transaction Item 4 */}
                                        <div className="p-5 hover:bg-slate-50/80 transition-colors group">
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-10 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center">
                                                        <span className="material-symbols-outlined text-lg">sell</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">Abstract Art Suite</p>
                                                        <p className="text-[11px] text-slate-400 font-medium mt-0.5">Sale Earning • 3d ago</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm font-bold text-emerald-500">+120.00</p>
                                                    <p className="text-[10px] text-slate-400 uppercase font-bold">CR</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Transaction Item 5 */}
                                        <div className="p-5 hover:bg-slate-50/80 transition-colors group">
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                                                        <span className="material-symbols-outlined text-lg">shopping_cart</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">SEO Blog Tool</p>
                                                        <p className="text-[11px] text-slate-400 font-medium mt-0.5">Prompt Purchase • 5d ago</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm font-bold text-red-500">-15.00</p>
                                                    <p className="text-[10px] text-slate-400 uppercase font-bold">CR</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 bg-slate-50/50 flex flex-col items-center justify-center text-center">
                                        <span className="material-symbols-outlined text-slate-300 mb-2">history</span>
                                        <p className="text-xs font-medium text-slate-400">Showing last 7 days of activity</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Stats / Meta Info */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                                <div className="size-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                                    <span className="material-symbols-outlined">trending_down</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Spent</p>
                                    <p className="text-xl font-bold text-slate-800">450.00 CR</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                                <div className="size-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                                    <span className="material-symbols-outlined">payments</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Lifetime Earned</p>
                                    <p className="text-xl font-bold text-slate-800">{profileData.stats.creditsEarned} CR</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
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
                )}

                {/* Settings Section */}
                {activeSection === 'settings' && (
                    <div className="bg-white rounded-2xl p-8 border border-slate-100">
                        <h3 className="text-xl font-bold mb-6">Settings</h3>
                        <div className="text-center py-12">
                            <span className="material-symbols-outlined text-6xl text-slate-300 mb-4 block">settings</span>
                            <p className="text-slate-500">Settings panel coming soon</p>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
