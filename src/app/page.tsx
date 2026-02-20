'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import TrendingSidebar from '@/components/TrendingSidebar';

const promptData = [
  {
    id: 1,
    title: 'Hyper-Realistic Cyberpunk Portrait',
    category: 'Midjourney',
    model: 'MIDJOURNEY V8',
    price: 15,
    fiatPrice: '$12.99',
    rating: 4.8,
    likes: '1.2k',
    downloads: '840',
    reliability: '98% Reliability',
    reliabilityType: 'emerald',
    description: 'Highly detailed prompt for photorealistic architectural glass and neon elements in a cyberpunk setting.',
    creator: '@neon_arc',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0gEfY77P8og-t9s-StwLL50G1Kdh_qBP-RXyRh2V3hm5l4M_rCqeDgSYVJK3EqbyEuQlMxAF69HBjmhWJxSR-XyQEENOTir16rTcei3IQn4dGAxGn7QWLFHTXU9exp_az796KuzdNKlOjluXlFkacWLBT1D36MOjmVnMcIDrdyktN52HsUQho69MKXlCb2FAnQaB8s_5tclye_LIYnjaokIGZsXylVvOnbDsBPx9xmpgGdC-7NALHK42h60DgC6wFOdaoV3o1fNo',
    dataAlt: 'Cyberpunk portrait'
  },
  {
    id: 2,
    title: 'Minimalist Architectural Render',
    category: 'Architecture',
    model: 'STABLE DIFFUSION 3',
    price: 12,
    fiatPrice: '$9.99',
    rating: 4.5,
    likes: '950',
    downloads: '420',
    reliability: '95% Reliability',
    reliabilityType: 'emerald',
    description: 'Clean and modern minimalist architectural visualization with glass and concrete textures.',
    creator: '@archizoom',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYEC-sCe_gJmifDnY0EaBrToNnVey3Ab9bt46kjYSRJWR01i8Ztn3Nef80uApuD1My_rd2_QW0HXM4v9gWk3LSUHJQnXy4ZCAf59uvaQvFvzE733SJw6qzhbncq3eMoEEfGnJk2XvYfwPaI2f0vQ-rJEBUOh6N00Mn9Xv59YyV4FPs7LhfKZytFE_VhnXrg3BwDEo-TXZY3JQ-CD3W3wkHlUV9tFObTOE0jeQjOIaYUC4UqvhWVYsAAGxaw4f4QrknNhMx1j9Yrj8',
    dataAlt: 'Architectural render'
  },
  {
    id: 3,
    title: 'Strategic Business Logic Agent',
    category: 'GPT-4',
    model: 'GPT-5 TURBO',
    price: 25,
    fiatPrice: '$24.99',
    rating: 4.9,
    likes: '2.5k',
    downloads: '1.8k',
    reliability: '100% Reliable',
    reliabilityType: 'blue',
    description: 'Advanced logical reasoning prompt for business strategy and complex data analysis.',
    creator: '@logic_smith',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALrfzOAW8Q4zK5GkcrvbDnTWc4_UwZgVjmgFEQp_srS6qTjyd8JhcvwgjfpuAUZKzUIFqCSY5CZnul2XVbJQ9laMK0bH-2tgjEGNu6gzZLszPnOI7PkZeYJhIreXWivsZWxA3_3023sMjqvDEJv2lm03P7su92XdDa_DWmUacOPoTaMHIUrW3A_29Mq3nQYNNxW74BlN-eOtu2KLgMdKngbcscu8on7EdX2GTgGFfvsWiGXaqPy-f5h7I2RcB81j_fhkIgJO3Lq2U',
    dataAlt: 'Data visualization'
  },
  {
    id: 4,
    title: 'Organic Liquid Motion Background',
    category: 'Abstract',
    model: 'DALL-E 4',
    price: 10,
    fiatPrice: '$7.99',
    rating: 4.2,
    likes: '800',
    downloads: '310',
    reliability: '92% Reliability',
    reliabilityType: 'emerald',
    description: 'Smooth flowing liquid textures for high-end background visualizations and motion graphics.',
    creator: '@fluid_master',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvRZSLWDavVwIcq5GlOseofZmkO62eJ9rusYAn2NNFwAOoMIYE-1Nq1v8eqQd9EBrHsYMp5QZ7antTAnkw4bTxccogwuBOX1TO0D2-koVoml2FAglDwjfSvthGTd0wqae5e8d1kb7DN1VXhbcem9v0Ae8g9Ven8TE6O-WorFE05IRpwzsGzoXSw1ERB-Ytj_LygHPDaV1nbRlHQENogmgRws9z2YaQapJscJNUiON4En9AmTnJYdnvB32OOMODSQjVpx5MO2vFroY',
    dataAlt: 'Liquid motion'
  },
  {
    id: 7,
    title: '8K Nature Forest Photography',
    category: 'Nature',
    model: 'MIDJOURNEY V7',
    price: 18,
    fiatPrice: '$15.99',
    rating: 4.7,
    likes: '1.4k',
    downloads: '920',
    reliability: '97% Reliability',
    reliabilityType: 'emerald',
    description: 'Incredible depth and realistic forest lighting captured in amazing 8K resolution.',
    creator: '@nature_pix',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI987ybQdbxwPydnrprUfqA62O7YApVvRSJ7TCft7JoahgzuLRlr-wXCzGOxKM-23bF3DYoXNDtxBqBsbQ16ws1p6UDRj2nlIhnqYh0zxmHfloczbCQWbAQzepllwO4irXJ7SgGMRlKKrWqoyNunVhxXvuoGwhaxzL-9J6qdnlzRh0t4pLWEVO-bzmsocuFqSbO7QWAHJLxiZ7Doh_g7MroooFZpLBRkemaCRNDDKViwfOA0w771JCETACLhpG1oUj6xdRzgfuDCU',
    dataAlt: 'Nature forest'
  },
  {
    id: 8,
    title: 'Enterprise Code Sec Audit',
    category: 'Coding',
    model: 'CLAUDE 4 OPUS',
    price: 35,
    fiatPrice: '$32.99',
    rating: 5.0,
    likes: '3.2k',
    downloads: '2.5k',
    reliability: '100% Reliable',
    reliabilityType: 'blue',
    description: 'Professional grade security audit prompt for identifying vulnerabilities in complex codebases.',
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

const verticalCategories = [
  { name: 'All Categories', icon: 'apps', count: 156 },
  { name: 'Midjourney', icon: 'image', count: 45 },
  { name: 'DALL-E 3', icon: 'brush', count: 32 },
  { name: 'GPT-4', icon: 'psychology', count: 28 },
  { name: 'Claude', icon: 'chat', count: 24 },
  { name: 'Stable Diffusion', icon: 'auto_awesome', count: 27 },
  { name: 'Architecture', icon: 'domain', count: 18 },
  { name: 'Nature', icon: 'eco', count: 15 },
  { name: 'Abstract', icon: 'grain', count: 12 },
  { name: 'Coding', icon: 'code', count: 21 }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('All Prompts');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [selectedReliability, setSelectedReliability] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('Relevant');
  const [showFiltersPanel, setShowFiltersPanel] = useState(true);
  const [bookmarkedPrompts, setBookmarkedPrompts] = useState<Set<number>>(new Set());
  const [activeFilterTab, setActiveFilterTab] = useState('service');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filtering Logic
  const filteredPrompts = promptData.filter(prompt => {
    if (selectedCategories.length > 0 && !selectedCategories.includes(prompt.category)) return false;
    if (selectedModels.length > 0 && !selectedModels.includes(prompt.model)) return false;
    if (selectedReliability.length > 0 && !selectedReliability.includes(prompt.reliability)) return false;
    if (searchQuery && !prompt.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === 'Price: Low to High') return a.price - b.price;
    if (sortBy === 'Price: High to Low') return b.price - a.price;
    if (sortBy === 'Top Rated') return b.rating - a.rating;
    return 0;
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
    <div className="flex flex-col min-h-screen">

      {/* Mobile Filters Drawer Overlay */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowMobileFilters(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-[360px] bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-lg font-bold">Filters &amp; Options</h2>
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

              {/* Model */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Model</h4>
                <div className="space-y-3">
                  {['MIDJOURNEY V8', 'STABLE DIFFUSION 3', 'GPT-5 TURBO', 'DALL-E 4', 'MIDJOURNEY V7', 'CLAUDE 4 OPUS'].map((model) => (
                    <label key={model} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedModels.includes(model)}
                        onChange={() => toggleModel(model)}
                        className="w-5 h-5 text-primary border-slate-300 rounded focus:ring-primary"
                      />
                      <span className="text-slate-600 font-medium">{model}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reliability */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Reliability</h4>
                <div className="space-y-3">
                  {['98% Reliability', '95% Reliability', '100% Reliable', '92% Reliability', '97% Reliability'].map((rel) => (
                    <label key={rel} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedReliability.includes(rel)}
                        onChange={() => toggleReliability(rel)}
                        className="w-5 h-5 text-primary border-slate-300 rounded focus:ring-primary"
                      />
                      <span className="text-slate-600 font-medium">{rel}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Layout: Main Content with Sidebar */}
      <div className="flex flex-1">
        {/* Main Content Area */}
        <main className="flex-1 transition-all duration-300 lg:ml-16">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            {/* Mobile Top Navigation */}
            <nav className="lg:hidden sticky top-0 z-50 w-full glass-effect border-b border-white/20 mb-4">
              <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-primary p-1.5 rounded-lg text-white">
                    <span className="material-symbols-outlined text-2xl block">electric_bolt</span>
                  </div>
                  <h1 className="text-xl font-bold tracking-tight">PromptMarket</h1>
                </div>
                <div className="flex items-center gap-4">
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
            <section className="py-8 sm:py-10 text-center relative">
              <div className="max-w-4xl mx-auto">
                <div className="p-2 rounded-2xl shadow-xl border border-slate-200 flex items-center bg-white mb-6">
                  <div className="pl-4 text-slate-400">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Search prompts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-4 py-3 outline-none text-slate-700 placeholder-slate-400"
                  />
                </div>
              </div>
            </section>

            {/* Filters Header and Panel */}
            <section className="mb-8">
              {/* Filters Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowFiltersPanel(!showFiltersPanel)}
                    className="flex items-center gap-2 text-lg font-bold text-slate-800 hover:text-primary transition-colors"
                  >
                    <span>Filters</span>
                    <span className={`material-symbols-outlined transition-transform duration-200 ${showFiltersPanel ? 'rotate-180' : ''}`}>expand_more</span>
                  </button>
                  {(selectedCategories.length > 0 || selectedModels.length > 0 || selectedReliability.length > 0) && (
                    <span className="text-sm text-slate-500">
                      {selectedCategories.length + selectedModels.length + selectedReliability.length} applied
                    </span>
                  )}
                </div>
                <button
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedModels([]);
                    setSelectedReliability([]);
                  }}
                  className="text-sm text-primary font-medium hover:underline"
                >
                  Clear all
                </button>
              </div>

              {/* Filters Panel - Dropdown Style */}
              {showFiltersPanel && (
                <div ref={dropdownRef} className="bg-white border border-slate-200 rounded-xl shadow-sm p-4">
                  {/* Filter Tabs */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'service', label: 'Service options' },
                      { id: 'seller', label: 'Seller details' },
                      { id: 'budget', label: 'Budget' },
                      { id: 'delivery', label: 'Delivery time' }
                    ].map((tab) => (
                      <div key={tab.id} className="relative">
                        <button
                          onClick={() => setOpenDropdown(openDropdown === tab.id ? null : tab.id)}
                          className={`px-4 py-2 text-sm font-medium transition-all rounded-lg border flex items-center gap-2 ${
                            openDropdown === tab.id
                              ? 'text-primary border-primary bg-primary/5'
                              : 'text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-50'
                          }`}
                        >
                          {tab.label}
                          <span className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${
                            openDropdown === tab.id ? 'rotate-180' : ''
                          }`}>
                            expand_more
                          </span>
                        </button>

                        {/* Dropdown Menu */}
                        {openDropdown === tab.id && (
                          <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-slate-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                            <div className="p-4">
                              {/* Service Options Dropdown */}
                              {tab.id === 'service' && (
                                <div className="space-y-4">
                                  <div>
                                    <h4 className="text-sm font-semibold text-slate-800 mb-2">Categories</h4>
                                    <div className="space-y-1">
                                      {['Midjourney', 'DALL-E 3', 'GPT-4', 'Claude', 'Stable Diffusion', 'Architecture', 'Nature', 'Abstract', 'Coding'].map((cat) => {
                                        const count = verticalCategories.find(c => c.name === cat)?.count || 0;
                                        return (
                                          <label key={cat} className="flex items-center justify-between cursor-pointer group p-1.5 rounded hover:bg-slate-50 transition-colors">
                                            <div className="flex items-center gap-2">
                                              <input
                                                type="checkbox"
                                                checked={selectedCategories.includes(cat)}
                                                onChange={() => toggleCategory(cat)}
                                                className="w-3.5 h-3.5 text-primary border-slate-300 rounded focus:ring-primary"
                                              />
                                              <span className={`text-xs transition-colors ${selectedCategories.includes(cat) ? 'text-primary font-semibold' : 'text-slate-600 group-hover:text-slate-900'}`}>{cat}</span>
                                            </div>
                                            <span className="text-xs text-slate-400">({count})</span>
                                          </label>
                                        );
                                      })}
                                    </div>
                                  </div>

                                  <div>
                                    <h4 className="text-sm font-semibold text-slate-800 mb-2">Models</h4>
                                    <div className="space-y-1">
                                      {['MIDJOURNEY V8', 'STABLE DIFFUSION 3', 'GPT-5 TURBO', 'DALL-E 4', 'MIDJOURNEY V7', 'CLAUDE 4 OPUS'].map((model) => (
                                        <label key={model} className="flex items-center gap-2 cursor-pointer group p-1.5 rounded hover:bg-slate-50 transition-colors">
                                          <input
                                            type="checkbox"
                                            checked={selectedModels.includes(model)}
                                            onChange={() => toggleModel(model)}
                                            className="w-3.5 h-3.5 text-primary border-slate-300 rounded focus:ring-primary"
                                          />
                                          <span className={`text-xs transition-colors ${selectedModels.includes(model) ? 'text-primary font-semibold' : 'text-slate-600 group-hover:text-slate-900'}`}>{model}</span>
                                        </label>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              )}

                              {/* Seller Details Dropdown */}
                              {tab.id === 'seller' && (
                                <div className="space-y-4">
                                  <div>
                                    <h4 className="text-sm font-semibold text-slate-800 mb-2">Seller level</h4>
                                    <div className="space-y-1">
                                      {[
                                        { name: 'Top Rated Seller', count: 428 },
                                        { name: 'Level 2', count: 1946 },
                                        { name: 'Level 1', count: 2524 },
                                        { name: 'New Seller', count: 12906 }
                                      ].map((seller) => (
                                        <label key={seller.name} className="flex items-center justify-between cursor-pointer group p-1.5 rounded hover:bg-slate-50 transition-colors">
                                          <div className="flex items-center gap-2">
                                            <input
                                              type="checkbox"
                                              className="w-3.5 h-3.5 text-primary border-slate-300 rounded focus:ring-primary"
                                            />
                                            <span className="text-xs text-slate-600 group-hover:text-slate-900">{seller.name}</span>
                                          </div>
                                          <span className="text-xs text-slate-400">({seller.count})</span>
                                        </label>
                                      ))}
                                    </div>
                                  </div>

                                  <div>
                                    <h4 className="text-sm font-semibold text-slate-800 mb-2">Reliability</h4>
                                    <div className="space-y-1">
                                      {['100% Reliable', '98% Reliability', '97% Reliability', '95% Reliability', '92% Reliability'].map((rel) => (
                                        <label key={rel} className="flex items-center gap-2 cursor-pointer group p-1.5 rounded hover:bg-slate-50 transition-colors">
                                          <input
                                            type="checkbox"
                                            checked={selectedReliability.includes(rel)}
                                            onChange={() => toggleReliability(rel)}
                                            className="w-3.5 h-3.5 text-primary border-slate-300 rounded focus:ring-primary"
                                          />
                                          <span className={`text-xs transition-colors ${selectedReliability.includes(rel) ? 'text-primary font-semibold' : 'text-slate-600 group-hover:text-slate-900'}`}>{rel}</span>
                                        </label>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              )}

                              {/* Budget Dropdown */}
                              {tab.id === 'budget' && (
                                <div className="space-y-4">
                                  <div>
                                    <h4 className="text-sm font-semibold text-slate-800 mb-2">Price range</h4>
                                    <div className="space-y-1">
                                      {[
                                        { range: 'Under $10', min: 0, max: 9 },
                                        { range: '$10 - $20', min: 10, max: 20 },
                                        { range: '$20 - $30', min: 20, max: 30 },
                                        { range: '$30 - $50', min: 30, max: 50 },
                                        { range: '$50 and above', min: 50, max: 999 }
                                      ].map((budget) => (
                                        <label key={budget.range} className="flex items-center gap-2 cursor-pointer group p-1.5 rounded hover:bg-slate-50 transition-colors">
                                          <input
                                            type="checkbox"
                                            className="w-3.5 h-3.5 text-primary border-slate-300 rounded focus:ring-primary"
                                          />
                                          <span className="text-xs text-slate-600 group-hover:text-slate-900">{budget.range}</span>
                                        </label>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              )}

                              {/* Delivery Time Dropdown */}
                              {tab.id === 'delivery' && (
                                <div className="space-y-4">
                                  <div>
                                    <h4 className="text-sm font-semibold text-slate-800 mb-2">Delivery time</h4>
                                    <div className="space-y-1">
                                      {[
                                        { time: 'Express (24 hours)', hours: 24 },
                                        { time: 'Fast (1-3 days)', hours: 72 },
                                        { time: 'Standard (3-7 days)', hours: 168 },
                                        { time: 'Extended (1-2 weeks)', hours: 336 },
                                        { time: 'Flexible (2+ weeks)', hours: 999 }
                                      ].map((delivery) => (
                                        <label key={delivery.time} className="flex items-center gap-2 cursor-pointer group p-1.5 rounded hover:bg-slate-50 transition-colors">
                                          <input
                                            type="checkbox"
                                            className="w-3.5 h-3.5 text-primary border-slate-300 rounded focus:ring-primary"
                                          />
                                          <span className="text-xs text-slate-600 group-hover:text-slate-900">{delivery.time}</span>
                                        </label>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* Prompt Grid */}
            <section className="px-0 pb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                  {filteredPrompts.length} Results Found
                </h3>
              </div>

              {filteredPrompts.length > 0 ? (
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 xs:gap-3 sm:gap-4">
                  {filteredPrompts.map((prompt) => (
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
                            {(prompt as any).description || 'Highly detailed prompt for photorealistic architectural glass and neon elements...'}
                          </p>

                          {/* Footer Stats & Credit Price */}
                          <div className="mt-auto pt-1 xs:pt-1.5 sm:pt-2 border-t border-slate-50">
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-1.5 text-slate-400">
                                <span className="material-symbols-outlined text-[8px] xs:text-[10px] sm:text-[12px]">favorite</span>
                                <span className="text-[6px] xs:text-[7px] sm:text-[9px] font-bold leading-none">{(prompt as any).likes || '1.2k'}</span>
                                <span className="material-symbols-outlined text-[8px] xs:text-[10px] sm:text-[12px]">download</span>
                                <span className="text-[6px] xs:text-[7px] sm:text-[9px] font-bold leading-none">{(prompt as any).downloads || '840'}</span>
                              </div>
                              <div className="flex items-center gap-0.5 bg-primary/10 px-1.5 py-0.5 rounded-full flex-shrink-0">
                                <span className="material-symbols-outlined text-primary text-[8px] xs:text-[9px] sm:text-[11px] fill-[1]">monetization_on</span>
                                <span className="text-[6px] xs:text-[8px] sm:text-[10px] font-black text-primary">{prompt.price}</span>
                              </div>
                            </div>
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
                      setSelectedModels([]);
                      setSelectedReliability([]);
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
        
        {/* Trending Sidebar - Desktop Only */}
        <TrendingSidebar />
      </div>
    </div>
  );
}
