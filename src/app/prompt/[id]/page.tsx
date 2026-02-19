'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { promptData } from '@/lib/data';

export default function PromptDetails() {
    const params = useParams();
    const id = params.id;
    const prompt = promptData.find(p => p.id === Number(id));

    if (!prompt) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background-light">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Prompt Not Found</h1>
                    <Link href="/" className="text-primary hover:underline">Return to Marketplace</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background-light text-[#0d101b] antialiased min-h-screen">

            <main className="max-w-7xl mx-auto px-6 py-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
                    <Link href="/" className="hover:text-primary transition-colors">Marketplace</Link>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    <span>{prompt.category.split(' • ')[0]}</span>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    <span className="text-primary">{prompt.title}</span>
                </nav>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* LEFT COLUMN: Main Content */}
                    <div className="flex-1 space-y-12">
                        {/* Hero Section & Title */}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{prompt.title}</h1>
                            <div className="flex flex-wrap items-center gap-6">
                                <div className="flex items-center gap-2.5">
                                    {prompt.creatorAvatar ? (
                                        <img
                                            alt="User Avatar"
                                            className="w-8 h-8 rounded-full border border-white shadow-sm"
                                            data-alt="Portrait of the prompt creator"
                                            src={prompt.creatorAvatar}
                                        />
                                    ) : (
                                        <div className={`w-8 h-8 rounded-full ${prompt.creatorBg} flex items-center justify-center text-primary text-[10px] font-bold border border-white shadow-sm`}>
                                            {prompt.creatorInitials || prompt.creatorIcon && <span className="material-symbols-outlined text-[16px]">{prompt.creatorIcon}</span> || '??'}
                                        </div>
                                    )}
                                    <span className="text-sm font-bold text-slate-600">{prompt.creator}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                    <span className="material-symbols-outlined text-[14px] fill-[1]">verified</span>
                                    {prompt.category.split(' • ')[0]}
                                </div>
                                <div className="flex items-center gap-1.5 text-sm font-bold text-slate-500">
                                    <span className="material-symbols-outlined text-[18px] text-yellow-500 fill-[1]">star</span>
                                    <span>4.9 (1.2k Reviews)</span>
                                </div>
                            </div>
                        </div>

                        {/* Media Gallery */}
                        <div className="space-y-4">
                            <div className="aspect-video w-full rounded-3xl overflow-hidden relative group border-4 border-white shadow-xl">
                                <img
                                    alt="Main Preview"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    data-alt={prompt.dataAlt}
                                    src={prompt.image}
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <p className="text-white text-sm font-medium">Example output: {prompt.title}</p>
                                </div>
                            </div>
                        </div>

                        {/* Prompt Description */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold flex items-center gap-2.5">
                                <span className="material-symbols-outlined text-primary">description</span>
                                Description
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-lg font-light">
                                {prompt.fullDescription}
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 pt-4">
                                <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                                    <h4 className="font-bold text-sm mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                                        Key Benefits
                                    </h4>
                                    <ul className="text-xs space-y-3 font-medium text-slate-500">
                                        <li className="flex items-center gap-2">• High consistency in lighting styles</li>
                                        <li className="flex items-center gap-2">• Modular syntax for easy character swap</li>
                                        <li className="flex items-center gap-2">• Pre-configured negative prompt included</li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                                    <h4 className="font-bold text-sm mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-[20px]">settings_input_component</span>
                                        Parameters
                                    </h4>
                                    <ul className="text-xs space-y-3 font-medium text-slate-500">
                                        <li className="flex items-center gap-2">• Aspect Ratio: 16:9 or 9:16</li>
                                        <li className="flex items-center gap-2">• Custom variables: Included</li>
                                        <li className="flex items-center gap-2">• Version: Latest</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Blurred Prompt Placeholder */}
                        <section className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold uppercase tracking-tight">The Prompt</h2>
                                <span className="text-[10px] font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-widest">PRO VERSION ONLY</span>
                            </div>
                            <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white p-8 md:p-12 shadow-inner">
                                <div className="absolute inset-0 flex items-center justify-center z-10 px-6">
                                    <div className="text-center p-8 bg-white/80 backdrop-blur-xl rounded-3xl border border-white shadow-2xl max-w-sm">
                                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                            <span className="material-symbols-outlined text-primary text-4xl fill-[1]">lock</span>
                                        </div>
                                        <p className="font-bold mb-2 text-xl">Unlock Premium Access</p>
                                        <p className="text-sm text-slate-500 mb-8 font-medium">Use your credits to reveal the full engineered prompt architecture.</p>
                                        <button className="w-full py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:bg-blue-700 transition-all">Unlock for {prompt.price}</button>
                                    </div>
                                </div>
                                <div className="blur-[8px] opacity-30 select-none pointer-events-none">
                                    <p className="font-mono text-sm leading-10 text-slate-800">
                                        /imagine prompt: engineering_structure_{prompt.id} --style raw --v 6.0 <br />
                                        Lighting: volumetric_fog, neon_red_cyan_interplay, rim_light_700 <br />
                                        Texture: intricate_fiber_optics, weathered_chrome, facial_displacement_mapping <br />
                                        Negative: low_res, blurry, distorted_anatomy, generic_sci_fi, oversaturated_yellows
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* RIGHT COLUMN: Sticky Purchase Sidebar */}
                    <aside className="lg:w-96">
                        <div className="sticky top-24 space-y-6">
                            <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-2xl shadow-slate-200/50">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-widest">Active Deal</span>
                                </div>
                                <div className="flex items-baseline gap-2 mb-8">
                                    <span className="text-5xl font-black text-slate-900 tracking-tight">{prompt.price.split(' ')[0]}</span>
                                    <span className="text-lg font-bold text-slate-400">CREDITS</span>
                                </div>
                                <div className="space-y-5 mb-10">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="font-medium text-slate-400">Your Wallet</span>
                                        <span className="font-bold text-slate-900 flex items-center gap-1.5">
                                            <span className="material-symbols-outlined text-primary text-[18px] fill-[1]">account_balance_wallet</span>
                                            1,200
                                        </span>
                                    </div>
                                    <div className="h-[1px] bg-slate-100"></div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="font-medium text-slate-400">Model Compatibility</span>
                                        <span className="font-bold text-slate-900">{prompt.category.split(' • ')[0]}</span>
                                    </div>
                                </div>
                                <button className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-primary/20 group transition-all">
                                    <span className="material-symbols-outlined group-hover:animate-pulse fill-[1]">bolt</span>
                                    UNLOCK ARCHITECTURE
                                </button>
                                <div className="mt-8 text-center">
                                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-6">Secured by PromptPay</p>
                                    <div className="flex items-center justify-center gap-6 text-[10px] font-bold text-slate-500">
                                        <span className="flex items-center gap-1.5 uppercase">
                                            <span className="material-symbols-outlined text-[16px] text-primary">verified_user</span> 7-day refund
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 rounded-[2rem] bg-slate-900 text-white shadow-xl overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                                <h3 className="font-bold text-sm mb-6 uppercase tracking-widest text-slate-400 relative z-10">Specs & Stats</h3>
                                <div className="grid grid-cols-2 gap-8 relative z-10">
                                    <div>
                                        <p className="text-[10px] uppercase text-slate-500 font-bold mb-1">Sales</p>
                                        <p className="text-2xl font-black">{prompt.sales}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase text-slate-500 font-bold mb-1">Impact</p>
                                        <p className="text-2xl font-black">{prompt.impact}</p>
                                    </div>
                                    <div className="col-span-2">
                                        <p className="text-[10px] uppercase text-slate-500 font-bold mb-3">Certified Models</p>
                                        <div className="flex flex-wrap gap-2">
                                            {prompt.verifiedModels.map((model, idx) => (
                                                <span key={idx} className="px-3 py-1.5 bg-white/10 rounded-lg text-[10px] font-bold border border-white/10">{model}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>

            <footer className="mt-20 border-t border-slate-200 bg-white py-16">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex items-center gap-2">
                        <div className="bg-primary p-1.5 rounded-lg text-white">
                            <span className="material-symbols-outlined text-xl block">electric_bolt</span>
                        </div>
                        <h2 className="text-xl font-bold tracking-tight">PromptMarket</h2>
                    </div>
                    <div className="flex gap-10 text-sm font-bold text-slate-400 uppercase tracking-widest">
                        <a className="hover:text-primary transition-colors" href="#">Terms</a>
                        <a className="hover:text-primary transition-colors" href="#">Privacy</a>
                        <a className="hover:text-primary transition-colors" href="#">Support</a>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
                            <span className="material-symbols-outlined text-[18px]">alternate_email</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all">
                            <span className="material-symbols-outlined text-[18px]">public</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
