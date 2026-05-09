'use client';

import React from 'react';
import Link from 'next/link';

export default function LoginForm() {
  return (
    <main 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/img_grand_stone_building_with_glowing_windows_under_a_deep_blue_twilight_dramatic_lighting_casts_a_mysterious_elegant_ambiance_surrounded_by_shadowy_trees.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md px-6 animate-in fade-in zoom-in duration-500 mt-10 mb-10">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-8 md:p-10 shadow-2xl">
          <div className="flex flex-col items-center mb-8">
            <Link href="/" className="mb-6 hover:scale-105 transition-transform">
              <div className="flex items-center gap-2">
                <img src="/images/logo.svg" alt="Estatix" className="w-8 h-8 invert" />
                <span className="text-white text-2xl font-medium font-['Mona_Sans'] tracking-tight">Estatix</span>
              </div>
            </Link>
            <h1 className="text-white text-3xl font-medium font-['Mona_Sans'] mb-2">Welcome Back</h1>
            <p className="text-white/60 font-['Inter'] text-center">Enter your details to access your account</p>
          </div>

          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-white/80 text-sm font-medium font-['Inter'] px-1">Email Address</label>
              <input 
                type="email" 
                placeholder="name@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all font-['Inter']"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-white/80 text-sm font-medium font-['Inter']">Password</label>
                <Link href="#" className="text-white/40 text-xs hover:text-white transition-colors">Forgot password?</Link>
              </div>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all font-['Inter']"
              />
            </div>

            <div className="flex items-center gap-2 px-1">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-white/10 bg-white/5 accent-white" />
              <label htmlFor="remember" className="text-white/60 text-sm font-['Inter'] cursor-pointer">Remember me</label>
            </div>

            <button 
              type="submit"
              className="w-full bg-white text-black font-medium py-4 rounded-2xl mt-4 hover:bg-white/90 active:scale-[0.98] transition-all font-['Inter']"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 flex flex-col items-center gap-4">
            <p className="text-white/60 text-sm font-['Inter'] mt-4">
              Don't have an account? {' '}
              <Link href="/register" className="text-white font-medium hover:underline">Create account</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px]" />
    </main>
  );
}
