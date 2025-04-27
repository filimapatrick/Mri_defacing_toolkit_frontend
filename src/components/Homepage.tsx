import React from 'react';
import { BrainCircuit, Shield, Users, Zap } from 'lucide-react';

interface HomepageProps {
  onGetStarted: () => void;
}

export const Homepage: React.FC<HomepageProps> = ({ onGetStarted }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-90" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Secure MRI Processing
          <span className="block text-blue-200">Made Simple</span>
        </h1>
        <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
          Advanced anonymization and defacing for medical imaging data.
          Protect patient privacy while maintaining research integrity.
        </p>
        <button
          onClick={onGetStarted}
          className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          Get Started
        </button>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Privacy First</h3>
            <p className="text-blue-100">
              Industry-standard anonymization and defacing techniques to protect patient data
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 mb-6">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Fast Processing</h3>
            <p className="text-blue-100">
              Efficient batch processing of DICOM and NIfTI files with real-time preview
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Research Ready</h3>
            <p className="text-blue-100">
              Maintain data quality for research while ensuring complete privacy protection
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};