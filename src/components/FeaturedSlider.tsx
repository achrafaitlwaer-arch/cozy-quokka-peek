import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Info } from 'lucide-react';
import { Anime } from '@/lib/data';
import { Button } from '@/components/ui/button';

interface FeaturedSliderProps {
  animeList: Anime[];
}

const FeaturedSlider: React.FC<FeaturedSliderProps> = ({ animeList }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % animeList.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [animeList.length]);

  const current = animeList[currentIndex];

  return (
    <div className="relative h-[450px] w-full overflow-hidden rounded-b-[40px]">
      <img
        src={current.cover}
        alt={current.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/40 to-transparent" />
      
      <div className="absolute bottom-8 left-0 right-0 px-6">
        <div className="flex gap-2 mb-3">
          {current.categories.map((cat) => (
            <span key={cat} className="text-[10px] font-bold bg-purple-600/20 text-purple-400 px-2 py-1 rounded-full border border-purple-500/30">
              {cat}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">{current.title}</h1>
        
        <div className="flex gap-3">
          <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl px-8 h-12 flex-1">
            <Link to={`/watch/${current.id}`}>
              <Play size={18} className="mr-2 fill-current" />
              Watch Now
            </Link>
          </Button>
          <Button asChild variant="outline" className="bg-white/10 border-white/10 hover:bg-white/20 text-white rounded-xl w-12 h-12 p-0">
            <Link to={`/anime/${current.id}`}>
              <Info size={20} />
            </Link>
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {animeList.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-6 bg-purple-500' : 'w-1.5 bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSlider;
