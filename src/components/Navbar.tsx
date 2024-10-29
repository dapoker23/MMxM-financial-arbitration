import React from 'react';
import { Activity, BarChart3, BookOpen, Wallet2, Settings, Bell } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Activity className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold">TradingBot</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink icon={<BarChart3 className="h-5 w-5" />} text="Dashboard" active />
            <NavLink icon={<BookOpen className="h-5 w-5" />} text="Strategies" />
            <NavLink icon={<Wallet2 className="h-5 w-5" />} text="Portfolio" />
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-700">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-700">
              <Settings className="h-5 w-5" />
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ icon, text, active = false }: { icon: React.ReactNode; text: string; active?: boolean }) {
  return (
    <a
      href="#"
      className={\`flex items-center space-x-2 px-3 py-2 rounded-lg \${
        active ? 'text-blue-500' : 'text-gray-300 hover:text-white hover:bg-gray-700'
      }\`}
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}