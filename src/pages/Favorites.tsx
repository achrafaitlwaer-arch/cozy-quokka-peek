import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Heart } from 'lucide-react';
import { animeList } from '@/lib/data';
import AnimeCard from '@/components/AnimeCard';

const Favorites = () => {
  const navigate = useNavigate();
  const favorites = animeList.slice(0, 4); // Mock favorites

  return (
    <div className="px-6 pt-8 pb-10">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 bg-[#18181B] rounded-xl flex items-center justify-center border border-white/10"
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold">My Favorites</h1>
      </div>

      {favorites.length > 0 ? (
        <div className="grid grid-cols-2 gap-4">
          {favorites.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500">
          <Heart size={48} className="mb-4 opacity-20" />
          <p>Your favorites list is empty</p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
