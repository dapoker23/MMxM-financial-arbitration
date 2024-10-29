import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function TradingView() {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold">BTC/USDT</h2>
          <div className="flex items-center mt-1">
            <span className="text-2xl font-bold text-green-500">$45,123.45</span>
            <div className="ml-2 flex items-center text-green-500">
              <ArrowUpRight className="h-4 w-4" />
              <span className="text-sm">+2.34%</span>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Buy</button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Sell</button>
        </div>
      </div>
      
      <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">Chart will be integrated here</span>
      </div>
    </div>
  );
}