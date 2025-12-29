"use client";
import React from 'react';
import { Search, Globe, Zap, Star, Layout, Briefcase, Users } from 'lucide-react';

const talent = [
  { id: 1, name: "Rizwana Nazin", role: "Frontend Developer", stack: "Next.js", status: "Active" },
  { id: 2, name: "Alex Johnson", role: "UI/UX Designer", stack: "Figma", status: "In Review" },
  { id: 3, name: "Chen Wei", role: "Backend Engineer", stack: "Node.js", status: "Available" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 p-6 hidden md:block">
        <div className="flex items-center gap-3 mb-10">
          {/* Logo Integration with 404 Safety */}
          <div className="w-10 h-10 relative overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
            <img 
              src="/logo.png" 
              alt="S" 
              className="w-full h-full object-contain p-1"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
          <span className="font-bold text-xl uppercase tracking-tighter">Sammunat</span>
        </div>
        
        <nav className="space-y-2">
          <div className="flex items-center gap-3 p-3 bg-blue-50 text-blue-600 rounded-lg font-bold">
            <Layout size={20}/> Dashboard
          </div>
          <div className="flex items-center gap-3 p-3 text-slate-400 hover:bg-slate-50 hover:text-slate-600 rounded-lg transition-all cursor-pointer">
            <Globe size={20}/> Global Hub
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900 leading-tight">Innovation Hub</h1>
            <p className="text-slate-500 font-medium">Connecting top talent to USA-based opportunities.</p>
          </div>
          <div className="w-full md:w-auto bg-white border border-slate-200 rounded-full px-4 py-2 flex items-center gap-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition-all">
            <Search size={18} className="text-slate-400" />
            <input 
              type="text" 
              placeholder="Search talent..." 
              className="outline-none text-sm bg-transparent w-full md:w-48" 
            />
          </div>
        </header>

        {/* Bento Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl shadow-blue-100 transition-transform hover:scale-[1.02]">
            <Zap className="mb-4 text-yellow-300" size={28} />
            <h3 className="text-4xl font-black mb-1">150+</h3>
            <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Active Projects</p>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm transition-transform hover:scale-[1.02]">
            <Users size={28} className="text-blue-600 mb-4" />
            <h3 className="text-4xl font-black text-slate-900 mb-1">500+</h3>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Global Members</p>
          </div>
          
          <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl shadow-slate-200 transition-transform hover:scale-[1.02]">
            <Star className="text-yellow-400 mb-4" size={28} />
            <h3 className="text-4xl font-black mb-1">4.9/5</h3>
            <p className="text-sm font-bold opacity-60 uppercase tracking-widest">Client Satisfaction</p>
          </div>
        </div>

        {/* Talent Profile List */}
        <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold flex items-center gap-2 text-slate-800">
              <Briefcase size={22} className="text-blue-600"/> Recent Talent Profiles
            </h2>
            <button className="text-sm font-bold text-blue-600 hover:underline">View All</button>
          </div>
          
          <div className="space-y-2">
            {talent.map((p) => (
              <div 
                key={p.id} 
                className="flex items-center justify-between py-5 border-b border-slate-50 last:border-0 hover:bg-slate-50 px-4 rounded-2xl transition-all cursor-pointer group"
              >
                <div>
                  <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{p.name}</p>
                  <p className="text-sm text-slate-500 font-medium">{p.role}</p>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider">
                    {p.stack}
                  </span>
                  <span className="text-[10px] font-black text-green-500 uppercase tracking-widest bg-green-50 px-3 py-1.5 rounded-lg">
                    {p.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}