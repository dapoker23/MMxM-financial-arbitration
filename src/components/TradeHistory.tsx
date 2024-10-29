import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function TradeHistory() {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-lg font-bold mb-4">Trade History</h2>
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              {i % 2 === 0 ? (
                <ArrowUpRight className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowDownRight className="h-4 w-4 text-red-500" />
              )}
              <span className="ml-2">BTC/USDT</span>
            </div>
            <span className={i % 2 === 0 ? 'text-green-500' : 'text-red-500'}>
              {i % 2 === 0 ? '+' : '-'}0.5432 BTC
            </span>
            <span className="text-gray-400">$24,567.89</span>
          </div>
        ))}
      </div>
    </div>
  );
}