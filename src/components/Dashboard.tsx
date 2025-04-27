import React from 'react';
import { Trash2, Eye, CheckCircle, XCircle, Download } from 'lucide-react';
import { ImagePreview } from './ImagePreview';

interface ProcessedFile {
  id: string;
  originalName: string;
  status: 'success' | 'error';
  anonymized: boolean;
  defaced: boolean;
  processedFileUrl?: string;
  originalFileUrl?: string;
}

interface DashboardProps {
  processedFiles: ProcessedFile[];
  onClearProcessed: () => void;
  previewMode: boolean;
}

export const Dashboard: React.FC<DashboardProps> = ({
  processedFiles,
  onClearProcessed,
  previewMode,
}) => {
  if (processedFiles.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <div className="py-12">
          <h3 className="text-lg font-medium text-gray-800 mb-2">No Files Processed Yet</h3>
          <p className="text-gray-500">
            Upload your MRI files and click "Process" to begin anonymization and defacing.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">Processing Results</h2>
        <button
          onClick={onClearProcessed}
          className="text-gray-500 hover:text-red-500 flex items-center text-sm"
        >
          <Trash2 size={16} className="mr-1" />
          Clear All
        </button>
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-1 gap-4">
          {processedFiles.map((file) => (
            <div key={file.id} className="border rounded-lg overflow-hidden">
              <div className="p-4 flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-800">{file.originalName}</h3>
                  <div className="mt-1 flex items-center">
                    <span 
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        file.status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {file.status === 'success' ? (
                        <CheckCircle size={12} className="mr-1" />
                      ) : (
                        <XCircle size={12} className="mr-1" />
                      )}
                      {file.status === 'success' ? 'Processed Successfully' : 'Processing Failed'}
                    </span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  {file.status === 'success' && (
                    <button 
                      onClick={() => {
                        if (file.processedFileUrl) {
                          window.open(file.processedFileUrl, '_blank');
                        }
                      }}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                      title="Download processed file"
                    >
                      <Download size={18} />
                    </button>
                  )}
                  <button 
                    onClick={() => {
                      if (file.originalFileUrl) {
                        window.open(file.originalFileUrl, '_blank');
                      }
                    }}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                    title="View original file"
                  >
                    <Eye size={18} />
                  </button>
                </div>
              </div>
              
              {previewMode && file.status === 'success' && (
                <div className="px-4 pb-4">
                  <ImagePreview fileId={file.id} fileName={file.originalName} />
                </div>
              )}
              
              <div className="bg-gray-50 px-4 py-3 text-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-500">Anonymization:</p>
                    <p className={`font-medium ${file.anonymized ? 'text-green-600' : 'text-red-600'}`}>
                      {file.anonymized ? 'Complete' : 'Failed'}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Defacing:</p>
                    <p className={`font-medium ${file.defaced ? 'text-green-600' : 'text-red-600'}`}>
                      {file.defaced ? 'Complete' : 'Failed'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};