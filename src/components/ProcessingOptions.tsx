import React from 'react';
import { Settings, PlayCircle } from 'lucide-react';

interface ProcessingOptionsProps {
  selectedTemplate: string;
  setSelectedTemplate: (template: string) => void;
  previewMode: boolean;
  setPreviewMode: (enabled: boolean) => void;
  onProcessFiles: () => void;
  isProcessing: boolean;
  fileCount: number;
}

const templates = [
  { id: 'MNI-152', name: 'MNI-152 Standard' },
  { id: 'pediatric', name: 'Pediatric Template' },
  { id: 'elderly', name: 'Elderly Population' },
  { id: 'custom', name: 'Custom Template' },
];

export const ProcessingOptions: React.FC<ProcessingOptionsProps> = ({
  selectedTemplate,
  setSelectedTemplate,
  previewMode,
  setPreviewMode,
  onProcessFiles,
  isProcessing,
  fileCount,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center">
          <Settings size={18} className="mr-2 text-blue-600" />
          Processing Options
        </h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Defacing Template
          </label>
          <select
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            {templates.map((template) => (
              <option key={template.id} value={template.id}>
                {template.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="previewMode"
            checked={previewMode}
            onChange={(e) => setPreviewMode(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="previewMode" className="ml-2 block text-sm text-gray-700">
            Generate before/after previews
          </label>
        </div>
        
        <div className="pt-2">
          <button
            onClick={onProcessFiles}
            disabled={isProcessing || fileCount === 0}
            className={`w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              isProcessing || fileCount === 0
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            }`}
          >
            {isProcessing ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              <>
                <PlayCircle size={18} className="mr-2" />
                Process {fileCount} {fileCount === 1 ? 'File' : 'Files'}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};