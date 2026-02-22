import React from 'react';
import { Search, Bell } from 'lucide-react';
import { featuredAnime, trendingAnime, newReleases, popularAnime } from '@/lib/data';
import FeaturedSlider from '@/components/FeaturedSlider';
import AnimeCard from '@/components/AnimeCard';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="pb-10">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 px-6 py-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-600/20">
            <span className="text-xl font-black italic">A</span>
          </div>
          <span className="text-xl font-bold tracking-tight">Anime World</span>
        </div>
        <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10">
          <Bell size={20} />
        </button>
      </div>

      {/* Featured Slider */}
      <FeaturedSlider animeList={featuredAnime} />

      <div className="px-6 -mt-6 relative z-20">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search anime..."
            className="bg-[#18181B] border-white/5 h-14 pl-12 rounded-2xl focus-visible:ring-purple-500/50 shadow-xl"
          />
        </div>
      </div>

      {/* Sections */}
      <div className="mt-8 space-y-8 px-6">
        <Section title="Trending Now" animeList={trendingAnime} />
        <Section title="New Releases" animeList={newReleases} />
        <Section title="Most Popular" animeList={popularAnime} />
      </div>
    </div>
  );
};

const Section = ({ title, animeList }: { title: string; animeList: any[] }) => (
  <div>
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-bold">{title}</h2>
      <Link to="/search" className="text-purple-400 text-xs font-semibold">See All</Link>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {animeList.map((anime) => (
        <AnimeCard key={anime.id} anime={anime} />
      ))}
    </div>
  </div>
);

export default Index;
