import React from 'react';

const RecursiveStructureTree = ({ item, depth = 0, color = "blue" }) => {
  const indent = depth * 24; // 24px per nesting level
  
  // Helper: Check if this is a nested object structure (new format)
  const isNestedObject = item && typeof item === 'object' && item.name;
  
  // Helper: Extract name from either format
  const getName = () => {
    if (isNestedObject) return item.name;
    if (typeof item === 'string') return item;
    return 'Unknown structure';
  };
  
  // Helper: Check if item has nested children
  const hasNestedChildren = isNestedObject && item.children && Array.isArray(item.children) && item.children.length > 0;
  
  return (
    <div className="mb-2">
      <div 
        className={`flex items-start gap-2`}
        style={{ marginLeft: `${indent}px` }}
      >
        {/* Connector line for children (depth > 0) */}
        {depth > 0 && (
          <div className="flex items-center gap-1 flex-shrink-0">
            <div className="w-3 h-0.5 bg-blue-300"></div>
            <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
          </div>
        )}
        
        <div className="flex-1">
          {/* Structure name with relationship badge if present */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className={`font-bold capitalize ${depth === 0 ? 'text-blue-800 text-base' : 'text-blue-700 text-sm'}`}>
              {depth === 0 && '• '}{getName()}
            </div>
            
            {/* Relationship badge (e.g., "GAP in myelin", "INSIDE nucleus") */}
            {isNestedObject && item.relationship && (
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded font-semibold border border-yellow-300">
                {item.relationship}
              </span>
            )}
            
            {/* Level indicator for deep nesting */}
            {isNestedObject && depth > 0 && (
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">
                Level {depth + 1}
              </span>
            )}
          </div>
          
          {/* Description if present */}
          {isNestedObject && item.description && (
            <div className="text-sm text-gray-700 mt-1 leading-relaxed">
              {item.description}
            </div>
          )}
          
          {/* Clinical note if present */}
          {isNestedObject && item.clinicalNote && (
            <div className="text-xs text-red-600 mt-1 font-semibold flex items-start gap-1">
              <span>⚠️</span>
              <span>{item.clinicalNote}</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Recursively render nested children with increased depth */}
      {hasNestedChildren && (
        <div className={`${depth === 0 ? 'ml-0' : 'ml-6'} border-l-2 border-blue-200 pl-3 mt-2`}>
          {item.children.map((child, idx) => (
            <RecursiveStructureTree 
              key={idx} 
              item={child} 
              depth={depth + 1}
              color={color}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecursiveStructureTree;
