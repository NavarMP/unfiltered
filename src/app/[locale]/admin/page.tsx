"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, FileText, Image as ImageIcon, Settings, LogOut, Plus, Search, Edit2, Trash2 } from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const sidebarItems = [
    { id: "overview", label: "Overview", icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: "essays", label: "Essays", icon: <FileText className="w-5 h-5" /> },
    { id: "posters", label: "Posters", icon: <ImageIcon className="w-5 h-5" /> },
    { id: "settings", label: "Settings", icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div className="flex min-h-[80vh] bg-secondary/20 backdrop-blur-xl rounded-[3rem] border border-white/10 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 p-8 flex flex-col gap-12">
        <div className="font-display font-black text-2xl tracking-tighter uppercase text-primary">
          Admin
        </div>
        
        <nav className="flex flex-col gap-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${
                activeTab === item.id 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                  : "hover:bg-primary/10 text-muted-foreground"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <button className="mt-auto flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-destructive hover:bg-destructive/10 transition-colors">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-12 space-y-12 overflow-y-auto">
        <header className="flex items-center justify-between">
          <h1 className="text-4xl font-display font-bold capitalize">{activeTab}</h1>
          <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:scale-105 transition-transform">
            <Plus className="w-5 h-5" />
            Create New
          </button>
        </header>

        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Total Essays", value: "12", color: "bg-blue-500/10 text-blue-500" },
              { label: "Total Posters", value: "8", color: "bg-purple-500/10 text-purple-500" },
              { label: "Drafts", value: "3", color: "bg-orange-500/10 text-orange-500" },
            ].map((stat, i) => (
              <div key={i} className="p-8 bg-background/50 border border-white/5 rounded-3xl space-y-2">
                <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</span>
                <div className={`text-4xl font-display font-black ${stat.color.split(' ')[1]}`}>{stat.value}</div>
              </div>
            ))}
          </div>
        )}

        {(activeTab === "essays" || activeTab === "posters") && (
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-background/50 border border-white/5 rounded-2xl">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input 
                type="text" 
                placeholder={`Search ${activeTab}...`} 
                className="bg-transparent border-none outline-none flex-1 font-medium"
              />
            </div>

            <div className="bg-background/50 border border-white/5 rounded-[2rem] overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-secondary/50 border-b border-white/10">
                  <tr>
                    <th className="px-8 py-6 font-bold">Title</th>
                    <th className="px-8 py-6 font-bold">Status</th>
                    <th className="px-8 py-6 font-bold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[1, 2, 3].map((item) => (
                    <tr key={item} className="hover:bg-primary/5 transition-colors group">
                      <td className="px-8 py-6">
                        <div className="font-bold">Sample {activeTab.slice(0, -1)} Title {item}</div>
                        <div className="text-sm text-muted-foreground">Updated 2 days ago</div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-black uppercase rounded-full">Published</span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex justify-end gap-2">
                          <button className="p-2 hover:bg-blue-500/10 text-blue-500 rounded-lg transition-colors"><Edit2 className="w-4 h-4" /></button>
                          <button className="p-2 hover:bg-destructive/10 text-destructive rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
