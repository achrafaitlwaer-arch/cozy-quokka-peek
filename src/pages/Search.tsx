import React, { useState } from 'react';
import { Search as SearchIcon, Filter } from 'lucide-react';
import { categories, animeList } from '@/lib/data';
import AnimeCard from '@/components/AnimeCard';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredAnime = animeList.filter((anime) => {
    const matchesSearch = anime.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || anime.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="px-6 pt-8 pb-10">
      <h1 className="text-2xl font-bold mb-6">Explore</h1>

      <div className="flex gap-3 mb-6">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search anime..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-[#18181B] border-white/5 h-12 pl-12 rounded-xl focus-visible:ring-purple-500/50"
          />
        </div>
        <button className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-600/20">
          <Filter size={20} />
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Categories</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('All')}
            className={cn(
              "px-4 py-2 rounded-xl text-sm font-medium transition-all",
              selectedCategory === 'All'
                ? "bg-purple-600 text-white shadow-lg shadow-purple-600/20"
                : "bg-[#18181B] text-gray-400 border border-white/5"
            )}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all",
                selectedCategory === cat
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/20"
                  : "bg-[#18181B] text-gray-400 border border-white/5"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">
            {searchQuery || selectedCategory !== 'All' ? 'Search Results' : 'Recommended'}
          </h2>
          <span className="text-xs text-gray-400">{filteredAnime.length} found</span>
        </div>
        
        {filteredAnime.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {filteredAnime.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500">
            <SearchIcon size={48} className="mb-4 opacity-20" />
            <p>No anime found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
