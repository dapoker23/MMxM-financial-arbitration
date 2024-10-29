import React from 'react';
import { CheckCircle2, XCircle, Shield, Globe2, Cpu, Link } from 'lucide-react';

export default function SystemStatus() {
  const statuses = [
    { name: 'API Connection', status: true, icon: Globe2 },
    { name: 'WebSocket Feed', status: true, icon: Link },
    { name: 'Trading Permissions', status: true, icon: Shield },
    { name: 'Risk Management', status: true, icon: CheckCircle2 },
    { name: 'Strategy Engine', status: true, icon: Cpu },
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">System Status</h2>
        <div className="flex items-center">
          <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">
            Ready for Live Trading
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {statuses.map(({ name, status, icon: Icon }) => (
          <div key={name} className="flex items-center space-x-2 bg-gray-900 p-3 rounded-lg">
            <Icon className={`h-5 w-5 ${status ? 'text-green-500' : 'text-red-500'}`} />
            <div>
              <div className="text-sm font-medium">{name}</div>
              <div className={`text-xs ${status ? 'text-green-500' : 'text-red-500'}`}>
                {status ? 'Connected' : 'Error'}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-sm text-gray-400">
        <a href="https://docs.example.com/trading-requirements" className="text-blue-400 hover:underline">
          View detailed requirements for live trading →
        </a>
      </div>
    </div>
  );
}