'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PostPrompt() {
  const [formData, setFormData] = useState({
    title: '',
    platform: 'Midjourney',
    category: 'Illustration',
    promptText: '',
    price: '',
    tags: [],
    image: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Section */}
          <div className="flex-1 max-w-4xl">
            <header className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Create New Prompt</h1>
              <p className="text-slate-500 text-base font-light">Share your creative engineering and earn credits from the community.</p>
            </header>

            {/* Stepper */}
            <div className="flex items-center mb-8">
              <div className="flex items-center text-primary group cursor-pointer">
                <div className="w-10 h-10 rounded-2xl bg-primary text-white flex items-center justify-center font-bold shadow-lg shadow-primary/20">1</div>
                <div className="ml-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">Step 01</p>
                  <p className="font-bold text-sm">Basics</p>
                </div>
              </div>
              <div className="flex-1 h-[2px] bg-slate-200 mx-6"></div>
              <div className="flex items-center text-slate-400">
                <div className="w-10 h-10 rounded-2xl border-2 border-slate-200 flex items-center justify-center font-bold">2</div>
                <div className="ml-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">Step 02</p>
                  <p className="font-bold text-sm">Architecture</p>
                </div>
              </div>
              <div className="flex-1 h-[2px] bg-slate-200 mx-6"></div>
              <div className="flex items-center text-slate-400">
                <div className="w-10 h-10 rounded-2xl border-2 border-slate-200 flex items-center justify-center font-bold">3</div>
                <div className="ml-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">Step 03</p>
                  <p className="font-bold text-sm">Review</p>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <form className="space-y-8">
              {/* Step 1: General Info */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div className="group">
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 group-focus-within:text-primary transition-colors">Prompt Title</label>
                    <input
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all font-medium text-slate-800 placeholder:text-slate-300"
                      placeholder="e.g. Ultra-Realistic Architecture Render"
                      type="text"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">AI Platform</label>
                      <div className="relative">
                        <select
                          name="platform"
                          value={formData.platform}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none appearance-none font-medium text-slate-800"
                        >
                          <option>ChatGPT</option>
                          <option>Midjourney</option>
                          <option>DALL-E 3</option>
                          <option>Stable Diffusion</option>
                          <option>Claude</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Category</label>
                      <div className="relative">
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none appearance-none font-medium text-slate-800"
                        >
                          <option>Illustration</option>
                          <option>Photography</option>
                          <option>Copywriting</option>
                          <option>Programming</option>
                          <option>Marketing</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Architecture Description */}
                <div className="pt-8 border-t border-slate-100 space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Engineered Prompt Text</label>
                    <div className="relative">
                      <textarea
                        name="promptText"
                        value={formData.promptText}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none font-mono text-sm leading-relaxed min-h-[140px]"
                        placeholder="Paste your meticulously crafted prompt architecture here..."
                      ></textarea>
                      <div className="absolute top-3 right-3">
                        <span className="material-symbols-outlined text-slate-200 text-2xl">code</span>
                      </div>
                    </div>
                    <p className="mt-4 text-xs font-medium text-slate-400 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px]">info</span>
                      Use brackets [subject] for parts users can customize.
                    </p>
                  </div>
                </div>

                {/* Pricing & Assets */}
                <div className="pt-8 border-t border-slate-100 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Credit Price</label>
                      <div className="relative group">
                        <input
                          name="price"
                          value={formData.price}
                          onChange={handleChange}
                          className="w-full px-4 py-3 pl-12 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none font-bold text-slate-800 text-base"
                          type="number"
                        />
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                          <span className="material-symbols-outlined text-primary text-xl fill-[1]">monetization_on</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Visual Prototype</label>
                      <div className="relative">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="image-upload"
                        />
                        <label 
                          htmlFor="image-upload"
                          className="border-2 border-dashed border-slate-200 rounded-2xl p-3 text-center bg-white/50 hover:border-primary/50 transition-all cursor-pointer group h-[50px] flex items-center justify-center gap-2"
                        >
                          {formData.image ? (
                            <>
                              <span className="material-symbols-outlined text-primary">check_circle</span>
                              <p className="text-xs font-bold text-primary">Image Uploaded</p>
                            </>
                          ) : (
                            <>
                              <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">upload_file</span>
                              <p className="text-xs font-bold text-slate-500">Upload Reference Image</p>
                            </>
                          )}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                <button className="px-6 py-3 font-bold text-slate-400 hover:text-slate-800 transition-colors flex items-center gap-2 text-sm uppercase tracking-widest" type="button">
                  <span className="material-symbols-outlined text-xl">arrow_back</span>
                  Save Draft
                </button>
                <div className="flex gap-4">
                  <button className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-blue-700 shadow-xl shadow-primary/20 transition-all flex items-center gap-3 uppercase tracking-widest text-sm" type="button">
                    Publish Prompt
                    <span className="material-symbols-outlined text-lg">rocket_launch</span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Preview Sidebar */}
          <div className="lg:w-80">
            <div className="sticky top-24">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">Live Preview</h2>
                <div className="flex items-center gap-2 text-[10px] text-emerald-500 font-bold bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Real-time
                </div>
              </div>

              {/* Professional Preview Card - Matching Home Style */}
              <div className="group relative bg-white rounded-xl overflow-hidden border border-slate-100 shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {formData.image ? (
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${formData.image})` }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                      <span className="material-symbols-outlined text-4xl text-slate-400">image</span>
                    </div>
                  )}
                  {/* Floating Price */}
                  <div className="absolute top-4 right-4 glass-effect px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm">
                    <span className="material-symbols-outlined text-primary text-[18px] fill-[1]">monetization_on</span>
                    <span className="text-sm font-bold text-slate-800">{formData.price || '0'} Credits</span>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-emerald-500/90 text-white px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    {formData.category || 'Draft'}
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-3">
                  <div className="flex items-start justify-between">
                    <div className="min-w-0">
                      <h4 className="font-bold text-sm leading-tight group-hover:text-primary transition-colors truncate">
                        {formData.title || 'Untitled Prompt'}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 font-medium truncate">
                        {formData.platform || 'Platform'} • {formData.category || 'Category'}
                      </p>
                    </div>
                  </div>
                  {formData.promptText && (
                    <div className="pt-3 border-t border-slate-50">
                      <p className="text-xs text-slate-600 font-mono line-clamp-2 leading-relaxed">
                        {formData.promptText}
                      </p>
                    </div>
                  )}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                    <div className="flex items-center gap-2">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[8px] font-bold border border-white">
                        JD
                      </div>
                      <span className="text-xs font-bold text-slate-600">John Doe</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-400">
                      <span className="material-symbols-outlined text-[16px] text-yellow-500 fill-[1]">star</span>
                      <span className="text-slate-700 text-xs">New</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* Footer Cleanup */}
      <footer className="mt-16 border-t border-slate-100 bg-white py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg text-white text-[20px]">
              <span className="material-symbols-outlined block">electric_bolt</span>
            </div>
            <h2 className="text-lg font-bold tracking-tight">PromptMarket</h2>
          </div>
          <div className="flex gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <a className="hover:text-primary transition-colors" href="#">Terms</a>
            <a className="hover:text-primary transition-colors" href="#">Privacy</a>
            <a className="hover:text-primary transition-colors" href="#">Support</a>
          </div>
          <p className="text-xs font-medium text-slate-400">© 2026 PromptMarket. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
