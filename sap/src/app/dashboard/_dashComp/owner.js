import React from "react";

const owner = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Owner Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Revenue Overview</h2>
          <div className="h-64 flex items-end space-x-2">
            <div className="bg-blue-500 w-1/6 h-1/4" title="Jan: $400"></div>
            <div className="bg-blue-500 w-1/6 h-1/3" title="Feb: $300"></div>
            <div className="bg-blue-500 w-1/6 h-1/2" title="Mar: $600"></div>
            <div className="bg-blue-500 w-1/6 h-3/4" title="Apr: $800"></div>
            <div className="bg-blue-500 w-1/6 h-2/5" title="May: $500"></div>
            <div className="bg-blue-500 w-1/6 h-3/5" title="Jun: $700"></div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Quick Actions</h2>
          <div className="space-y-2">
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Generate Report
            </button>
            <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
              Manage Users
            </button>
            <button className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600">
              System Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default owner;
