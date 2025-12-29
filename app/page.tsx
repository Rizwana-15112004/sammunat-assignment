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
    <div className="min-h-screen flex text-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6 hidden md:block">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">S</div>
          <span className="font-bold text-xl uppercase tracking-tighter">Sammunat</span>
        </div>
        <nav className="space-y-2">
          <div className="flex items-center gap-3 p-3 bg-blue-50 text-blue-600 rounded-lg font-bold"><Layout size={20}/> Dashboard</div>
          <div className="flex items-center gap-3 p-3 text-slate-400 hover:bg-slate-50 rounded-lg transition-all"><Globe size={20}/> Global Hub</div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black">Innovation Hub</h1>
            <p className="text-slate-500">Connecting top talent to USA-based opportunities.</p>
          </div>
          <div className="bg-white border rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
            <Search size={18} className="text-slate-400" />
            <input type="text" placeholder="Search projects..." className="outline-none text-sm" />
          </div>
        </header>

        {/* Bento Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl shadow-blue-100">
            <Zap className="mb-4 text-yellow-300" />
            <h3 className="text-4xl font-black">150+</h3>
            <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Active Projects</p>
          </div>
          <div className="bg-white border rounded-3xl p-8 shadow-sm">
            <Users size={24} className="text-blue-600 mb-4" />
            <h3 className="text-4xl font-black">500+</h3>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Global Members</p>
          </div>
          <div className="bg-slate-900 rounded-3xl p-8 text-white">
            <Star className="text-yellow-400 mb-4" />
            <h3 className="text-4xl font-black">4.9/5</h3>
            <p className="text-sm font-bold opacity-60 uppercase tracking-widest">Satisfaction</p>
          </div>
        </div>

        {/* Talent List */}
        <div className="bg-white border rounded-[2rem] p-8 shadow-sm">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2"><Briefcase size={20}/> Recent Talent Profiles</h2>
          <div className="w-full">
            {talent.map((p) => (
              <div key={p.id} className="flex items-center justify-between py-4 border-b last:border-0 hover:bg-slate-50 px-4 rounded-xl transition-all">
                <div>
                  <p className="font-bold">{p.name}</p>
                  <p className="text-sm text-slate-500">{p.role}</p>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold">{p.stack}</span>
                  <span className="text-xs font-bold text-green-500 uppercase">{p.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}