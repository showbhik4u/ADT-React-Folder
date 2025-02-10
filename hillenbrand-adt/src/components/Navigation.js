import React from 'react';
import { Book, Database, Bot, Settings, Home } from 'lucide-react';

const Navigation = ({ activePage, setActivePage }) => (
  <div className="w-64 bg-white min-h-screen shadow-lg">
    <div className="p-4 border-b">
      <h1 className="text-xl font-bold">Navigation</h1>
    </div>
    <nav className="p-4">
      {[
        { id: 'home', label: 'Home', icon: <Home size={20} className="text-gray-500" /> },
        { id: 'catalog', label: 'Data Catalog Generation', icon: <Book size={20} className="text-gray-500" /> },
        { id: 'mapping', label: 'Data Mapping Automation', icon: <Database size={20} className="text-gray-500" /> },
        { id: 'bot', label: 'Self Service Bot', icon: <Bot size={20} className="text-gray-500" /> },
        { id: 'settings', label: 'Settings', icon: <Settings size={20} className="text-gray-500" /> }
      ].map(item => (
        <div
          key={item.id}
          onClick={() => setActivePage(item.id)}
          className={`flex items-center p-3 rounded-lg cursor-pointer mb-2 ${
            activePage === item.id 
              ? 'bg-blue-50 text-blue-600' 
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          {item.icon}
          <span className="ml-3">{item.label}</span>
        </div>
      ))}
    </nav>
  </div>
);

export default Navigation;