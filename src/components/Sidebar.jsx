import React from 'react';
import { Home, BookOpen, FileText, User, Settings } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <Home size={20} />, label: 'Dashboard', active: true },
    { icon: <BookOpen size={20} />, label: 'Courses' },
    { icon: <FileText size={20} />, label: 'Assignments' },
    { icon: <User size={20} />, label: 'Profile' },
    { icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <div className="w-64 bg-slate-900 h-screen text-white flex flex-col fixed left-0 top-0">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-400">EduDash</h2>
      </div>
      <nav className="flex-1 px-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center space-x-3 p-3 rounded-lg mb-2 cursor-pointer transition-colors ${
              item.active ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </nav>
      <div className="p-6 border-t border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" />
          </div>
          <div>
            <p className="text-sm font-semibold">Alex Johnson</p>
            <p className="text-xs text-slate-400 text-ellipsis overflow-hidden">alex.j@uni.edu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
