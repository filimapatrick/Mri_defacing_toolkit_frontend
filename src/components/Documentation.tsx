import React, { useState } from 'react';
import { BookOpen, FileText, Layers, Shield, Server } from 'lucide-react';

const sections = [
  {
    key: 'getting-started',
    title: 'Getting Started',
    icon: <BookOpen size={28} className="mr-3" />,
    content: (
      <div>
      <h2 className="text-4xl font-extrabold mb-6 text-blue-900">Quick Start Guide</h2>
      <p className="text-xl mb-8 text-gray-700 max-w-2xl">
        The MRI Anonymization &amp; Defacing Toolkit provides a secure way to process medical imaging data while protecting patient privacy. Get started in minutes with our simple workflow.
      </p>
      <ol className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <li className="flex items-center bg-white rounded-2xl shadow p-6 text-xl">
          <span className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-2xl mr-6">1</span>
          Navigate to the Upload page using the navigation menu
        </li>
        <li className="flex items-center bg-white rounded-2xl shadow p-6 text-xl">
          <span className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-2xl mr-6">2</span>
          Drag and drop your DICOM or NIfTI files into the upload area
        </li>
        <li className="flex items-center bg-white rounded-2xl shadow p-6 text-xl">
          <span className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-2xl mr-6">3</span>
          Select your preferred defacing template and options
        </li>
        <li className="flex items-center bg-white rounded-2xl shadow p-6 text-xl">
          <span className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-2xl mr-6">4</span>
          Click <b>Process</b> to anonymize and deface your MRI data
        </li>
        <li className="flex items-center bg-white rounded-2xl shadow p-6 text-xl">
          <span className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-2xl mr-6">5</span>
          Download the processed NIfTI files and preview results
        </li>
      </ol>
    </div>
    ),
  },
  {
    key: 'file-formats',
    title: 'File Formats',
    icon: <FileText size={28} className="mr-3" />,
    content: (
      <div>
        <h2 className="text-4xl font-extrabold mb-6 text-blue-900">File Formats</h2>
        <p className="text-xl mb-8 text-gray-700 max-w-2xl">Supported file formats for input and output ensure compatibility with most neuroimaging workflows.</p>
        <ul className="space-y-4 text-xl">
          <li className="flex items-center"><span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-lg mr-4">D</span> <b>DICOM (.dcm):</b> Standard for medical imaging data input.</li>
          <li className="flex items-center"><span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-lg mr-4">N</span> <b>NIfTI (.nii, .nii.gz):</b> Output format for processed, research-ready MRI data.</li>
        </ul>
        <p className="mt-8 text-lg text-gray-500">All conversions and processing are handled automatically by the backend.</p>
      </div>
    ),
  },
  {
    key: 'templates',
    title: 'Templates',
    icon: <Layers size={28} className="mr-3" />,
    content: (
      <div>
        <h2 className="text-4xl font-extrabold mb-6 text-blue-900">Templates</h2>
        <p className="text-xl mb-8 text-gray-700 max-w-2xl">Choose from a variety of defacing templates to suit your research needs:</p>
        <ul className="space-y-4 text-xl">
          <li><b>MNI-152 Standard:</b> Default template for adult brains.</li>
          <li><b>Pediatric Template:</b> Optimized for children's MRI scans.</li>
          <li><b>Elderly Population:</b> For aging brain studies.</li>
          <li><b>Custom Template:</b> Upload your own template for specialized use cases.</li>
        </ul>
      </div>
    ),
  },
  {
    key: 'privacy-security',
    title: 'Privacy & Security',
    icon: <Shield size={28} className="mr-3" />,
    content: (
      <div>
        <h2 className="text-4xl font-extrabold mb-6 text-blue-900">Privacy &amp; Security</h2>
        <p className="text-xl mb-8 text-gray-700 max-w-2xl">We take privacy and security seriously to ensure your data is always protected:</p>
        <ul className="space-y-4 text-xl">
          <li>All processing is performed locally or on secure, compliant servers.</li>
          <li>Facial features and identifying metadata are removed from all outputs.</li>
          <li>Compliance with HIPAA, GDPR, and other medical data regulations.</li>
          <li>End-to-end encryption for data in transit.</li>
        </ul>
      </div>
    ),
  },
  {
    key: 'api-reference',
    title: 'API Reference',
    icon: <Server size={28} className="mr-3" />,
    content: (
      <div>
        <h2 className="text-4xl font-extrabold mb-6 text-blue-900">API Reference</h2>
        <p className="text-xl mb-8 text-gray-700 max-w-2xl">Integrate with our backend via RESTful API for automated workflows:</p>
        <div className="bg-gray-50 rounded-2xl p-6 mb-6 text-lg">
          <b>POST /deface/</b><br />
          <span className="text-gray-600">Upload a DICOM file for processing.</span>
          <pre className="bg-gray-100 rounded-xl p-4 mt-3 text-base overflow-x-auto">{`{
  file: <DICOM file>
}`}</pre>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 mb-6 text-lg">
          <b>Response:</b>
          <pre className="bg-gray-100 rounded-xl p-4 mt-3 text-base overflow-x-auto">{`{
  success: true,
  message: "File processed successfully",
  processedFileUrl: "...",
  originalFileUrl: "...",
  previewPngUrl: "..."
}`}</pre>
        </div>
        <p className="text-gray-500 text-lg">See the README or contact us for more advanced API usage.</p>
      </div>
    ),
  },
];

const Documentation: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-row w-full">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-1/5 min-w-[220px] max-w-xs bg-white border-r border-blue-100 py-12 px-4 sticky top-0 h-screen">
        <h1 className="text-3xl font-extrabold text-blue-900 mb-10">Documentation</h1>
        <nav className="flex flex-col space-y-2">
          {sections.map((section, idx) => (
            <button
              key={section.key}
              className={`flex items-center w-full px-4 py-3 rounded-xl text-lg font-semibold transition-colors
                ${activeIdx === idx ? 'bg-blue-50 text-blue-700 shadow border border-blue-200' : 'text-gray-700 hover:bg-blue-50'}`}
              onClick={() => setActiveIdx(idx)}
            >
              {section.icon}
              {section.title}
            </button>
          ))}
        </nav>
      </aside>
      {/* Mobile Sidebar */}
      <aside className="md:hidden w-full bg-white border-b border-blue-100 px-4 py-4 sticky top-0 z-10">
        <div className="flex space-x-2 overflow-x-auto">
          {sections.map((section, idx) => (
            <button
              key={section.key}
              className={`flex items-center px-4 py-2 rounded-xl text-base font-semibold whitespace-nowrap transition-colors
                ${activeIdx === idx ? 'bg-blue-50 text-blue-700 shadow border border-blue-200' : 'text-gray-700 hover:bg-blue-50'}`}
              onClick={() => setActiveIdx(idx)}
            >
              {section.icon}
              {section.title}
            </button>
          ))}
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 w-4/5 px-8 md:px-16 py-12 md:py-20 flex flex-col items-start overflow-y-auto">
        {sections[activeIdx].content}
      </main>
    </div>
  );
};

export default Documentation; 