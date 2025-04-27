import React from 'react';
import { Brain, Lock, Code, Database, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advancing Medical Privacy Through Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mission is to provide researchers and medical professionals with powerful tools
            to protect patient privacy while advancing medical research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-6">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Advanced Processing</h3>
            <p className="text-gray-600">
              State-of-the-art algorithms for MRI defacing and anonymization, ensuring optimal
              results while preserving data integrity.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-6">
              <Lock className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Privacy First</h3>
            <p className="text-gray-600">
              Built with privacy as the cornerstone, implementing industry-standard security
              measures and compliance with medical data regulations.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-6">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Open Standards</h3>
            <p className="text-gray-600">
              Compatible with DICOM and NIfTI formats, ensuring seamless integration with
              existing medical imaging workflows.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white mb-20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-200">Privacy Compliance</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50M+</div>
              <div className="text-blue-200">Images Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-200">Research Centers</div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Trusted By Leading Institutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center">
              <Database className="w-12 h-12 text-gray-400" />
              <span className="ml-2 text-xl text-gray-600">Research Labs</span>
            </div>
            <div className="flex items-center justify-center">
              <Award className="w-12 h-12 text-gray-400" />
              <span className="ml-2 text-xl text-gray-600">Universities</span>
            </div>
            <div className="flex items-center justify-center">
              <Users className="w-12 h-12 text-gray-400" />
              <span className="ml-2 text-xl text-gray-600">Hospitals</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {['Python', 'PyTorch', 'DICOM', 'NIfTI', 'SimpleITK', 'FSL', 'React', 'TypeScript'].map((tech) => (
              <div key={tech} className="bg-white rounded-lg p-4 shadow-sm">
                <span className="text-gray-800">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    {/* References and License Sections */}
<div className="max-w-7xl mx-auto">
  {/* References Section */}
  <div className="bg-white shadow-2xl rounded-3xl p-10 w-full border-2 border-gray-100 mb-16">
    <h3 className="text-3xl font-bold text-blue-700 mb-6 border-b pb-3">Scientific References</h3>
    <ul className="list-decimal list-inside space-y-4 text-xl">
      <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10246049/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">A reproducibility evaluation of the effects of MRI defacing on brain segmentation (Gao et al., 2023)</a></li>
      <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9598466/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Modified MRI Anonymization (De-Facing) for Improved MEG Coregistration (Bruña et al., 2022)</a></li>
      <li><a href="https://pubmed.ncbi.nlm.nih.gov/33861913/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Systematic evaluation of the impact of defacing on quality and volumetric assessments on T1-weighted MR-images (Bhalerao et al., 2022)</a></li>
      <li><a href="https://www.nejm.org/doi/full/10.1056/NEJMc1908881" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Identification of Anonymous MRI Research Participants with Face-Recognition Software (Schwarz et al., 2019)</a></li>
    </ul>
  </div>

  {/* License Section */}
  <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-3xl mx-auto w-full border-2 border-gray-100 text-center">
    <h3 className="text-3xl font-bold text-blue-700 mb-4">License</h3>
    <p className="mb-4 text-xl text-gray-700">MIT License</p>
    <p className="text-lg text-gray-500">For questions or contributions, please open an issue or pull request!</p>
  </div>
</div>

    
    </div>
  );
};