import React from 'react';

const VersionSelector = ({ currentVersion, onVersionChange, versions }) => (
  <div className="flex flex-wrap gap-2 mb-6">
    {versions.map((version) => (
      <button
        key={version.id}
        onClick={() => onVersionChange(version.id)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
          currentVersion === version.id
            ? 'bg-blue-600 text-white shadow-lg'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        {version.icon}
        <span className="font-medium">{version.name}</span>
      </button>
    ))}
  </div>
);

export default VersionSelector;
