import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Anime } from '@/lib/data';

interface AnimeCardProps {
  anime: Anime;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  return (
    <Link to={`/anime/${anime.id}`} className="group block">
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-2">
        <img
          src={anime.cover}
          alt={anime.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 border border-white/10">
          <Star size={12} className="text-yellow-400 fill-yellow-400" />
          <span className="text-[10px] font-bold">{anime.rating}</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
          <span className="text-[10px] font-medium text-purple-400 uppercase tracking-wider">
            {anime.episodes} Episodes
          </span>
        </div>
      </div>
      <h3 className="text-sm font-semibold line-clamp-1 group-hover:text-purple-400 transition-colors">
        {anime.title}
      </h3>
    </Link>
  );
};

export default AnimeCard;
