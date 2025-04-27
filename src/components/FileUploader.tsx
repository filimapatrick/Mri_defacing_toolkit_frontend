import React, { useRef, useState } from 'react';
import { Upload, File, X } from 'lucide-react';

interface FileUploaderProps {
  onFilesSelected: (files: File[]) => void;
  acceptedTypes: string[];
  files: File[];
}

export const FileUploader: React.FC<FileUploaderProps> = ({ 
  onFilesSelected, 
  acceptedTypes,
  files
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileArray = Array.from(event.target.files);
      onFilesSelected(fileArray);
    }
  };
  
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    
    if (event.dataTransfer.files) {
      const fileArray = Array.from(event.dataTransfer.files);
      onFilesSelected(fileArray);
    }
  };
  
  const removeFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    onFilesSelected(newFiles);
  };
  
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">Upload Files</h2>
      
      <div 
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
        }`}
        onClick={() => fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          Drag and drop your DICOM or NIfTI files here, or click to browse
        </p>
        <p className="mt-1 text-xs text-gray-500">
          Supported formats: {acceptedTypes.join(', ')}
        </p>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={acceptedTypes.join(',')}
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      
      {files.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Selected Files ({files.length})</h3>
          <ul className="divide-y divide-gray-200 max-h-60 overflow-y-auto">
            {files.map((file, index) => (
              <li key={index} className="py-2 flex justify-between items-center text-sm">
                <div className="flex items-center">
                  <File size={16} className="text-gray-400 mr-2" />
                  <span className="text-gray-800 truncate max-w-[200px]">{file.name}</span>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X size={16} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};