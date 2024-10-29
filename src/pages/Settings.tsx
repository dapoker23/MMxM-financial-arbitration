import React from 'react';
import { Save, Shield, Bell, Wallet, Database, Network } from 'lucide-react';

export default function Settings() {
  return (
    <div className="max-w-4xl space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Settings</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Shield className="h-5 w-5 text-blue-500" />
            <h2 className="text-lg font-bold">Security Settings</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                API Key
              </label>
              <input
                type="password"
                className="w-full bg-gray-900 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value="************************"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                API Secret
              </label>
              <input
                type="password"
                className="w-full bg-gray-900 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value="************************"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="2fa"
                className="rounded bg-gray-900 border-gray-700 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="2fa" className="ml-2 text-sm">
                Enable Two-Factor Authentication
              </label>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Bell className="h-5 w-5 text-blue-500" />
            <h2 className="text-lg font-bold">Notifications</h2>
          </div>
          <div className="space-y-3">
            {['Trade Execution', 'Strategy Alerts', 'Price Alerts', 'System Updates'].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <span>{item}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Wallet className="h-5 w-5 text-blue-500" />
            <h2 className="text-lg font-bold">Trading Preferences</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Default Trading Pair
              </label>
              <select className="w-full bg-gray-900 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>BTC/USDT</option>
                <option>ETH/USDT</option>
                <option>SOL/USDT</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Risk Level
              </label>
              <select className="w-full bg-gray-900 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>Conservative</option>
                <option>Moderate</option>
                <option>Aggressive</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Max Position Size (%)
              </label>
              <input
                type="number"
                className="w-full bg-gray-900 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                defaultValue="5"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Database className="h-5 w-5 text-blue-500" />
            <h2 className="text-lg font-bold">Data Settings</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Data Provider
              </label>
              <select className="w-full bg-gray-900 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>Binance</option>
                <option>CoinGecko</option>
                <option>CryptoCompare</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Update Frequency
              </label>
              <select className="w-full bg-gray-900 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>Real-time</option>
                <option>1 minute</option>
                <option>5 minutes</option>
              </select>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="historical"
                className="rounded bg-gray-900 border-gray-700 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="historical" className="ml-2 text-sm">
                Cache Historical Data
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Network className="h-5 w-5 text-blue-500" />
          <h2 className="text-lg font-bold">Network Configuration</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              WebSocket Endpoint
            </label>
            <input
              type="text"
              className="w-full bg-gray-900 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="wss://example.com/ws"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              REST API Endpoint
            </label>
            <input
              type="text"
              className="w-full bg-gray-900 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="https://api.example.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
}