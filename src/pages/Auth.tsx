import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen px-6 pt-20 pb-10 flex flex-col">
      <div className="flex flex-col items-center mb-12">
        <div className="w-20 h-20 bg-purple-600 rounded-[28px] flex items-center justify-center shadow-2xl shadow-purple-600/40 mb-6">
          <span className="text-4xl font-black italic">A</span>
        </div>
        <h1 className="text-3xl font-bold mb-2">
          {isLogin ? 'Welcome Back!' : 'Create Account'}
        </h1>
        <p className="text-gray-500 text-center text-sm">
          {isLogin 
            ? 'Login to continue your anime journey' 
            : 'Join the world\'s largest anime community'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 flex-1">
        {!isLogin && (
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <Input
              placeholder="Full Name"
              className="bg-[#18181B] border-white/5 h-14 pl-12 rounded-2xl focus-visible:ring-purple-500/50"
            />
          </div>
        )}
        
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <Input
            type="email"
            placeholder="Email Address"
            className="bg-[#18181B] border-white/5 h-14 pl-12 rounded-2xl focus-visible:ring-purple-500/50"
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <Input
            type="password"
            placeholder="Password"
            className="bg-[#18181B] border-white/5 h-14 pl-12 rounded-2xl focus-visible:ring-purple-500/50"
          />
        </div>

        {isLogin && (
          <div className="text-right">
            <button type="button" className="text-xs font-bold text-purple-400">
              Forgot Password?
            </button>
          </div>
        )}

        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 h-14 rounded-2xl text-lg font-bold shadow-xl shadow-purple-600/20">
          {isLogin ? 'Login' : 'Sign Up'}
          <ArrowRight size={20} className="ml-2" />
        </Button>

        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/5"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[#09090B] px-2 text-gray-500 font-bold">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="bg-[#18181B] border-white/5 h-14 rounded-2xl hover:bg-white/5">
            <img src="https://www.google.com/favicon.ico" className="w-5 h-5 mr-2" alt="Google" />
            Google
          </Button>
          <Button variant="outline" className="bg-[#18181B] border-white/5 h-14 rounded-2xl hover:bg-white/5">
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>
        </div>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-purple-400 font-bold"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
