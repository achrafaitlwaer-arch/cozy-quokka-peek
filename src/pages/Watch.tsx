import React, { useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronLeft, Settings, Maximize, SkipForward, Volume2, Play, Pause } from 'lucide-react';
import { animeList } from '@/lib/data';
import AnimeCard from '@/components/AnimeCard';
import { cn } from '@/lib/utils';

const Watch = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const episode = searchParams.get('ep') || '1';
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [quality, setQuality] = useState('1080p');
  const [showQualityMenu, setShowQualityMenu] = useState(false);

  const anime = animeList.find(a => a.id === id);
  const relatedAnime = animeList.filter(a => a.id !== id).slice(0, 4);

  if (!anime) return <div>Anime not found</div>;

  return (
    <div className="min-h-screen bg-black">
      {/* Video Player Area */}
      <div className="relative aspect-video w-full bg-zinc-900 group">
        <img
          src={anime.cover}
          alt="Video Thumbnail"
          className="w-full h-full object-cover opacity-40"
        />
        
        {/* Player Controls Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-b from-black/60 via-transparent to-black/60 opacity-100 transition-opacity">
          <div className="flex justify-between items-center">
            <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-white/10 backdrop-blur-md">
              <ChevronLeft size={20} />
            </button>
            <div className="text-center">
              <h2 className="text-xs font-bold text-gray-300">{anime.title}</h2>
              <p className="text-[10px] text-gray-400">Episode {episode}</p>
            </div>
            <button
              onClick={() => setShowQualityMenu(!showQualityMenu)}
              className="p-2 rounded-full bg-white/10 backdrop-blur-md"
            >
              <Settings size={20} />
            </button>
          </div>

          <div className="flex items-center justify-center gap-8">
            <button className="p-2 text-white/80"><SkipForward size={24} className="rotate-180" /></button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center shadow-xl shadow-purple-600/40"
            >
              {isPlaying ? <Pause size={32} fill="white" /> : <Play size={32} fill="white" className="ml-1" />}
            </button>
            <button className="p-2 text-white/80"><SkipForward size={24} /></button>
          </div>

          <div className="space-y-2">
            <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-purple-500" />
            </div>
            <div className="flex justify-between items-center text-[10px] text-gray-400">
              <span>08:24</span>
              <div className="flex gap-4">
                <Volume2 size={14} />
                <Maximize size={14} />
              </div>
              <span>24:00</span>
            </div>
          </div>
        </div>

        {/* Quality Menu */}
        {showQualityMenu && (
          <div className="absolute top-14 right-4 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl p-2 z-50 w-32">
            {['360p', '720p', '1080p'].map((q) => (
              <button
                key={q}
                onClick={() => {
                  setQuality(q);
                  setShowQualityMenu(false);
                }}
                className={cn(
                  "w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors",
                  quality === q ? "bg-purple-600 text-white" : "text-gray-400 hover:bg-white/5"
                )}
              >
                {q}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content Below Player */}
      <div className="p-6 bg-[#09090B]">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-xl font-bold mb-1">{anime.title}</h1>
            <p className="text-sm text-purple-400 font-medium">Episode {episode}: The Beginning of the End</p>
          </div>
          <div className="bg-purple-600/10 text-purple-400 px-3 py-1 rounded-lg text-[10px] font-bold border border-purple-500/20">
            {quality}
          </div>
        </div>

        {/* Ad Placeholder */}
        <div className="w-full h-20 bg-[#18181B] rounded-2xl border border-white/5 flex items-center justify-center mb-8 relative overflow-hidden">
          <div className="absolute top-2 left-2 bg-yellow-500 text-black text-[8px] font-black px-1 rounded">AD</div>
          <p className="text-xs text-gray-500 font-medium">Upgrade to Premium to remove ads</p>
        </div>

        {/* Related Suggestions */}
        <div>
          <h2 className="text-lg font-bold mb-4">You Might Also Like</h2>
          <div className="grid grid-cols-2 gap-4">
            {relatedAnime.map((a) => (
              <AnimeCard key={a.id} anime={a} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
