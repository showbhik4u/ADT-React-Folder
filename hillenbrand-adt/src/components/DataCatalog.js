import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const DataCatalog = () => {
  const [files, setFiles] = useState([]);
  const [selectedTables, setSelectedTables] = useState([]);

  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles([...files, ...uploadedFiles]);
  };

  return (
    <div className="p-8 space-y-8">
      {/* Upload Area */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center">
        <Upload className="mx-auto mb-4 text-blue-500" size={40} />
        <p className="text-lg mb-4">Drag and Drop Here</p>
        <p className="text-gray-500 mb-4">Or</p>
        <input
          type="file"
          id="file-upload"
          className="hidden"
          multiple
          onChange={handleFileUpload}
        />
        <label
          htmlFor="file-upload"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors"
        >
          Select file
        </label>
      </div>

      {/* Data Assets */}
      {files.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Data Assets</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded">
              <h3 className="font-medium">Tables</h3>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Generate Catalog
              </button>
            </div>
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded">
                <span>{file.name}</span>
                <button className="text-blue-500 hover:text-blue-600">
                  Download Catalog
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Generated Descriptions */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-6">Generated Descriptions</h2>
        <table className="w-full">
          <thead>
            <tr className="text-left bg-gray-50">
              <th className="p-4 font-medium">Table</th>
              <th className="p-4 font-medium">Column</th>
              <th className="p-4 font-medium">Column Description</th>
              <th className="p-4 font-medium">Detailed Description</th>
            </tr>
          </thead>
          <tbody>
            {/* Add table rows here */}
          </tbody>
        </table>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
            Approve
          </button>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Edit
          </button>
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataCatalog;