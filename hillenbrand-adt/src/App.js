import React, { useState } from 'react';
import Navigation from './components/Navigation';
import DataCatalog from './components/DataCatalog';
import DataMapping from './components/DataMapping';
import ChatBot from './components/ChatBot';
import { Book, Database, Bot } from 'lucide-react';

const App = () => {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1">
        <header className="bg-blue-600 text-white p-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">AI POWERED DATA CATALOG GENERATION</h1>
          <div className="text-white font-bold text-2xl">
            HILLENBRAND
          </div>
        </header>
        
        <main className="p-6">
          {activePage === 'home' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Data Catalog Generation',
                  icon: <Book size={48} />,
                  onClick: () => setActivePage('catalog')
                },
                {
                  title: 'Data Mapping Automation',
                  icon: <Database size={48} />,
                  onClick: () => setActivePage('mapping')
                },
                {
                  title: 'Self Service ChatBot',
                  icon: <Bot size={48} />,
                  onClick: () => setActivePage('bot')
                }
              ].map((item, index) => (
                <div
                  key={index}
                  onClick={item.onClick}
                  className="bg-white rounded-xl shadow-lg p-8 text-center cursor-pointer hover:shadow-xl transition-shadow"
                >
                  <div className="text-blue-600 mb-6">{item.icon}</div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                </div>
              ))}
            </div>
          )}
          {activePage === 'catalog' && <DataCatalog />}
          {activePage === 'mapping' && <DataMapping />}
          {activePage === 'bot' && <ChatBot />}
        </main>
      </div>
    </div>
  );
};

export default App;