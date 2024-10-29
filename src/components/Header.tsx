import React from 'react';
import { Bell, Settings, Wallet } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const titles = {
    '/': 'Dashboard',
    '/strategies': 'Trading Strategies',
    '/backtesting': 'Backtesting',
    '/settings': 'Settings'
  };

  return (
    <header className="h-16 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-6">
      <h1 className="text-xl font-bold">{titles[location.pathname as keyof typeof titles]}</h1>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-700 rounded-full">
          <Bell className="h-5 w-5" />
        </button>
        <button className="p-2 hover:bg-gray-700 rounded-full">
          <Settings className="h-5 w-5" />
        </button>
        <button className="flex items-center px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
          <Wallet className="h-4 w-4 mr-2" />
          Connect Wallet
        </button>
      </div>
    </header>
  );
}