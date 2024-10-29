import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BrainCircuit, 
  History,
  Settings,
  Activity
} from 'lucide-react';

export default function Sidebar() {
  const links = [
    { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/strategies', icon: BrainCircuit, label: 'Strategies' },
    { to: '/backtesting', icon: History, label: 'Backtesting' },
    { to: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-800 border-r border-gray-700">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <Activity className="h-8 w-8 text-blue-500" />
          <span className="text-xl font-bold">TradingBot</span>
        </div>
      </div>

      <nav className="mt-6">
        {links.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center space-x-2 px-6 py-3 text-sm ${
                isActive
                  ? 'bg-gray-700 border-l-4 border-blue-500'
                  : 'text-gray-400 hover:bg-gray-700'
              }`
            }
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}