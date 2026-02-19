'use client';

import { useState } from 'react';
import Link from 'next/link';

const promptData = [
  {
    id: 1,
    title: 'Hyper-Realistic Cyberpunk Portrait',
    category: 'Midjourney',
    model: 'Midjourney v7',
    price: 15,
    rating: 4.8,
    reliability: '98% Reliability',
    reliabilityType: 'emerald',
    creator: '@neon_arc',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0gEfY77P8og-t9s-StwLL50G1Kdh_qBP-RXyRh2V3hm5l4M_rCqeDgSYVJK3EqbyEuQlMxAF69HBjmhWJxSR-XyQEENOTir16rTcei3IQn4dGAxGn7QWLFHTXU9exp_az796KuzdNKlOjluXlFkacWLBT1D36MOjmVnMcIDrdyktN52HsUQho69MKXlCb2FAnQaB8s_5tclye_LIYnjaokIGZsXylVvOnbDsBPx9xmpgGdC-7NALHK42h60DgC6wFOdaoV3o1fNo',
    dataAlt: 'Cyberpunk portrait'
  },
  {
    id: 2,
    title: 'Minimalist Architectural Render',
    category: 'Stable Diffusion',
    model: 'Stable Diffusion 3',
    price: 12,
    rating: 4.5,
    reliability: '95% Reliability',
    reliabilityType: 'emerald',
    creator: '@archizoom',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYEC-sCe_gJmifDnY0EaBrToNnVey3Ab9bt46kjYSRJWR01i8Ztn3Nef80uApuD1My_rd2_QW0HXM4v9gWk3LSUHJQnXy4ZCAf59uvaQvFvzE733SJw6qzhbncq3eMoEEfGnJk2XvYfwPaI2f0vQ-rJEBUOh6N00Mn9Xv59YyV4FPs7LhfKZytFE_VhnXrg3BwDEo-TXZY3JQ-CD3W3wkHlUV9tFObTOE0jeQjOIaYUC4UqvhWVYsAAGxaw4f4QrknNhMx1j9Yrj8',
    dataAlt: 'Architectural render'
  },
  {
    id: 3,
    title: 'Strategic Business Logic Agent',
    category: 'GPT-4',
    model: 'GPT-5 Turbo',
    price: 25,
    rating: 4.9,
    reliability: '100% Reliable',
    reliabilityType: 'blue',
    creator: '@logic_smith',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALrfzOAW8Q4zK5GkcrvbDnTWc4_UwZgVjmgFEQp_srS6qTjyd8JhcvwgjfpuAUZKzUIFqCSY5CZnul2XVbJQ9laMK0bH-2tgjEGNu6gzZLszPnOI7PkZeYJhIreXWivsZWxA3_3023sMjqvDEJv2lm03P7su92XdDa_DWmUacOPoTaMHIUrW3A_29Mq3nQYNNxW74BlN-eOtu2KLgMdKngbcscu8on7EdX2GTgGFfvsWiGXaqPy-f5h7I2RcB81j_fhkIgJO3Lq2U',
    dataAlt: 'Data visualization'
  },
  {
    id: 4,
    title: 'Organic Liquid Motion Background',
    category: 'DALL-E 3',
    model: 'DALL-E 4',
    price: 10,
    rating: 4.2,
    reliability: '92% Reliability',
    reliabilityType: 'emerald',
    creator: '@fluid_master',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvRZSLWDavVwIcq5GlOseofZmkO62eJ9rusYAn2NNFwAOoMIYE-1Nq1v8eqQd9EBrHsYMp5QZ7antTAnkw4bTxccogwuBOX1TO0D2-koVoml2FAglDwjfSvthGTd0wqae5e8d1kb7DN1VXhbcem9v0Ae8g9Ven8TE6O-WorFE05IRpwzsGzoXSw1ERB-Ytj_LygHPDaV1nbRlHQENogmgRws9z2YaQapJscJNUiON4En9AmTnJYdnvB32OOMODSQjVpx5MO2vFroY',
    dataAlt: 'Liquid motion'
  },
  {
    id: 7,
    title: '8K Nature Forest Photography',
    category: 'Midjourney',
    model: 'Midjourney v7',
    price: 18,
    rating: 4.7,
    reliability: '97% Reliability',
    reliabilityType: 'emerald',
    creator: '@nature_pix',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI987ybQdbxwPydnrprUfqA62O7YApVvRSJ7TCft7JoahgzuLRlr-wXCzGOxKM-23bF3DYoXNDtxBqBsbQ16ws1p6UDRj2nlIhnqYh0zxmHfloczbCQWbAQzepllwO4irXJ7SgGMRlKKrWqoyNunVhxXvuoGwhaxzL-9J6qdnlzRh0t4pLWEVO-bzmsocuFqSbO7QWAHJLxiZ7Doh_g7MroooFZpLBRkemaCRNDDKViwfOA0w771JCETACLhpG1oUj6xdRzgfuDCU',
    dataAlt: 'Nature forest'
  },
  {
    id: 8,
    title: 'Enterprise Code Sec Audit',
    category: 'Claude',
    model: 'Claude 4 Opus',
    price: 35,
    rating: 5.0,
    reliability: '100% Reliable',
    reliabilityType: 'blue',
    creator: '@sec_dev',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyw-AFQh5cV4gJ8Bq_BGb4TzktX_Lcy1vjsZYNAN-uRwVOof9ZGYjd3-K-SI4Zwh8L63yckvVAsMNos4zETrgvOWGBzg_ZyYo147vq3ZWLdNJZSNUB0ctArAwU8rJj0bMiIw5p1H7i5qNbbyR4ymU4SXp4HDHnXtspVhcKdYd7OzEd8_BRLysbEnfgnUYfCCtE22q8AvxFnUnmzYO_msGM2BzFoeN8OGrmx094CLVlkm6a5NPYXv8MgeolHf-iQzdHJFqZ-J79Uq4',
    dataAlt: 'Code sequence'
  }
];

const filters: string[] = [
  'All Prompts',
  'Trending',
  'New',
  'Top Rated'
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('All Prompts');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [minRating, setMinRating] = useState<number>(0);
  const [selectedReliability, setSelectedReliability] = useState<string[]>([]);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('Relevant');

  // Filtering Logic
  const filteredPrompts = promptData.filter(prompt => {
    // Category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes(prompt.category)) return false;

    // Model filter
    if (selectedModels.length > 0 && !selectedModels.includes(prompt.model)) return false;

    // Reliability filter
    if (selectedReliability.length > 0 && !selectedReliability.includes(prompt.reliabilityType)) return false;

    // Price filter
    if (selectedPriceRange !== 'all') {
      if (selectedPriceRange === 'free' && prompt.price > 0) return false;
      if (selectedPriceRange === '1-10' && (prompt.price < 1 || prompt.price > 10)) return false;
      if (selectedPriceRange === '11-25' && (prompt.price < 11 || prompt.price > 25)) return false;
      if (selectedPriceRange === '25+' && prompt.price <= 25) return false;
    }

    // Rating filter
    if (prompt.rating < minRating) return false;

    // Search filter
    if (searchQuery && !prompt.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;

    return true;
  }).sort((a, b) => {
    if (sortBy === 'Price: Low to High') return a.price - b.price;
    if (sortBy === 'Price: High to Low') return b.price - a.price;
    if (sortBy === 'Top Rated') return b.rating - a.rating;
    return 0; // Default: Relevant
  });

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  };

  const toggleModel = (model: string) => {
    setSelectedModels(prev => prev.includes(model) ? prev.filter(m => m !== model) : [...prev, model]);
  };

  const toggleReliability = (rel: string) => {
    setSelectedReliability(prev => prev.includes(rel) ? prev.filter(r => r !== rel) : [...prev, rel]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Mobile Top Navigation */}
      <nav className="lg:hidden sticky top-0 z-50 w-full glass-effect border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg text-white">
              <span className="material-symbols-outlined text-2xl block">electric_bolt</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight">PromptMarket</h1>
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowMobileFilters(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-800 text-sm font-bold transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">tune</span>
              <span>Filter</span>
            </button>
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-800 text-sm font-bold transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">tune</span>
              <span>{showSidebar ? 'Hide' : 'Show'} Filters</span>
            </button>
            <Link href="/profile">
              <div
                className="size-10 rounded-full border-2 border-white bg-cover bg-center shadow-sm cursor-pointer hover:border-primary transition-colors"
                data-alt="User profile avatar close up"
                style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuDyrRnmar-je_OLpz_YnW4YsUyEjxLLzEKr5G_wEKsMZLBqxTdGY3mCT315-wtapbd9Ia88qwnDH9-Dtk9Ga6JB9D0YU6SXqLXYUkBsKGmy21uZJwTdF2JuFI2jyfWY0IJF0NM2gJElFFqfdXfBKq2Cr74e2l-p2Or4OpsWUkf9710LL46LwqntWg86KD-6t6S2r8HuJ-MOrNFOq7BQ4Bu8zO3L-aImdNQuNKqhrTSLO3pzufzF9dJoP_X6tms6fGYdphb7H2ZWc5k)' }}
              />
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Filters Drawer Overlay */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowMobileFilters(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-[360px] bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-lg font-bold">Filters & Options</h2>
              <button onClick={() => setShowMobileFilters(false)} className="size-10 rounded-full flex items-center justify-center hover:bg-slate-100 transition-all">
                <span className="material-symbols-outlined text-slate-400">close</span>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar">
              {/* Sort By */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-600 outline-none"
                >
                  <option>Relevant</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Top Rated</option>
                </select>
              </div>

              {/* Categories */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Categories</h4>
                <div className="space-y-3">
                  {['Midjourney', 'DALL-E 3', 'GPT-4', 'Claude', 'Stable Diffusion'].map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="w-5 h-5 text-primary border-slate-300 rounded focus:ring-primary"
                      />
                      <span className="text-slate-600 font-medium">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reliability */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Reliability</h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedReliability.includes('emerald')}
                      onChange={() => toggleReliability('emerald')}
                      className="w-5 h-5 text-emerald-500 border-slate-300 rounded"
                    />
                    <span className="text-slate-600 font-medium">Emerald Tier (98%+)</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedReliability.includes('blue')}
                      onChange={() => toggleReliability('blue')}
                      className="w-5 h-5 text-blue-500 border-slate-300 rounded"
                    />
                    <span className="text-slate-600 font-medium">Verified Blue</span>
                  </label>
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Price Range</h4>
                <div className="space-y-3">
                  {[
                    { label: 'All Prices', value: 'all' },
                    { label: 'Free', value: 'free' },
                    { label: '1-10 Credits', value: '1-10' },
                    { label: '11-25 Credits', value: '11-25' },
                    { label: '25+ Credits', value: '25+' }
                  ].map((range) => (
                    <label key={range.value} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="mobile-price"
                        checked={selectedPriceRange === range.value}
                        onChange={() => setSelectedPriceRange(range.value)}
                        className="w-5 h-5 text-primary border-slate-300 focus:ring-primary"
                      />
                      <span className="text-slate-600 font-medium">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-slate-100 bg-slate-50">
              <button onClick={() => setShowMobileFilters(false)} className="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all">
                Show {filteredPrompts.length} Results
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-1">
        {/* Left Navigation Sidebar */}
        <nav className="w-20 glass-effect border-r border-white/20 hidden lg:flex flex-col items-center sticky top-0 h-screen py-6 gap-6 shrink-0">
          <Link href="/" className="flex flex-col items-center group mb-4">
            <div className="bg-primary p-2 rounded-xl text-white shadow-md shadow-primary/30">
              <span className="material-symbols-outlined text-2xl block">electric_bolt</span>
            </div>
          </Link>
          <div className="flex flex-col items-center gap-2 w-full px-3">
            <a href="#" className="flex flex-col items-center gap-1 w-full rounded-xl py-3 bg-primary/10 text-primary transition-all">
              <span className="material-symbols-outlined text-xl">explore</span>
              <span className="text-[9px] font-bold uppercase tracking-wider">Explore</span>
            </a>
            <Link href="/profile" className="flex flex-col items-center gap-1 w-full rounded-xl py-3 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-all">
              <span className="material-symbols-outlined text-xl">person</span>
              <span className="text-[9px] font-bold uppercase tracking-wider">Profile</span>
            </Link>
          </div>
        </nav>

        {/* Filter Sidebar */}
        <aside className={`${showSidebar ? 'w-60 lg:flex' : 'w-0 hidden'} border-r border-slate-200 bg-white flex-col sticky top-0 h-screen overflow-y-auto no-scrollbar shrink-0 transition-all duration-300`}>
          {showSidebar && (
            <div className="p-5">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Filters</h2>
                <button
                  onClick={() => setShowSidebar(false)}
                  className="size-8 rounded-full flex items-center justify-center hover:bg-slate-100 transition-all"
                >
                  <span className="material-symbols-outlined text-slate-400 text-sm">close</span>
                </button>
              </div>

              <div className="space-y-7">
                {/* Sort By */}
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Sort By</h4>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600 focus:ring-primary outline-none"
                  >
                    <option>Relevant</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Top Rated</option>
                  </select>
                </div>

                {/* Categories */}
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Categories</h4>
                  <div className="space-y-2">
                    {['Midjourney', 'DALL-E 3', 'GPT-4', 'Claude', 'Stable Diffusion'].map((cat) => (
                      <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat)}
                          onChange={() => toggleCategory(cat)}
                          className="w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary"
                        />
                        <span className={`text-sm transition-colors ${selectedCategories.includes(cat) ? 'text-primary font-semibold' : 'text-slate-600 group-hover:text-slate-900'}`}>{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Reliability Tier */}
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Reliability</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedReliability.includes('emerald')}
                        onChange={() => toggleReliability('emerald')}
                        className="w-4 h-4 text-emerald-500 border-slate-300 rounded focus:ring-emerald-500"
                      />
                      <span className="text-sm text-slate-600 group-hover:text-slate-900">Emerald Tier (98%+)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedReliability.includes('blue')}
                        onChange={() => toggleReliability('blue')}
                        className="w-4 h-4 text-blue-500 border-slate-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-slate-600 group-hover:text-slate-900">Verified Blue</span>
                    </label>
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Price Range</h4>
                  <div className="space-y-2">
                    {[
                      { label: 'All', value: 'all' },
                      { label: 'Free', value: 'free' },
                      { label: '1–10 Credits', value: '1-10' },
                      { label: '11–25 Credits', value: '11-25' },
                      { label: '25+ Credits', value: '25+' }
                    ].map((range) => (
                      <label key={range.value} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="price"
                          checked={selectedPriceRange === range.value}
                          onChange={() => setSelectedPriceRange(range.value)}
                          className="w-4 h-4 text-primary border-slate-300 focus:ring-primary"
                        />
                        <span className="text-sm text-slate-600 group-hover:text-slate-900">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Min Rating</h4>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[4.5, 4.0, 3.5, 0].map((rate) => (
                      <button
                        key={rate}
                        onClick={() => setMinRating(rate)}
                        className={`py-1.5 rounded-md text-[10px] font-bold border transition-all ${minRating === rate ? 'bg-primary text-white border-primary' : 'bg-white text-slate-400 border-slate-200 hover:border-primary/50'}`}
                      >
                        {rate === 0 ? 'Any' : `${rate}⭐`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {(selectedCategories.length > 0 || selectedReliability.length > 0 || selectedPriceRange !== 'all' || minRating > 0 || searchQuery) && (
                  <button
                    onClick={() => {
                      setSelectedCategories([]);
                      setSelectedPriceRange('all');
                      setMinRating(0);
                      setSelectedReliability([]);
                      setSelectedModels([]);
                      setSearchQuery('');
                    }}
                    className="w-full py-2 rounded-lg text-xs font-bold text-red-500 border border-red-200 hover:bg-red-50 transition-all"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>
          )}
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto h-screen custom-scrollbar">
          <div className="w-[80%] mx-auto">
            {/* Sidebar Toggle Button */}
            {!showSidebar && (
              <div className="lg:flex justify-start mb-4 px-4 hidden">
                <button
                  onClick={() => setShowSidebar(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-bold transition-all active:scale-95"
                >
                  <span className="material-symbols-outlined text-[20px]">tune</span>
                  <span>Show Filters</span>
                </button>
              </div>
            )}
            {/* Hero / Search */}
            <section className="py-12 text-center relative">
              <div className="max-w-2xl mx-auto px-4">
                <div className="p-2 rounded-2xl shadow-xl border border-slate-200 flex items-center bg-white">
                  <div className="pl-4 text-slate-400">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent border-none focus:ring-0 text-slate-800 placeholder:text-slate-400 py-3 px-3 text-lg font-light"
                    placeholder="Search prompts..."
                    type="text"
                  />
                </div>
              </div>
            </section>

            {/* Quick Filter Tabs */}
            <section className="mb-10 px-4">
              <div className="flex gap-3 overflow-x-auto pb-4 custom-scrollbar whitespace-nowrap">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveTab(filter)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${activeTab === filter
                      ? 'bg-primary text-white'
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-primary/50'
                      }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </section>

            {/* Prompt Grid */}
            <section className="px-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                  {filteredPrompts.length} Results Found
                </h3>
              </div>

              {filteredPrompts.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
                  {filteredPrompts.map((prompt) => (
                    <Link key={prompt.id} href={`/prompt/${prompt.id}`} className="block">
                      <div className="prompt-card group bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
                        <div className="relative aspect-square overflow-hidden">
                          <div
                            className="prompt-image w-full h-full bg-cover bg-center transition-transform duration-500"
                            style={{ backgroundImage: `url(${prompt.image})` }}
                          />
                          <div className="absolute top-2 right-2 glass-effect px-2 py-1 rounded-md flex items-center gap-1">
                            <span className="material-symbols-outlined text-primary text-[14px] fill-[1]">token</span>
                            <span className="text-xs font-bold text-slate-800">{prompt.price}</span>
                          </div>
                          <div className={`absolute bottom-2 left-2 flex items-center gap-1 ${prompt.reliabilityType === 'emerald' ? 'bg-emerald-500/90' : 'bg-blue-500/90'} text-white px-1.5 py-0.5 rounded text-[9px] font-bold uppercase backdrop-blur-sm`}>
                            <span className="material-symbols-outlined text-[11px]">
                              {prompt.reliabilityType === 'emerald' ? 'check_circle' : 'new_releases'}
                            </span>
                            {prompt.reliability}
                          </div>
                        </div>
                        <div className="p-3">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="font-bold text-xs leading-tight group-hover:text-primary transition-colors truncate">{prompt.title}</h4>
                            <span className="text-[9px] bg-slate-100 px-1 py-0.5 rounded text-slate-500 font-bold ml-1 shrink-0">{prompt.rating}⭐</span>
                          </div>
                          <div className="flex items-center justify-between text-[9px] text-slate-400 font-medium">
                            <span className="truncate">{prompt.model}</span>
                            <span className="text-primary shrink-0 ml-1">{prompt.creator}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center">
                  <span className="material-symbols-outlined text-6xl text-slate-200 mb-4 block">search_off</span>
                  <p className="text-slate-500 text-lg">No prompts matches your current filters.</p>
                  <button
                    onClick={() => {
                      setSelectedCategories([]);
                      setSelectedPriceRange('all');
                      setMinRating(0);
                      setSelectedReliability([]);
                      setSelectedModels([]);
                      setSearchQuery('');
                    }}
                    className="mt-4 text-primary font-bold hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </section>

          </div>
        </main>
      </div>

      {/* Footer (outside flex container) */}
      <footer className="border-t border-slate-200 bg-white py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-1.5 rounded-lg text-white">
                <span className="material-symbols-outlined text-xl block">electric_bolt</span>
              </div>
              <h2 className="text-lg font-bold tracking-tight">PromptMarket</h2>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed font-light">
              Premium destination for high-performance AI prompts.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Platform</h4>
              <ul className="flex flex-col gap-4 text-sm font-medium text-slate-600">
                <li><a className="hover:text-primary transition-colors" href="#">Explorer</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Creators</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Social</h4>
              <ul className="flex flex-col gap-4 text-sm font-medium text-slate-600">
                <li><a className="hover:text-primary transition-colors" href="#">Twitter (X)</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Discord</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between text-xs text-slate-400 font-medium">
          <p>© 2027 PromptMarket Inc.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <span>Fully Operational</span>
            <span>v4.2.0</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
