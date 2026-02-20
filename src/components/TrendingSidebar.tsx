'use client';

const trendingHighlights = [
  {
    id: 1,
    title: 'Trending Now',
    icon: 'trending_up',
    items: [
      { name: 'AI Portrait Generator', category: 'Midjourney', change: '+24%', users: '2.3k' },
      { name: 'Code Review Assistant', category: 'GPT-4', change: '+18%', users: '1.8k' },
      { name: 'Logo Design Pro', category: 'DALL-E 3', change: '+15%', users: '1.5k' },
      { name: 'Content Writer', category: 'Claude', change: '+12%', users: '1.2k' }
    ]
  },
  {
    id: 2,
    title: 'ChatGPT Highlights',
    icon: 'smart_toy',
    items: [
      { name: 'Business Strategy GPT', category: 'GPT-5 Turbo', change: '+32%', users: '3.1k' },
      { name: 'Data Analysis Pro', category: 'GPT-4', change: '+28%', users: '2.7k' },
      { name: 'Creative Writing', category: 'GPT-4', change: '+22%', users: '2.1k' },
      { name: 'Code Generator', category: 'GPT-5 Turbo', change: '+19%', users: '1.9k' }
    ]
  },
  {
    id: 3,
    title: 'Midjourney Picks',
    icon: 'image',
    items: [
      { name: 'Cyberpunk Cityscape', category: 'Midjourney V8', change: '+45%', users: '4.2k' },
      { name: 'Fantasy Characters', category: 'Midjourney V7', change: '+38%', users: '3.8k' },
      { name: 'Architectural Renders', category: 'Midjourney V8', change: '+31%', users: '3.3k' },
      { name: 'Abstract Art', category: 'Midjourney V7', change: '+26%', users: '2.9k' }
    ]
  }
];

const categories = [
  { name: 'Midjourney', count: 45, color: 'bg-purple-100 text-purple-700' },
  { name: 'GPT-4', count: 32, color: 'bg-green-100 text-green-700' },
  { name: 'DALL-E 3', count: 28, color: 'bg-blue-100 text-blue-700' },
  { name: 'Claude', count: 24, color: 'bg-orange-100 text-orange-700' },
  { name: 'Stable Diffusion', count: 21, color: 'bg-pink-100 text-pink-700' }
];

const topCreators = [
  { name: '@neon_arc', prompts: 45, rating: 4.9 },
  { name: '@logic_smith', prompts: 38, rating: 4.8 },
  { name: '@archizoom', prompts: 32, rating: 4.7 },
  { name: '@sec_dev', prompts: 28, rating: 5.0 }
];

export default function TrendingSidebar() {
  return (
    <div className="w-80 bg-gray-50 border-l border-gray-200 hidden xl:block">
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
        <h2 className="text-lg font-semibold text-gray-900">Discover</h2>
        <p className="text-sm text-gray-600">Trending prompts & creators</p>
      </div>

      <div className="p-6 space-y-8">
        {/* Trending Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Trending</h3>
            <span className="text-xs text-gray-500">Updated hourly</span>
          </div>
          
          <div className="space-y-4">
            {trendingHighlights.map((section) => (
              <div key={section.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-gray-600 text-lg">{section.icon}</span>
                  <h4 className="font-medium text-gray-900">{section.title}</h4>
                </div>
                
                <div className="space-y-2">
                  {section.items.slice(0, 3).map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-gray-500">{item.category}</span>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-500">{item.users}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                        <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
                        <span>{item.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">Popular Categories</h3>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="space-y-3">
              {categories.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${category.color}`}>
                      {category.name}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600 font-medium">{category.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Creators Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">Top Creators</h3>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="space-y-3">
              {topCreators.map((creator, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-600">{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{creator.name}</p>
                      <p className="text-xs text-gray-500">{creator.prompts} prompts</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-yellow-500 text-[14px]">star</span>
                    <span className="text-sm font-medium text-gray-900">{creator.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-4 text-white">
          <h3 className="font-semibold text-sm uppercase tracking-wide mb-3 opacity-90">Platform Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-2xl font-bold">1.2K+</p>
              <p className="text-xs opacity-80">Active Prompts</p>
            </div>
            <div>
              <p className="text-2xl font-bold">847</p>
              <p className="text-xs opacity-80">Creators</p>
            </div>
            <div>
              <p className="text-2xl font-bold">4.8</p>
              <p className="text-xs opacity-80">Avg Rating</p>
            </div>
            <div>
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-xs opacity-80">Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
