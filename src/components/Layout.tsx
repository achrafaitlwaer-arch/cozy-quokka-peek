import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Search, Heart, User, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const hideNav = location.pathname.startsWith('/watch');

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Search', path: '/search' },
    { icon: Heart, label: 'Favorites', path: '/favorites' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="min-h-screen bg-[#09090B] text-white pb-24">
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-md mx-auto"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {!hideNav && (
        <nav className="fixed bottom-0 left-0 right-0 bg-[#18181B]/80 backdrop-blur-lg border-t border-white/10 px-6 py-3 z-50">
          <div className="max-w-md mx-auto flex justify-between items-center">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex flex-col items-center gap-1 transition-colors",
                    isActive ? "text-purple-500" : "text-gray-400 hover:text-gray-200"
                  )
                }
              >
                <item.icon size={24} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
};

export default Layout;
