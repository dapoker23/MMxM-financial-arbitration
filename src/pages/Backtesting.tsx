import React from 'react';
import { Calendar, Download, PlayCircle } from 'lucide-react';

export default function Backtesting() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Strategy Backtesting</h1>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
            <Download className="h-4 w-4 mr-2" />
            Export Results
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
            <PlayCircle className="h-4 w-4 mr-2" />
            Run Backtest
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">Backtest Configuration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Strategy</label>
                <select className="w-full bg-gray-900 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option>Moving Average Crossover</option>
                  <option>RSI Divergence</option>
                  <option>Volume Profile</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Market Pair</label>
                <select className="w-full bg-gray-900 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option>BTC/USDT</option>
                  <option>ETH/USDT</option>
                  <option>SOL/USDT</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Time Period</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Select date range"
                    className="w-full bg-gray-900 rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Initial Capital</label>
                <input
                  type="text"
                  placeholder="Enter amount"
                  className="w-full bg-gray-900 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  defaultValue="10000"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">Performance Chart</h2>
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Chart will be displayed here</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">Results Summary</h2>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-400">Total Return</div>
                <div className="text-2xl font-bold text-green-500">+24.56%</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-400">Win Rate</div>
                  <div className="text-lg font-semibold">68%</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Profit Factor</div>
                  <div className="text-lg font-semibold">1.85</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Max Drawdown</div>
                  <div className="text-lg font-semibold text-red-500">-12.34%</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Sharpe Ratio</div>
                  <div className="text-lg font-semibold">1.92</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">Trade Statistics</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Total Trades</span>
                <span>156</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Winning Trades</span>
                <span className="text-green-500">106</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Losing Trades</span>
                <span className="text-red-500">50</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Avg. Trade Duration</span>
                <span>4h 23m</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}