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

    return (
        <div className="min-h-screen bg-[#f6f6f8]">
            <div className="flex">
                {/* Sidebar */}
                <aside className="w-72 border-r border-primary/10 bg-white/50 hidden lg:flex flex-col sticky top-0 h-screen p-6">
                    <div className="flex items-center gap-3 mb-10 px-2">
                        <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                            <span className="material-symbols-outlined text-white text-xl">electric_bolt</span>
                        </div>
                        <h1 className="text-xl font-bold tracking-tight">Prompt<span className="text-primary">Market</span></h1>
                    </div>

                    <nav className="space-y-1 mb-8">
                        <Link href="/profile" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-medium">
                            <span className="material-symbols-outlined text-xl">dashboard</span>
                            Dashboard
                        </Link>
                        <Link href="/profile" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-primary/5 hover:text-primary transition-all">
                            <span className="material-symbols-outlined text-xl">analytics</span>
                            My Sales
                        </Link>
                        <Link href="/profile" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-primary/5 hover:text-primary transition-all">
                            <span className="material-symbols-outlined text-xl">settings</span>
                            Settings
                        </Link>
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

                    {/* Content Grid Section */}
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
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {/* Upload New Prompt Card */}
                        <Link href="/post-prompt" className="border-2 border-dashed border-primary/20 rounded-2xl flex flex-col items-center justify-center p-8 group hover:border-primary/50 transition-all cursor-pointer bg-primary/5">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
                                <span className="material-symbols-outlined text-primary text-3xl">add</span>
                            </div>
                            <p className="font-bold text-slate-400 group-hover:text-primary transition-colors">Upload New Prompt</p>
                        </Link>
                        {userPrompts.map((prompt) => (
                            <div key={prompt.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-primary/40 transition-all">
                                <div className="aspect-video relative overflow-hidden">
                                    <div
                                        className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                                        style={{ backgroundImage: `url(${prompt.image})` }}
                                    />
                                    <div className="absolute top-3 left-3 flex gap-2">
                                        <span className="bg-black/60 backdrop-blur-md text-[10px] text-white font-bold px-2 py-1 rounded uppercase tracking-wider">
                                            {prompt.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h4 className="font-bold text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors">{prompt.title}</h4>
                                    <p className="text-slate-500 text-sm mb-4 line-clamp-2 leading-relaxed">{prompt.description}</p>
                                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-amber-400 text-sm">star</span>
                                            <span className="text-sm font-bold">{prompt.rating}</span>
                                            <span className="text-xs text-slate-500 ml-1">({prompt.reviews})</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="text-lg font-bold text-primary">{prompt.price}</span>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Credits</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
