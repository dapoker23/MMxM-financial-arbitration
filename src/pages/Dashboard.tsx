import React from 'react';
import SystemStatus from '../components/SystemStatus';
import TradingView from '../components/TradingView';
import StrategyPanel from '../components/StrategyPanel';
import OrderBook from '../components/OrderBook';
import TradeHistory from '../components/TradeHistory';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <SystemStatus />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TradingView />
        </div>
        <div>
          <OrderBook />
        </div>
      </div>
      
      <StrategyPanel />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TradeHistory />
        <div className="bg-gray-800 rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Performance Analytics</h2>
          {/* Add performance metrics here */}
        </div>
      </div>
    </div>
  );
}