import React from 'react';
import { User, Heart, Clock, CreditCard, LogOut, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { animeList } from '@/lib/data';

const Profile = () => {
  const watchHistory = animeList.slice(0, 2);

  return (
    <div className="px-6 pt-12 pb-10">
      {/* Profile Header */}
      <div className="flex flex-col items-center mb-10">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-[32px] bg-gradient-to-br from-purple-500 to-purple-800 p-1">
            <div className="w-full h-full rounded-[28px] bg-[#09090B] flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 bg-purple-600 text-white text-[10px] font-black px-2 py-1 rounded-lg border-2 border-[#09090B]">
            PRO
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-1">Alex Johnson</h1>
        <p className="text-gray-500 text-sm">alex.j@example.com</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        <StatCard label="Watched" value="124" />
        <StatCard label="Favorites" value="48" />
        <StatCard label="Following" value="12" />
      </div>

      {/* Continue Watching */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Continue Watching</h2>
          <Link to="/history" className="text-purple-400 text-xs font-semibold">View All</Link>
        </div>
        <div className="space-y-3">
          {watchHistory.map((anime) => (
            <Link
              key={anime.id}
              to={`/watch/${anime.id}`}
              className="flex items-center gap-4 p-3 bg-[#18181B] rounded-2xl border border-white/5"
            >
              <div className="relative w-20 aspect-video rounded-lg overflow-hidden">
                <img src={anime.cover} className="w-full h-full object-cover" alt="" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                  <div className="h-full w-2/3 bg-purple-500" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold line-clamp-1">{anime.title}</h3>
                <p className="text-[10px] text-gray-500">Ep 12 • 15:20 left</p>
              </div>
              <ChevronRight size={16} className="text-gray-600" />
            </Link>
          ))}
        </div>
      </div>

      {/* Menu */}
      <div className="space-y-2">
        <MenuButton icon={Heart} label="My Favorites" to="/favorites" />
        <MenuButton icon={Clock} label="Watch History" to="/history" />
        <MenuButton icon={CreditCard} label="Subscription" to="/premium" />
        <MenuButton icon={LogOut} label="Logout" to="/auth" className="text-red-400" />
      </div>
    </div>
  );
};

const StatCard = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-[#18181B] p-4 rounded-2xl border border-white/5 text-center">
    <p className="text-xl font-bold text-purple-400 mb-1">{value}</p>
    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{label}</p>
  </div>
);

const MenuButton = ({ icon: Icon, label, to, className }: any) => (
  <Link
    to={to}
    className={`flex items-center justify-between p-4 bg-[#18181B] rounded-2xl border border-white/5 hover:bg-white/5 transition-colors ${className}`}
  >
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
        <Icon size={20} />
      </div>
      <span className="font-semibold">{label}</span>
    </div>
    <ChevronRight size={18} className="text-gray-600" />
  </Link>
);

export default Profile;
