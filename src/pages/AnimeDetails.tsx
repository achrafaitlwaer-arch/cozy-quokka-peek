import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, Star, Play, Heart, Share2, Download } from 'lucide-react';
import { animeList } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const AnimeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  
  const anime = animeList.find(a => a.id === id);

  if (!anime) return <div>Anime not found</div>;

  return (
    <div className="pb-10">
      {/* Header Image */}
      <div className="relative h-[400px] w-full">
        <img
          src={anime.cover}
          alt={anime.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/20 to-transparent" />
        
        <button
          onClick={() => navigate(-1)}
          className="absolute top-8 left-6 w-10 h-10 bg-black/40 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="absolute top-8 right-6 flex gap-2">
          <button className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10">
            <Share2 size={20} />
          </button>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={cn(
              "w-10 h-10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 transition-colors",
              isFavorite ? "bg-purple-600 border-purple-500" : "bg-black/40"
            )}
          >
            <Heart size={20} className={isFavorite ? "fill-white" : ""} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 -mt-20 relative z-10">
        <div className="bg-[#18181B] rounded-[32px] p-6 border border-white/5 shadow-2xl">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2">{anime.title}</h1>
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star size={14} className="fill-current" />
                  <span className="font-bold">{anime.rating}</span>
                </div>
                <span>•</span>
                <span>{anime.year}</span>
                <span>•</span>
                <span>{anime.status}</span>
                <span>•</span>
                <span>{anime.episodes} Eps</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mb-6 overflow-x-auto pb-2 no-scrollbar">
            {anime.categories.map(cat => (
              <span key={cat} className="whitespace-nowrap px-3 py-1.5 bg-purple-600/10 text-purple-400 rounded-lg text-[10px] font-bold border border-purple-500/20">
                {cat}
              </span>
            ))}
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-4">
            {anime.description}
          </p>

          <div className="flex gap-3">
            <Button asChild className="flex-1 bg-purple-600 hover:bg-purple-700 h-14 rounded-2xl text-lg font-bold">
              <Link to={`/watch/${anime.id}`}>
                <Play size={20} className="mr-2 fill-current" />
                Watch Now
              </Link>
            </Button>
            <Button variant="outline" className="w-14 h-14 rounded-2xl bg-white/5 border-white/10">
              <Download size={20} />
            </Button>
          </div>
        </div>

        {/* Episodes */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Episodes</h2>
            <span className="text-xs text-gray-400">Season 1</span>
          </div>
          
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Link
                key={i}
                to={`/watch/${anime.id}?ep=${i + 1}`}
                className="flex items-center gap-4 p-3 bg-[#18181B] rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors group"
              >
                <div className="relative w-24 aspect-video rounded-lg overflow-hidden">
                  <img src={anime.cover} className="w-full h-full object-cover opacity-60" alt="" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play size={16} className="text-white fill-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold mb-1">Episode {i + 1}</h3>
                  <p className="text-[10px] text-gray-500">24:00 mins</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <Download size={14} className="text-gray-400" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
