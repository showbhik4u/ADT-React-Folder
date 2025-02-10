import React, { useState } from 'react';

const DataMapping = () => {
  const [selectedTable, setSelectedTable] = useState('');

  return (
    <div className="p-8 space-y-8">
      {/* Table Selection and Buttons */}
      <div className="flex items-center space-x-4">
        <select 
          className="border p-2 rounded-lg w-64"
          value={selectedTable}
          onChange={(e) => setSelectedTable(e.target.value)}
        >
          <option value="">Select Table</option>
          <option value="BQI124">BQI124</option>
        </select>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Generate Mapping
        </button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Generate Mapping Queries
        </button>
      </div>

      {/* Mapping Table */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <table className="w-full">
          <thead>
            <tr className="text-left bg-gray-50">
              <th className="p-4 font-medium">Source Column</th>
              <th className="p-4 font-medium">Column Description</th>
              <th className="p-4 font-medium">Target Table Name</th>
              <th className="p-4 font-medium">Target Column</th>
              <th className="p-4 font-medium">Target Column Description</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data row */}
            <tr className="border-t">
              <td className="p-4">source_col</td>
              <td className="p-4">Description</td>
              <td className="p-4">target_table</td>
              <td className="p-4">target_col</td>
              <td className="p-4">Target description</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
            Approve
          </button>
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataMapping;