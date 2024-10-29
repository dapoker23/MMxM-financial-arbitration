import React from 'react';
import { Plus, Search, SlidersHorizontal } from 'lucide-react';

export default function Strategies() {
  const strategies = [
    {
      name: 'Moving Average Crossover',
      type: 'Trend Following',
      status: 'Active',
      winRate: '68%',
      profit: '+12.45%',
    },
    {
      name: 'RSI Divergence',
      type: 'Mean Reversion',
      status: 'Inactive',
      winRate: '72%',
      profit: '+8.91%',
    },
    {
      name: 'Volume Profile',
      type: 'Price Action',
      status: 'Testing',
      winRate: '65%',
      profit: '+5.23%',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Trading Strategies</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          New Strategy
        </button>
      </div>

      <div className="flex space-x-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search strategies..."
            className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
          <SlidersHorizontal className="h-5 w-5" />
        </button>
      </div>

      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-900">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Strategy</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Win Rate</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Profit</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {strategies.map((strategy, index) => (
              <tr key={index} className="hover:bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium">{strategy.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{strategy.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    strategy.status === 'Active' ? 'bg-green-500/20 text-green-500' :
                    strategy.status === 'Testing' ? 'bg-yellow-500/20 text-yellow-500' :
                    'bg-gray-500/20 text-gray-500'
                  }`}>
                    {strategy.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{strategy.winRate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-green-500">{strategy.profit}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <button className="text-blue-500 hover:text-blue-400">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}