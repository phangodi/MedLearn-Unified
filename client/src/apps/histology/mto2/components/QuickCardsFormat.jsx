import React from 'react';
import { Target } from 'lucide-react';
import RecursiveStructureTree from './RecursiveStructureTree';
import { safe, safeString } from '../utils/helpers';

// Recursive helper to render nested children in Bundle card (handles objects with name/description)
const RenderNestedChild = ({ child, depth = 0 }) => {
  const hasChildren = child.children && child.children.length > 0;
  
  return (
    <div className="mb-2">
      <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
        <div className="flex items-start gap-2">
          <span className="text-gray-700 font-bold flex-shrink-0">{depth === 0 ? '•' : '→'}</span>
          <div className="flex-1">
            <div className="font-semibold text-gray-900 capitalize">{child.name}</div>
            {child.description && (
              <div className="text-sm text-gray-600 mt-1">{child.description}</div>
            )}
            {child.relationship && (
              <div className="text-xs bg-yellow-100 text-yellow-900 px-2 py-1 rounded inline-block mt-1">
                {child.relationship}
              </div>
            )}
          </div>
        </div>
        
        {/* Nested children */}
        {hasChildren && (
          <div className="ml-6 mt-2 pl-3 border-l-2 border-gray-300 space-y-2">
            {child.children.map((grandchild, gidx) => (
              <RenderNestedChild key={gidx} child={grandchild} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const QuickCardsFormat = ({ data }) => (
  <div className="space-y-6">
    

    {/* Staining Card */}
    {data.stainingInfo && (
      <div className="bg-white border-2 border-purple-300 rounded-xl p-6 shadow">
        <div className="mb-4">
          <h3 className="text-2xl font-black text-gray-900">STAINING: {data.stain}</h3>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-3">
          <div className="text-lg font-bold text-gray-900 mb-2">KEY POINT:</div>
          <div className="text-lg text-gray-800">{data.stainingInfo.keyEmphasis}</div>
        </div>
        <div className="text-sm text-gray-700">{data.stainingInfo.description}</div>
      </div>
    )}

    {/* EXAM ESSENTIALS Cards - CORRECT ORDER */}
    {data.examEssentialStructures && (
      <>

        {/* 1. Bundle Cards - from grouped */}
        {data.examEssentialStructures.grouped && data.examEssentialStructures.grouped
          .filter(group => !group.parent.toLowerCase().includes('supporting'))
          .map((group, idx) => {
            // Smart fallback for FUNCTION field
            let functionText = group.function;
            if (!functionText && data.insideTheFascicles) {
              const bundleItem = data.insideTheFascicles.find(item => 
                item.structure?.toLowerCase().includes('bundle') || 
                item.structure?.toLowerCase().includes('axon')
              );
              if (bundleItem) {
                functionText = bundleItem.description;
              }
            }
            // No hardcoded fallback - show only real data
            
            // Smart fallback for QUICK ID field
            let quickIDText = group.quickID;
            if (!quickIDText && data.insideTheFascicles) {
              const bundleItem = data.insideTheFascicles.find(item => 
                item.structure?.toLowerCase().includes('bundle') || 
                item.structure?.toLowerCase().includes('myelin')
              );
              if (bundleItem) {
                quickIDText = bundleItem.description;
              }
            }
            // No hardcoded fallback - show only real data
            
            return (
              <div key={idx} className="bg-white border-2 border-blue-300 rounded-xl p-6 shadow">
                <div className="mb-4">
                  <h3 className="text-2xl font-black text-gray-900">
                    {group.parent.toUpperCase()}
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <div className="font-bold text-sm text-gray-900 mb-1">WHERE:</div>
                    <div className="text-gray-800">{group.where}</div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <div className="font-bold text-sm text-gray-900 mb-1">LOOKS LIKE:</div>
                    <div className="text-gray-800">{group.appearance}</div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <div className="font-bold text-sm text-gray-900 mb-1">CONTAINS:</div>
                    {group.children && group.children.length > 0 ? (
                      <div className="space-y-2">
                        {group.children.map((child, childIdx) => {
                          // Check if new nested format (object with name) or old format (string)
                          const isNestedFormat = typeof child === 'object' && child.name;
                          
                          if (isNestedFormat) {
                            // NEW: Render nested structure with RenderNestedChild component
                            return <RenderNestedChild key={childIdx} child={child} depth={0} />;
                          } else {
                            // OLD: Fallback for flat string arrays (backwards compatibility)
                            return (
                              <div key={childIdx} className="bg-gray-50 rounded-lg p-2 border border-gray-200">
                                <span className="text-gray-900 capitalize">• {child}</span>
                              </div>
                            );
                          }
                        })}
                      </div>
                    ) : (
                      <div className="text-gray-800">{group.contains}</div>
                    )}
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <div className="font-bold text-sm text-gray-900 mb-1">FUNCTION:</div>
                    <div className="text-gray-800">{functionText}</div>
                  </div>
                  
                  <div className="mt-4 bg-blue-100 border-2 border-blue-400 rounded-lg p-3">
                    <div className="font-bold text-sm text-gray-900">SPOT IT: {quickIDText}</div>
                  </div>
                </div>
              </div>
            );
          })}

        {/* 2-4. Layer Cards in ORDER: Endoneurium → Perineurium → Epineurium */}
        {data.examEssentialStructures.layers && data.examEssentialStructures.layers.map((layerName, layerIdx) => {
          const layer = data.layers?.find(l => l && l.name && l.name.toLowerCase() === layerName.toLowerCase());
          if (!layer) return null;
          
          // All layers use purple color (matching "supporting layers" theme)
          const borderColor = 'border-purple-300';
          const bgColor = 'bg-purple-50';
          const highlightBorder = 'border-purple-400';
          
          // Check if this layer has sublayers (e.g., adipocytes under epineurium)
          const hasSubStructures = layerName.toLowerCase() === 'epineurium' && 
            data.examEssentialStructures.additional && 
            data.examEssentialStructures.additional.some(item => item.toLowerCase().includes('adipocyte'));
          
          return (
            <div key={layerIdx}>
              {/* Main Layer Card */}
              <div className={`bg-white border-2 ${borderColor} rounded-xl p-6 shadow`}>
                <div className="mb-4">
                  <h3 className="text-2xl font-black text-gray-900">
                    {layer.name.toUpperCase()}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  <div className={`${bgColor} border ${borderColor} rounded-lg p-3`}>
                    <div className="font-bold text-sm text-gray-900 mb-1">WRAPS:</div>
                    <div className="text-gray-800">{layer.wraps}</div>
                  </div>
                  
                  <div className={`${bgColor} border ${borderColor} rounded-lg p-3`}>
                    <div className="font-bold text-sm text-gray-900 mb-1">LOOKS LIKE:</div>
                    <div className="text-gray-800">{layer.appearance}</div>
                  </div>
                  
                  <div className={`${bgColor} border ${borderColor} rounded-lg p-3`}>
                    <div className="font-bold text-sm text-gray-900 mb-1">KEY FEATURE:</div>
                    <div className="text-gray-800">{layer.composition}</div>
                  </div>
                  
                  {layer.cnsEquivalent && (
                    <div className={`${bgColor} border ${borderColor} rounded-lg p-3`}>
                      <div className="font-bold text-sm text-gray-900 mb-1">CNS =</div>
                      <div className="text-gray-800">{layer.cnsEquivalent}</div>
                    </div>
                  )}
                </div>
                
                <div className={`mt-4 bg-gray-100 border-2 ${highlightBorder} rounded-lg p-3`}>
                  <div className="font-bold text-sm text-gray-900">SPOT IT: {layer.quickID}</div>
                </div>
                
                {/* Adipocytes found within Epineurium */}
                {hasSubStructures && (
                  <div className={`mt-3 ${bgColor} border ${borderColor} rounded-lg p-3`}>
                    <div className="font-bold text-sm text-gray-900 mb-2">FOUND WITHIN EPINEURIUM:</div>
                    <div className="space-y-2">
                      {data.examEssentialStructures.additional
                        .filter(item => item.toLowerCase().includes('adipocyte'))
                        .map((item, subIdx) => {
                          const adipoDetails = data.aroundOrOutside?.find(s => 
                            s.structure?.toLowerCase().includes('adipocyte')
                          );
                          
                          const description = adipoDetails?.description || 'Large white circular spaces (negative image of lipid content); much larger than myelin profiles';
                          
                          return (
                            <div key={subIdx} className="bg-white rounded-lg p-2 border border-gray-300">
                              <div className="font-semibold text-gray-900 capitalize mb-1">{item}:</div>
                              <div className="text-sm text-gray-700">{description}</div>
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* 5. Other Additional Items (exclude adipocytes only) */}
        {data.examEssentialStructures?.additional && data.examEssentialStructures.additional
          .filter(item => !item.toLowerCase().includes('adipocyte'))
          .map((item, idx) => {
            // ALL ADDITIONAL STRUCTURES - Generic gray card with data lookup
            const itemLower = item.toLowerCase();
              
              // Search for details in both arrays
              let details = data.insideTheFascicles?.find(s => 
                s.structure?.toLowerCase().includes(itemLower)
              );
              if (!details) {
                details = data.aroundOrOutside?.find(s => 
                  s.structure?.toLowerCase().includes(itemLower)
                );
              }
              
              // Extract fields from details (DON'T use structure field - it's redundant with title)
              const description = details?.description || '';
              const functionText = details?.function || '';
              const spotIt = details?.spotIt || '';
              
              // Check if we have any actual content to display
              const hasContent = description || functionText || spotIt;
              
              return (
                <div key={idx} className="bg-white border-2 border-gray-400 rounded-xl p-6 shadow">
                  <div className="mb-4">
                    <h3 className="text-2xl font-black text-gray-900 capitalize">
                      {item}
                    </h3>
                  </div>
                  
                  {hasContent ? (
                    <div className="space-y-3">
                      {description && (
                        <div className="bg-gray-50 border border-gray-300 rounded-lg p-3">
                          <div className="font-bold text-sm text-gray-900 mb-1">DESCRIPTION:</div>
                          <div className="text-gray-800">{description}</div>
                        </div>
                      )}
                      
                      {functionText && (
                        <div className="bg-gray-50 border border-gray-300 rounded-lg p-3">
                          <div className="font-bold text-sm text-gray-900 mb-1">FUNCTION:</div>
                          <div className="text-gray-800">{functionText}</div>
                        </div>
                      )}
                      
                      {spotIt && (
                        <div className="mt-4 bg-gray-100 border-2 border-gray-500 rounded-lg p-3">
                          <div className="font-bold text-sm text-gray-900">SPOT IT: {spotIt}</div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-3">
                      <div className="text-gray-700 text-sm italic">
                        Structure from exam essential list. Look for identifying features in the slide.
                      </div>
                    </div>
                  )}
                </div>
              );
          })}

      </>
    )}
  </div>
);

export default QuickCardsFormat;
