import React from 'react';

export default function OrderBook() {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-lg font-bold mb-4">Order Book</h2>
      <div className="space-y-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex justify-between text-sm">
            <span className="text-red-500">45,123.45</span>
            <span className="text-gray-400">0.5432 BTC</span>
            <span className="text-gray-400">$24,567.89</span>
          </div>
        ))}
        <div className="py-2 text-center text-xl font-bold text-green-500">
          45,123.45
        </div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex justify-between text-sm">
            <span className="text-green-500">45,123.45</span>
            <span className="text-gray-400">0.5432 BTC</span>
            <span className="text-gray-400">$24,567.89</span>
          </div>
        ))}
      </div>
    </div>
  );
}