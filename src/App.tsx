import React, { useState } from 'react';
import { FileUploader } from './components/FileUploader';
import { ProcessingOptions } from './components/ProcessingOptions';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Homepage } from './components/Homepage';
import { DefacingService } from './services/defacingService';
import { Logger } from './services/logger';


function App() {
  const [showUploader, setShowUploader] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedFiles, setProcessedFiles] = useState<Array<{
    id: string;
    originalName: string;
    status: 'success' | 'error';
    anonymized: boolean;
    defaced: boolean;
    message?: string;
    processedFileUrl?: string;
    originalFileUrl?: string;
  }>>([]);
  const [selectedTemplate, setSelectedTemplate] = useState('MNI-152');
  const [previewMode, setPreviewMode] = useState(true);
  
  const logger = new Logger('App');
  const defacingService = new DefacingService();
  
  const handleFilesSelected = (newFiles: File[]) => {
    logger.info('New files selected:', { count: newFiles.length });
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
  };
  
  const handleProcessFiles = async () => {
    if (files.length === 0) return;
    
    setIsProcessing(true);
    logger.info('Starting to process files:', { count: files.length });
    
    try {
      const results = await Promise.all(
        files.map(async (file) => {
          logger.info('Processing file:', { fileName: file.name, fileSize: file.size });
          const result = await defacingService.processImage(file);
          
          if (result.success) {
            logger.info('File processed successfully:', {
              fileName: file.name,
              processedFileUrl: result.data?.processedFileUrl,
              originalFileUrl: result.data?.originalFileUrl
            });
          } else {
            logger.error('File processing failed:', {
              fileName: file.name,
              error: result.error
            });
          }
          
          return {
            id: Math.random().toString(36).substring(2, 11),
            originalName: file.name,
            status: result.success ? 'success' : 'error',
            anonymized: result.success,
            defaced: result.success,
            message: result.message,
            processedFileUrl: result.data?.processedFileUrl,
            originalFileUrl: result.data?.originalFileUrl
          };
        })
      );
      
      setProcessedFiles(prev => [...prev, ...results]);
      setFiles([]);
      
      const successCount = results.filter(r => r.status === 'success').length;
      const errorCount = results.filter(r => r.status === 'error').length;
      
      logger.info('File processing completed', { 
        successCount,
        errorCount,
        totalFiles: results.length,
        successFiles: results.filter(r => r.status === 'success').map(r => r.originalName),
        errorFiles: results.filter(r => r.status === 'error').map(r => r.originalName)
      });
    } catch (error) {
      logger.error('Error processing files:', error);
    } finally {
      setIsProcessing(false);
    }
  };
  
  const handleClearProcessed = () => {
    logger.info('Clearing processed files');
    setProcessedFiles([]);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {showUploader ? (
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow p-6 mb-8">
                  <FileUploader 
                    onFilesSelected={handleFilesSelected} 
                    acceptedTypes={['.dcm']}
                    files={files}
                  />
                </div>
                
                <div className="bg-white rounded-lg shadow p-6">
                  <ProcessingOptions 
                    selectedTemplate={selectedTemplate}
                    setSelectedTemplate={setSelectedTemplate}
                    previewMode={previewMode}
                    setPreviewMode={setPreviewMode}
                    onProcessFiles={handleProcessFiles}
                    isProcessing={isProcessing}
                    fileCount={files.length}
                  />
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <Dashboard 
                  processedFiles={processedFiles}
                  onClearProcessed={handleClearProcessed}
                  previewMode={previewMode}
                />
              </div>
            </div>
          </div>
        ) : (
          <Homepage onGetStarted={() => setShowUploader(true)} />
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;