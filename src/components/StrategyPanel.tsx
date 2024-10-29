import React from 'react';
import { Play, Pause, AlertTriangle, Cpu } from 'lucide-react';

export default function StrategyPanel() {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Active Strategies</h2>
        <div className="flex space-x-2">
          <button className="flex items-center px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700">
            <Play className="h-4 w-4 mr-2" />
            Start All
          </button>
          <button className="flex items-center px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700">
            <Pause className="h-4 w-4 mr-2" />
            Stop All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {['Liquidity Zones', 'False Breakouts', 'Fair Value Gaps'].map((strategy, i) => (
          <div key={i} className="bg-gray-900 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Cpu className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="font-bold">{strategy}</h3>
              </div>
              <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">
                Active
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Profit Today</span>
                <span className="text-green-500">+$1,234.56</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Total Trades</span>
                <span>24</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Win Rate</span>
                <span>76%</span>
              </div>
            </div>
            {i === 1 && (
              <div className="mt-3 flex items-center text-yellow-500 text-sm">
                <AlertTriangle className="h-4 w-4 mr-1" />
                High volatility detected
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}