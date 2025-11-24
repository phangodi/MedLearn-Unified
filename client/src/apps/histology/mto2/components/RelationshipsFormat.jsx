import React from 'react';
import { safe, safeString } from '../utils/helpers';

const RelationshipsFormat = ({ data }) => {
  const safeVal = (val) => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    if (val.name) return String(val.name);
    return String(val);
  };

  return (
    <div className="space-y-6">
    {/* EXAM ESSENTIALS - WHERE & HOW - ADAPTIVE TO TISSUE TYPE */}
    {data.examEssentialStructures && (() => {
      // Detect tissue type
      const isPeripheralNerve = data.examEssentialStructures.layers?.includes('endoneurium') || 
                                 data.examEssentialStructures.layers?.includes('perineurium') || 
                                 data.examEssentialStructures.layers?.includes('epineurium');
      
      // Render for PERIPHERAL NERVE
      if (isPeripheralNerve) {
        return (
          <div className="bg-white border-2 border-blue-300 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-blue-200">
              <div className="bg-blue-500 p-2 rounded-lg">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h2 className="text-2xl font-black text-blue-900">EXAM ESSENTIALS - WHERE & HOW THEY RELATE</h2>
            </div>
            
            <div className="space-y-4">
              {/* Inside Fascicles */}
              {(data.examEssentialStructures?.grouped || data.examEssentialStructures?.layers?.includes('endoneurium') || data.examEssentialStructures?.additional) && (
                <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-4">
                  <h3 className="font-bold text-blue-900 mb-2 text-lg">INSIDE FASCICLES:</h3>
                  <div className="space-y-2 ml-4">
                    {safe(data.examEssentialStructures.grouped).map((group, idx) => (
                      <div key={idx} className="text-blue-800">
                        <strong className="capitalize">• {safeVal(group.parent)}</strong>
                        {safe(group.children).length > 0 && (
                          <div className="ml-6 text-sm space-y-1 mt-1">
                            {safe(group.children).map((child, childIdx) => (
                              <div key={childIdx} className="capitalize">→ {safeVal(child)}</div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {data.examEssentialStructures.layers?.includes('endoneurium') && safe(data.layers).find(l => l && l.name && l.name.toLowerCase() === 'endoneurium') && (() => {
                      const endo = data.layers?.find(l => l && l.name && l.name.toLowerCase() === 'endoneurium');
                      return (
                        <div className="text-blue-800 mt-2">
                          <strong>• {endo.name}</strong> {endo.function && `- ${endo.function}`}
                        </div>
                      );
                    })()}
                    
                    {safe(data.examEssentialStructures.additional).filter(item => {
                      const str = typeof item === 'string' ? item : item?.name || String(item);
                      return str.toLowerCase().includes('fibrocyte');
                    }).map((item, idx) => {
                      const displayName = typeof item === 'string' ? item : item?.name || String(item);
                      return (
                        <div key={idx} className="text-blue-800 capitalize">
                          <strong>• {displayName}</strong> - maintain connective tissue
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {data.examEssentialStructures.layers?.includes('perineurium') && safe(data.layers).find(l => l && l.name && l.name.toLowerCase() === 'perineurium') && (() => {
                const peri = data.layers?.find(l => l && l.name && l.name.toLowerCase() === 'perineurium');
                return (
                  <div className="bg-orange-50 border-2 border-orange-400 rounded-lg p-4">
                    <h3 className="font-bold text-orange-900 mb-2 text-lg">AROUND FASCICLES:</h3>
                    <div className="ml-4 text-orange-800">
                      <strong>• {peri.name}</strong> {peri.function && `- ${peri.function}`}
                    </div>
                  </div>
                );
              })()}

              {(data.examEssentialStructures?.layers?.includes('epineurium') || data.examEssentialStructures?.additional) && (
                <div className="bg-gray-50 border-2 border-gray-400 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">OUTSIDE FASCICLES:</h3>
                  <div className="space-y-2 ml-4">
                    {data.examEssentialStructures.layers?.includes('epineurium') && safe(data.layers).find(l => l && l.name && l.name.toLowerCase() === 'epineurium') && (() => {
                      const epi = data.layers?.find(l => l && l.name && l.name.toLowerCase() === 'epineurium');
                      return (
                        <div className="text-gray-800">
                          <strong>• {epi.name}</strong> {epi.function && `- ${epi.function}`}
                        </div>
                      );
                    })()}
                    
                    {safe(data.examEssentialStructures.additional).filter(item => {
                      const str = typeof item === 'string' ? item : item?.name || String(item);
                      return str.toLowerCase().includes('adipocyte');
                    }).map((item, idx) => {
                      const displayName = typeof item === 'string' ? item : item?.name || String(item);
                      return (
                        <div key={idx} className="text-gray-800 capitalize">
                          <strong>• {displayName}</strong> - cushioning and protection
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="bg-red-50 border-2 border-red-400 rounded-lg p-3 text-center">
                <div className="font-bold text-red-900">KEY RELATIONSHIP:</div>
                <div className="text-red-800 text-sm">{data.bigPicture || 'Hierarchical organization from smallest to largest structural units'}</div>
              </div>
            </div>
          </div>
        );
      }
      
      // Render for OTHER TISSUES (Ganglia, CNS, Epithelium, etc.) - GENERIC ADAPTIVE
      return (
        <div className="bg-white border-2 border-blue-300 rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-blue-200">
            <div className="bg-blue-500 p-2 rounded-lg">
              <span className="text-2xl text-white">🎯</span>
            </div>
            <h2 className="text-2xl font-black text-blue-900">EXAM ESSENTIALS - WHERE & HOW THEY RELATE</h2>
          </div>
          
          <div className="space-y-4">
            {/* Main Cellular/Structural Components */}
            {safe(data.examEssentialStructures.grouped).length > 0 && (
              <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-4">
                <h3 className="font-bold text-blue-900 mb-2 text-lg">MAIN COMPONENTS:</h3>
                <div className="space-y-3 ml-4">
                  {safe(data.examEssentialStructures.grouped).map((group, idx) => {
                    const renderChildren = (children, depth = 0) => {
                      if (!children || children.length === 0) return null;
                      return (
                        <div className={`ml-${depth * 6} text-sm space-y-1 mt-1`}>
                          {safe(children).map((child, childIdx) => {
                            const isObject = typeof child === 'object' && child.name;
                            const childName = isObject ? child.name : String(child);
                            const childDesc = isObject ? child.description : null;
                            const hasGrandchildren = isObject && child.children && child.children.length > 0;
                            
                            return (
                              <div key={childIdx} className="text-blue-800">
                                <div className="capitalize">
                                  <span className="font-semibold">→ {childName}</span>
                                  {childDesc && <span className="text-xs ml-2">({childDesc})</span>}
                                </div>
                                {hasGrandchildren && renderChildren(child.children, depth + 1)}
                              </div>
                            );
                          })}
                        </div>
                      );
                    };
                    
                    return (
                      <div key={idx} className="text-blue-800">
                        <strong className="capitalize text-base">• {safeVal(group.parent)}</strong>
                        {group.description && <div className="text-sm ml-6 mt-1 italic">{group.description}</div>}
                        {group.function && <div className="text-sm ml-6 mt-1"><strong>Function:</strong> {group.function}</div>}
                        {renderChildren(group.children)}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Supporting Layers/Structures */}
            {safe(data.examEssentialStructures.layers).length > 0 && (
              <div className="bg-purple-50 border-2 border-purple-400 rounded-lg p-4">
                <h3 className="font-bold text-purple-900 mb-2 text-lg">SUPPORTING LAYERS:</h3>
                <div className="space-y-2 ml-4">
                  {safe(data.examEssentialStructures.layers).map((layerName, idx) => {
                    // Normalize search term: handle abbreviations like "str." -> "stratum"
                    let searchTerm = String(layerName).toLowerCase().trim();
                    // Replace common abbreviations
                    searchTerm = searchTerm.replace(/^str\.\s*/, 'stratum ');
                    
                    const layer = safe(data.layers).find(l => {
                      if (!l || !l.name) return false;
                      const layerNameLower = l.name.toLowerCase();
                      
                      // Try exact match first
                      if (layerNameLower === searchTerm) return true;
                      
                      // Try if layer name starts with search term
                      if (layerNameLower.startsWith(searchTerm)) return true;
                      
                      // Try if search term is contained in layer name with word boundaries
                      const searchWords = searchTerm.split(/\s+/);
                      const layerWords = layerNameLower.split(/\s+/);
                      
                      // Check if all search words appear in layer name in order
                      let lastIndex = -1;
                      const allWordsMatch = searchWords.every(word => {
                        const index = layerWords.findIndex((lw, i) => i > lastIndex && lw.includes(word));
                        if (index !== -1) {
                          lastIndex = index;
                          return true;
                        }
                        return false;
                      });
                      
                      return allWordsMatch;
                    });
                    
                    if (!layer) {
                      return (
                        <div key={idx} className="text-purple-800 capitalize">
                          <strong>• {String(layerName)}</strong>
                        </div>
                      );
                    }
                    return (
                      <div key={idx} className="text-purple-800">
                        <strong>• {layer.name}</strong>
                        {layer.function && <span className="text-sm ml-2">- {layer.function}</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Additional Structures */}
            {safe(data.examEssentialStructures.additional).length > 0 && (
              <div className="bg-gray-50 border-2 border-gray-400 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">ADDITIONAL STRUCTURES:</h3>
                <div className="space-y-2 ml-4">
                  {safe(data.examEssentialStructures.additional).map((item, idx) => {
                    const displayName = typeof item === 'string' ? item : item?.name || String(item);
                    // Try to find more details from multiple sources
                    const detail = safe(data.insideTheFascicles).find(s => 
                      s.structure?.toLowerCase().includes(displayName.toLowerCase())
                    ) || safe(data.aroundOrOutside).find(s => 
                      s.structure?.toLowerCase().includes(displayName.toLowerCase())
                    ) || safe(data.layers).find(l => 
                      l.name?.toLowerCase().includes(displayName.toLowerCase())
                    );
                    
                    return (
                      <div key={idx} className="text-gray-800 capitalize">
                        <strong>• {displayName}</strong>
                        {detail && (detail.function || detail.description) && (
                          <span className="text-sm ml-2">- {detail.function || detail.description}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Key Relationship - Generic */}
            <div className="bg-red-50 border-2 border-red-400 rounded-lg p-3 text-center">
              <div className="font-bold text-red-900">KEY RELATIONSHIP:</div>
              <div className="text-red-800 text-sm">
                {data.bigPicture || 'Organized structural hierarchy from cellular to tissue level'}
              </div>
            </div>
          </div>
        </div>
      );
    })()}

    {/* Nested Structure (Cross-section View) - ONLY FOR PERIPHERAL NERVE */}
    {safe(data.layers).length > 0 && (() => {
      const epi = data.layers.find(l => l && l.name && l.name.toLowerCase() === 'epineurium');
      const peri = data.layers.find(l => l && l.name && l.name.toLowerCase() === 'perineurium');
      const endo = data.layers.find(l => l && l.name && l.name.toLowerCase() === 'endoneurium');
      
      // Only show if peripheral nerve layers exist
      if (!epi && !peri && !endo) return null;
      
      return (
        <div className="bg-white border-2 border-gray-300 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">NESTED STRUCTURE (Cross-section View)</h2>
          <div className="flex justify-center">
            {/* Outermost: Epineurium */}
            {epi && (
              <div className="bg-green-100 border-4 border-green-600 rounded-3xl p-8 w-full max-w-xl">
                <div className="text-center font-bold text-green-800 mb-4">
                  {epi.name.toUpperCase()} {epi.cnsEquivalent && `(${epi.cnsEquivalent})`}
                </div>
                
                {/* Middle: Perineurium */}
                {peri && (
                  <div className="bg-orange-100 border-4 border-orange-500 rounded-2xl p-6">
                    <div className="text-center font-bold text-orange-800 mb-4">
                      {peri.name.toUpperCase()} {peri.cnsEquivalent && `(${peri.cnsEquivalent})`}
                    </div>
                    
                    {/* Inner: Endoneurium */}
                    {endo && (
                      <div className="bg-pink-100 border-4 border-pink-500 rounded-xl p-5">
                        <div className="text-center font-bold text-pink-800 mb-3">
                          {endo.name.toUpperCase()} {endo.cnsEquivalent && `(${endo.cnsEquivalent})`}
                        </div>
                        
                        {/* Innermost: Nerve Fiber */}
                        {data.examEssentialStructures?.grouped && data.examEssentialStructures?.grouped[0] && (
                          <div className="bg-blue-200 border-2 border-blue-600 rounded-lg p-4">
                            <div className="text-center font-bold text-blue-900 mb-2 capitalize">
                              {data.examEssentialStructures.grouped[0].parent.toUpperCase()}
                            </div>
                            {safe(data.examEssentialStructures.grouped[0].children).length > 0 && (
                              <div className="text-center text-blue-800 text-sm capitalize">
                                {safe(data.examEssentialStructures.grouped[0].children).map(child => 
                                  typeof child === 'string' ? child : child?.name || String(child)
                                ).join(' + ')}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      );
    })()}

    {/* Relationship Matrix */}
    {(data.examEssentialStructures?.grouped || safe(data.layers).length > 0) && (
      <div className="bg-white border-2 border-gray-300 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">RELATIONSHIP MATRIX</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 p-3 text-left">Structure</th>
                <th className="border border-gray-400 p-3 text-left">Location</th>
                <th className="border border-gray-400 p-3 text-left">Appearance</th>
                {safe(data.layers).length > 0 && data.layers[0]?.cnsEquivalent && (
                  <th className="border border-gray-400 p-3 text-left">CNS Equivalent</th>
                )}
              </tr>
            </thead>
            <tbody>
              {/* Bundle of Nerve Fibers - FIRST */}
              {safe(data.examEssentialStructures?.grouped).filter(group => !group.parent.toLowerCase().includes('supporting')).map((group, idx) => {
                let appearance = group.appearance;
                if (!appearance && data.insideTheFascicles) {
                  const bundleItem = data.insideTheFascicles.find(item => 
                    item.structure?.toLowerCase().includes('bundle') || 
                    item.structure?.toLowerCase().includes('nerve fiber')
                  );
                  if (bundleItem) {
                    appearance = bundleItem.description;
                  } else if (safe(group.children).length > 0) {
                    const childNames = safe(group.children).map(child => 
                      typeof child === 'string' ? child : child?.name || String(child)
                    );
                    appearance = `Consists of ${childNames.join(', ')}`;
                  }
                }
                
                return (
                  <tr key={`matrix-grouped-${idx}`} className="bg-blue-50">
                    <td className="border border-gray-400 p-3 font-bold">{group.parent}</td>
                    <td className="border border-gray-400 p-3">{group.where || 'Inside fascicles creating characteristic pattern'}</td>
                    <td className="border border-gray-400 p-3">{appearance || 'Myelinated nerve fibers in organized bundles'}</td>
                    {safe(data.layers).length > 0 && data.layers[0]?.cnsEquivalent && (
                      <td className="border border-gray-400 p-3">N/A (PNS structure)</td>
                    )}
                  </tr>
                );
              })}
              
              {/* Layers - AFTER bundle - Use PURPLE to match SUPPORTING LAYERS section */}
              {safe(data.layers).map((layer, idx) => {
                return (
                  <tr key={`matrix-layer-${idx}`} className="bg-purple-50">
                    <td className="border border-gray-400 p-3 font-bold">{layer.name}</td>
                    <td className="border border-gray-400 p-3">{layer.level}</td>
                    <td className="border border-gray-400 p-3">{layer.appearance}</td>
                    {data.layers[0].cnsEquivalent && (
                      <td className="border border-gray-400 p-3">{layer.cnsEquivalent || 'N/A'}</td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    )}

    {/* Size Comparison - ONLY FOR PERIPHERAL NERVE SLIDES */}
    {data.examEssentialStructures && 
     data.examEssentialStructures.layers?.includes('endoneurium') && 
     data.examEssentialStructures?.additional?.some(item => item.toLowerCase().includes('adipocyte')) && (
      <div className="bg-white border-2 border-gray-300 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">SIZE COMPARISON (Critical for ID!)</h2>
        <div className="space-y-4">
          {/* Structures from grouped (axon, myelin) */}
          {safe(data.examEssentialStructures?.grouped).length > 0 && safe(data.examEssentialStructures.grouped[0]?.children).slice(0, 2).map((child, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="flex-shrink-0">
                {idx === 0 ? (
                  <div className="w-3 h-3 rounded-full bg-pink-500 border-2 border-pink-700"></div>
                ) : (
                  <div className="w-8 h-8 rounded-full border-4 border-blue-500 bg-white"></div>
                )}
              </div>
              <div className="text-sm capitalize">
                <span className="font-bold">{typeof child === 'string' ? child : child?.name || String(child)}:</span> {idx === 0 ? 'Tiny pink dot' : 'Tiny white circular halo'}
              </div>
            </div>
          ))}
          
          {/* Adipocyte from additional */}
          {safe(data.examEssentialStructures?.additional).filter(item => item.toLowerCase().includes('adipocyte')).map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full border-4 border-yellow-500 bg-yellow-50"></div>
              </div>
              <div className="text-sm capitalize">
                <span className="font-bold">{item}:</span> HUGE (up to many times bigger)
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 bg-red-50 border-l-4 border-red-500 p-3">
          <p className="text-red-800 text-sm font-semibold">
            ⚠️ COMMON MISTAKE: Confusing adipocytes with myelin - much larger and in EPINEURIUM, not fascicle!
          </p>
        </div>
      </div>
    )}

    {/* Relationships Summary */}
    {safe(data.relationshipsSummary).length > 0 && (
      <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-6">
        <h3 className="font-bold text-blue-900 mb-3 text-xl">🔑 CRITICAL RELATIONSHIPS</h3>
        <div className="space-y-3">
          {safe(data.relationshipsSummary).map((rel, idx) => (
            <div key={idx} className="bg-white rounded p-4 shadow">
              <div className="font-bold text-blue-900 mb-2">{rel.title}</div>
              <div className="text-blue-800 text-sm mb-2 italic">{rel.summary}</div>
              {safe(rel.keyPoints).map((point, i) => (
                <div key={i} className="text-blue-700 text-sm ml-4">• {point}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
  );
};

export default RelationshipsFormat;
