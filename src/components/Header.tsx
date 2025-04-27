import React from 'react';
import { BrainCircuit, Shield, Lock, Code, Database, Users, Award, Building2, Cpu, Layers, Zap, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

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
              <li><Link to="/" className="hover:text-blue-200 transition-colors">Home</Link></li>
              <li><Link to="/docs" className="hover:text-blue-200 transition-colors">Documentation</Link></li>
              <li><Link to="/about" className="hover:text-blue-200 transition-colors">About</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};