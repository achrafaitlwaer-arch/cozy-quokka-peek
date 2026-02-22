import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Globe, Bell, Moon, Shield, Info, ChevronRight } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

const SettingsPage = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('English');

  return (
    <div className="px-6 pt-8 pb-10">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 bg-[#18181B] rounded-xl flex items-center justify-center border border-white/10"
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-2">General</h2>
          <div className="bg-[#18181B] rounded-3xl border border-white/5 overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="font-semibold">Language</p>
                  <p className="text-[10px] text-gray-500">{language}</p>
                </div>
              </div>
              <button
                onClick={() => setLanguage(language === 'English' ? 'Arabic' : 'English')}
                className="text-purple-400 text-xs font-bold"
              >
                Change
              </button>
            </div>

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                  <Bell size={20} />
                </div>
                <div>
                  <p className="font-semibold">Notifications</p>
                  <p className="text-[10px] text-gray-500">New episode alerts</p>
                </div>
              </div>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-2">Appearance</h2>
          <div className="bg-[#18181B] rounded-3xl border border-white/5 overflow-hidden">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center">
                  <Moon size={20} />
                </div>
                <div>
                  <p className="font-semibold">Dark Mode</p>
                  <p className="text-[10px] text-gray-500">Enabled by default</p>
                </div>
              </div>
              <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-2">Support</h2>
          <div className="bg-[#18181B] rounded-3xl border border-white/5 overflow-hidden">
            <SettingItem icon={Shield} label="Privacy Policy" color="text-green-400" bgColor="bg-green-500/10" />
            <SettingItem icon={Info} label="About Anime World" color="text-gray-400" bgColor="bg-gray-500/10" isLast />
          </div>
        </section>

        <div className="pt-4">
          <div className="bg-gradient-to-r from-purple-600 to-purple-900 rounded-3xl p-6 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-1">Go Premium</h3>
              <p className="text-xs text-white/70 mb-4">Remove ads and unlock 4K streaming</p>
              <button className="bg-white text-purple-900 px-6 py-2 rounded-xl text-xs font-bold">
                Upgrade Now
              </button>
            </div>
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SettingItem = ({ icon: Icon, label, color, bgColor, isLast }: any) => (
  <div className={cn(
    "flex items-center justify-between p-4",
    !isLast && "border-b border-white/5"
  )}>
    <div className="flex items-center gap-3">
      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", bgColor, color)}>
        <Icon size={20} />
      </div>
      <span className="font-semibold">{label}</span>
    </div>
    <ChevronRight size={18} className="text-gray-600" />
  </div>
);

export default SettingsPage;
