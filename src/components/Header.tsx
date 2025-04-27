import React from 'react';
import { BrainCircuit } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BrainCircuit size={32} className="text-blue-200" />
            <div>
              <h1 className="text-xl font-bold">MRI Anonymization & Defacing Toolkit</h1>
              <p className="text-blue-200 text-sm">Secure patient privacy with advanced processing</p>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-blue-200 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">About</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};