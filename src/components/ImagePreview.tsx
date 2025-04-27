import React from 'react';

interface ImagePreviewProps {
  fileId: string;
  fileName: string;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({ fileId, fileName }) => {
  // In a real application, we would fetch actual image data
  // Here we're using placeholder images for demonstration
  
  return (
    <div className="rounded-md overflow-hidden border border-gray-200">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-2">
          <div className="text-xs text-gray-500 mb-1">Original</div>
          <div className="bg-gray-100 rounded aspect-square flex items-center justify-center overflow-hidden">
            <img 
              src={`https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=300`} 
              alt={`Original scan`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-2">
          <div className="text-xs text-gray-500 mb-1">Processed (Anonymized & Defaced)</div>
          <div className="bg-gray-100 rounded aspect-square flex items-center justify-center overflow-hidden">
            <img 
              src={`https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=300&blur=10`} 
              alt={`Processed scan`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-3 py-2 text-xs text-gray-500">
        {fileName} - Preview images are for demonstration only
      </div>
    </div>
  );
};