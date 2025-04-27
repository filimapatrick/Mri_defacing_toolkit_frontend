import React from 'react';
import { Github, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2025 MRI Anonymization & Defacing Toolkit</p>
            <p className="text-xs text-gray-400 mt-1">
              Protecting patient privacy with advanced imaging technology
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <MessageSquare size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};